function Panel({x=[200]}){
    const y = 110;
    return <div className="panel sales-panel">
              <div className="panel-head">
                <h3>Sales overview</h3>
                <select className="mini-select">
                  <option>Last 6 months</option>
                </select>
              </div>
              <svg viewBox="0 0 560 200" className="sales-chart"   
                    preserveAspectRatio="none">
                <defs>
                    <linearGradient  x1="0" y1="0" x2="0" y2="1"id="salesFill">
                        <stop offset="0%" stopColor="var(--rose)"
                        stopOpacity=".35"/>
                        <stop offset="100%" stopColor="var(--rose)" stopOpacity="0"/>
                    </linearGradient>
                </defs>
                <polyline fill="url(#salesFill)" stroke="none" 
                  points={`
                        0,${x.map((x,i)=>`${x} ${y * (i + 1)}`)}560,200 0,220`
                  }/>
                <polyline fill="none" stroke="var(--rose)" 
                  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
                  points={
                    `0,${x.map((x,i)=>`${x} ${y * (i + 1)}`)}`
                  }/>
              </svg>
              <div className="chart-x-labels">
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
              </div>
          </div>
}
export default Panel;