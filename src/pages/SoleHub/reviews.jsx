import { useState } from "react";

function ReviewsPage({display,reviews,setReviewStatus}){

    const [search,setSearch] = useState("");

    const visible = reviews.filter(r =>
        r.customerName.toLowerCase().includes(search.trim().toLowerCase())
    );

    return(
<section className="page"style={{display:display}}>
<div className="toolbar">
    <div className="search-box">
        <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
        </svg>
        <input placeholder="Search reviews…"
               onChange={(e)=>setSearch(e.target.value)}/>
    </div>
</div>
<ul className="review-list">
    {visible.map(review =>
        <li className="review-card" key={review.id}>
            <svg className="img"
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round"><circle cx="12" cy="8"
                    r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
            </svg>
            <div className="review-body">
                <div className="review-top">
                    <b>{review.customerName}</b>
                    <span className="review-stars">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
                </div>
                <p>{review.text}</p>
                {review.status !== "pending" &&
                    <small style={{color:"var(--taupe)"}}>
                        Status: {review.status}
                    </small>
                }
            </div>
            {review.status === "pending" &&
                <div className="review-actions">
                    <button className="btn-ghost"
                            onClick={()=>setReviewStatus(review.id,"approved")}>
                        Approve
                    </button>
                    <button className="btn-ghost danger"
                            onClick={()=>setReviewStatus(review.id,"rejected")}>
                        Reject
                    </button>
                </div>
            }
        </li>
    )}
    {visible.length === 0 &&
        <p style={{color:"var(--taupe)"}}>No reviews match your search.</p>
    }
</ul>
</section>)
}
export default ReviewsPage;
