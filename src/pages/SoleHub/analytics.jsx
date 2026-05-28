import Panel from "../../components/soleHubComponents/panel";

function AnalyticsPage(){
    return(
<div className="content">
    <section className="page">
            
    <div className="dash-grid">
        <div className="panel sales-panel">
            <div className="panel-head">
                <h3>Sales</h3>
            </div>
            <Panel x={[200,140,150,60,80,40]}/>
        </div>
        <div className="panel sales-panel">
            <div className="panel-head">
                <h3>Revenue</h3>
            </div>
            <div className="bar-chart">
                <div className="bar" style={{height:"40%"}}></div>
                <div className="bar" style={{height:"65%"}}></div>
                <div className="bar" style={{height:"50%"}}></div>
                <div className="bar" style={{height:"80%"}}></div>
                <div className="bar" style={{height:"55%"}}></div>
                <div className="bar" style={{height:"90%"}}></div>
            </div>
        </div>
        <div className="panel">
            <div className="panel-head">
                <h3>Best categories</h3>
            </div>
            <ul className="mini-list">
                <li>
                    <span className="mini-thumb dot">1</span>
                    <div>
                        <b>Sneakers</b>
                        <small>62% of sales</small>
                    </div>
                </li>
                <li>
                    <span className="mini-thumb dot">2</span>
                    <div>
                        <b>Boots</b>
                        <small>30% of sales</small>
                    </div>
                </li>
                <li>
                    <span className="mini-thumb dot">3</span>
                    <div>
                        <b>Sandals</b>
                        <small>8% of sales</small>
                    </div>
                </li>
            </ul>
        </div>
        <div className="panel donut-panel">
            <div className="panel-head">
                <h3>Products</h3></div>
                <svg viewBox="0 0 120 120" className="donut">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--stone)" strokeWidth="16"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--rose)" strokeWidth="16" strokeDasharray="196 314" strokeLinecap="round"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--charcoal)" strokeWidth="16" strokeDasharray="94 314" strokeDashoffset="-196" strokeLinecap="round"/>
                </svg>
                <div className="donut-legend">
                    <span>
                        <i style={{background:"var(--rose)"}}></i>
                        Sneakers 62%
                    </span>
                    <span>
                        <i style={{background:"var(--charcoal)"}}></i>
                        Boots 30%
                    </span>
                    <span>
                        <i style={{background:"var(--stone)"}}></i>
                        Other 8%
                    </span>
            </div>
        </div>
    </div>

    </section>
</div>
)
}
export default AnalyticsPage;