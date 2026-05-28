
import Panel from '../../components/soleHubComponents/panel';
function DashboardPage({display}){
    return (

<section className="page"style={{display:display}}>
  <div
    style={{display:"flex",flexDirection:"column",gap:"22px"}}>
    <div className="stat-grid">
      <div className="stat-card">
        <span className="stat-label">Revenue</span>
        <span className="stat-value">$18,540</span>
        <span className="stat-delta up">+12.4%</span>
      </div>
    <div className="stat-card">
      <span className="stat-label">Orders</span>
      <span className="stat-value">243</span>
      <span className="stat-delta up">+6.1%</span>
    </div>
    <div className="stat-card">
      <span className="stat-label">Customers</span>
      <span className="stat-value">124</span>
      <span className="stat-delta up">+3.8%</span>
    </div>
    <div className="stat-card">
      <span className="stat-label">Products</span>
      <span className="stat-value">68</span>
      <span className="stat-delta down">-1.2%</span>
    </div>
    </div>
    <div className="dash-grid">
      <Panel x={[200,140,150,60,80,40]}/>
      <div className="panel">
          <div className="panel-head">
            <h3>Best selling products</h3>
            <a href="products.html" className="see-all">See all</a>
          </div>
          <ul className="mini-list">
            <li>
              <span className="mini-thumb">
                <svg viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                </svg>
              </span>
              <div>
                <b>Nike Air Max</b>
                <small>3 left</small>
              </div>
                <span className="mini-val">$345</span>
            </li>
            <li>
              <span className="mini-thumb dot">
                <svg viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                </svg>
              </span>
              <div>
                <b>Nike Air Max</b>
                <small>3 left</small>
              </div>
                <span className="mini-val">$345</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</section>
    )
}
export default DashboardPage;