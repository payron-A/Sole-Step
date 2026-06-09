import FilterBar from "/src/components/filter/filterbar.jsx";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import { originProducts } from "../js Data/products";
import { useState } from "react";
import Footer from '../components/footer.jsx'
function ShopPage(){
    const [products,setProducts] = useState(originProducts);
    const filtersOptions ={
        title:"category",
        filterLinks:["All Product","Women Shoes","Kids Shoes","Sokcs","Best Sellers"],
        sizes:[23,34,343,54,32],
        highPrice:500,
        color:["red","yellow","white","brown"],
        materials:["Leather","Canvas","Knit","Cotton"],
    }
    return (
            <div className="page">
                <TopFilter title="Shop" length={products.length}/>
                <FilterBar filter={filtersOptions} products={products}/>
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
export default ShopPage;