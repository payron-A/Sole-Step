import Panel from '../../components/soleHubComponents/panel';
import { getRevenue, getOrderCount, getBestSelling } from '../../js/stats';

function DashboardPage({display,setPage,products,customers}){

    const revenue = getRevenue(customers);
    const orders = getOrderCount(customers);
    const bestSelling = getBestSelling(products, 2);
    const lowStockCount = products.filter(p => +p.stock < 5).length;

    return (

<section className="page"style={{display:display}}>
  <div
    style={{display:"flex",flexDirection:"column",gap:"22px"}}>
    <div className="stat-grid">
      <div className="stat-card">
        <span className="stat-label">Revenue</span>
        <span className="stat-value">${revenue.toLocaleString()}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Orders</span>
        <span className="stat-value">{orders}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Customers</span>
        <span className="stat-value">{customers.length}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Products</span>
        <span className="stat-value">{products.length}</span>
        {lowStockCount > 0 &&
            <span className="stat-delta down">{lowStockCount} low stock</span>
        }
      </div>
    </div>
    <div className="dash-grid">
      <Panel x={[200,140,150,60,80,40]}/>
      <div className="panel">
          <div className="panel-head">
            <h3>Best selling products</h3>
            <a onClick={()=>setPage("Products")}
              className="see-all">See all
            </a>
          </div>
          <ul className="mini-list">
            {bestSelling.map(product =>
              <li key={product.id}>
                <span className="mini-thumb">
                  <svg viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5-9 5-9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>
                  </svg>
                </span>
                <div>
                  <b>{product.name}</b>
                  <small>{product.stock ?? 0} left</small>
                </div>
                  <span className="mini-val">${product.price}</span>
              </li>
            )}
            {bestSelling.length === 0 &&
              <li><div><b>No products yet</b></div></li>
            }
          </ul>
      </div>
    </div>
  </div>
</section>
    )
}
export default DashboardPage;
