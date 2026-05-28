function NotificationPage(){
    return (
<>
<ul className="notif-list">
    <li className="notif-card">
        <span className="notif-dot"></span>
        <div>
            <b>Low Stock</b>
            <p>Nike Air Max is running low on stock.</p>
        </div>
        <small>5 mins ago</small>
    </li>
    <li className="notif-card">
        <span className="notif-dot"></span>
        <div>
            <b>Low Order</b>
            <p>Order #00024 has been pending for 2 days.</p>
        </div>
        <small>1 hour ago</small>
    </li>
    <li className="notif-card">
        <span className="notif-dot"></span>
        <div>
            <b>New Order</b>
            <p>A new order was placed by Ahmed.</p>
        </div>
        <small>2 hours ago</small>
    </li>
</ul>
</>
)
}
export default NotificationPage;