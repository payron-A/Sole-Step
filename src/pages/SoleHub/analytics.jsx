import Panel from "../../components/soleHubComponents/panel";
import { getTypeBreakdown, getRevenue } from "../../js/stats";

const DONUT_COLORS = ["var(--rose)","var(--charcoal)",
                      "var(--stone)","var(--taupe)"];
const CIRCUMFERENCE = 314; // 2 * π * r(50), matches the SVG below

function AnalyticsPage({display,products,customers}){

    const breakdown = getTypeBreakdown(products).slice(0,4);
    const revenue = getRevenue(customers);

    // Build cumulative stroke-dash offsets so each donut arc starts
    // right where the previous one ended.
    const arcs = breakdown.reduce((acc, entry, i) => {
        const offsetSoFar = acc.reduce((sum,a)=> sum + a.length, 0);
        const length = (entry.percent/95) * CIRCUMFERENCE;
        acc.push({ ...entry, length, offset: -offsetSoFar, color: DONUT_COLORS[i % DONUT_COLORS.length] });
        return acc;
    }, []);

    return(
<section className="page"style={{display:display}}>
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
            {customers.map(c => {
                const maxSpent = Math.max(...customers.map(x=>+x.totalSpent||0), 1);
                const height = Math.max(8, Math.round(((+c.totalSpent||0)/maxSpent)*100));
                return <div className="bar" key={c.id} title={`${c.name}: $${c.totalSpent||0}`} style={{height:`${height}%`}}></div>
            })}
        </div>
        <small style={{color:"var(--taupe)"}}>Total: ${revenue.toLocaleString()}</small>
    </div>
    <div className="panel">
        <div className="panel-head">
            <h3>Best categories</h3>
        </div>
        <ul className="mini-list">
            {breakdown.map((entry,i)=>
                <li key={entry.type}>
                    <span className="mini-thumb dot">{i+1}</span>
                    <div>
                        <b style={{textTransform:"capitalize"}}>{entry.type}</b>
                        <small>{entry.percent}% of catalog</small>
                    </div>
                </li>
            )}
            {breakdown.length === 0 &&
                <li>
                    <div>
                        <b>No products yet</b>
                    </div>
                </li>
            }
        </ul>
    </div>
    <div className="panel donut-panel">
        <div className="panel-head">
            <h3>Products</h3>
        </div>
        <svg viewBox="0 0 120 120" className="donut">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--stone)" strokeWidth="16"/>
            {arcs.map(arc =>
                <circle key={arc.type} cx="60" cy="60" r="50" fill="none"
                    stroke={arc.color} strokeWidth="16"
                    strokeDasharray={`${arc.length} ${CIRCUMFERENCE}`}
                    strokeDashoffset={arc.offset}
                    strokeLinecap="round"/>
            )}
        </svg>
        <div className="donut-legend">
            {arcs.map(arc =>
                <span key={arc.type}>
                    <i style={{background:arc.color}}></i>
                    <span style={{textTransform:"capitalize"}}>{arc.type}</span> {arc.percent}%
                </span>
            )}
        </div>
    </div>
</div>
</section>
)
}
export default AnalyticsPage;
