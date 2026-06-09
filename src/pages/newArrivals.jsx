import { originProducts } from "../js Data/products";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import Footer from '../components/footer.jsx'
import { useState } from "react";

function NewArrivalsPage(){
    const newProduct = [...originProducts].filter(pro=>pro.badge == "New")
    const [products,setProducts] = useState(newProduct);
    return (
            <div className="page">
                <TopFilter title="New Arrivals" length={products.length}/>
                <div className="product-grid"
                     style={{display:"flex",
                        justifyContent:"center",
                        flexWrap:"wrap",
                        padding:"1rem",
                     gap:" 2rem 1rem "}}>
                        {products.map(p=>
                            <Card badge={p.badge}
                                  image={p.img}
                                  category={p.cat}
                                  title={p.name}
                                  stars={p.stars}
                                  price={p.price}
                                  key={p.id}/>
                        )}
                     </div>
                     <Footer/>
            </div>
    )
}
export default NewArrivalsPage;