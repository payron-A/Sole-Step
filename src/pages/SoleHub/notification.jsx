import { useState } from "react";

// _____ Sample activity notifications (not tied to product data)
const initialActivity = [
    { id: "a1", title: "Low Order", text: "Order #00024 has been pending for 2 days.", time: "1 hour ago" },
    { id: "a2", title: "New Order", text: "A new order was placed by Ahmed.", time: "2 hours ago" },
];

function NotificationPage({display,products=[]}){

    // _____ STATE _____
    const [activity,setActivity] = useState(initialActivity);
    const [dismissedStockIds,setDismissedStockIds] = useState([]);

    // _____ Low stock alerts, generated live from real product data
    const stockAlerts = products
        .filter(p => +p.stock < 5 && !dismissedStockIds.includes(p.id))
        .map(p => ({
            id: p.id,
            title: "Low Stock",
            text: `${p.name} is running low on stock (${p.stock ?? 0} left).`,
            time: "Just now"
        }));

    const allNotifications = [...stockAlerts, ...activity];

    function dismiss(item){
        if(item.time === "Just now"){
            setDismissedStockIds(prev => [...prev, item.id]);
        }else{
            setActivity(prev => prev.filter(a => a.id !== item.id));
        }
    }

    return (
<section className="page" style={{display:display}}>
    <ul className="notif-list">
        {allNotifications.length === 0 &&
            <li className="notif-card">
                <div><b>You're all caught up</b><p>No new notifications.</p></div>
            </li>
        }
        {allNotifications.map((item,i)=>
            <li className="notif-card" 
                key={i}>
                <span className="notif-dot"></span>
                <div>
                    <b>{item.title}</b>
                    <p>{item.text}</p>
                </div>
                <small>{item.time}</small>
                <button className="icon-btn"
                        title="Dismiss"
                        onClick={()=>dismiss(item)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 6l12 12M18 6L6 18"/>
                    </svg>
                </button>
            </li>
        )}
    </ul>
</section>
    )
}
export default NotificationPage;
