function ReviewsPage(){
    return(
<div className="content">
      <section className="page">
        <div className="toolbar">
            <div className="search-box">
                <svg viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M21 21l-4.3-4.3"/>
                </svg>
                <input placeholder="Search reviews…"/>
            </div>
        </div>
        <ul className="review-list">
            <li className="review-card">
                <svg className="img"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.8" 
                        strokeLinecap="round"><circle cx="12" cy="8" 
                        r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
                </svg>
                <div className="review-body">
                    <div className="review-top">
                        <b>Ahmed Ahmed</b>
                        <span className="review-stars">★★★★★</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div className="review-actions">
                    <button className="btn-ghost">Approve</button>
                    <button className="btn-ghost danger">Reject</button>
                </div>
            </li>
        </ul>

      </section>
    </div>
    )
}
export default ReviewsPage;