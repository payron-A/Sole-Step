import Button from "./button";
import { Link } from "react-router-dom";
function PromoBanner(){
    return(
        <section style={{background:"var(--charcoal)",padding:"80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center"}}>
            <div>
                <div style={{fontSize:"10px",letterSpacing:".25em",textTransform:"uppercase",color:"var(--rose)",marginBottom:"16px"}}>Limited Offer</div>
                <h2 style={{fontSize:"52px",fontWeight:400,color:"var(--white)",lineHeight:1.05,marginBottom:"20px"}}>Up to <em style={{color:"var(--rose-deep)"}}>40% off</em><br/>select styles</h2>
                <p style={{fontSize:"14px",color:"rgba(255,255,255,.6)",lineHeight:1.75,marginBottom:"36px"}}>Shop our seasonal sale and discover premium footwear at unbeatable prices. Offer ends soon.</p>
                <Link to="/sale.jsx"><Button variant="btn-rose">Shop the Sale</Button></Link>
            </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                <img src="https://picsum.photos/seed/sale1/300/340" style={{width:"100%",height:"220px",objectFit:"cover",borderRadius:"2px"}}/>
                <img src="https://picsum.photos/seed/sale2/300/340" style={{width:"100%",height:"220px",objectFit:"cover",borderRadius:"2px",marginTop:"32px"}}/>
            </div>
        </section>
    )
}
export default PromoBanner;