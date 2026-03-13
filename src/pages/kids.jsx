import { originProducts } from "../js/products.jsx";
import FilterBar from "/src/components/filter/filterbar.jsx";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import Footer from '../components/footer.jsx'
import { useState } from "react";
function KidsPage(){
    const kidsProduct = [...originProducts].filter(pro=>pro.cat == "kids")
    const [products,setProducts] = useState(kidsProduct);
    const filtersOptions ={
        title:"Kids Categories",
        filterLinks:["All Kids","Sneakers","Sneakers","Boots","School Shoes"],
        sizes:[23,34,343,54,32],
        highPrice:300,
        color:["#920402","red","gray","yello","gold","pink","green"],
    }
    return (
            <div className="page">
                <TopFilter title="Kids" length={products.length}/>
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
export default KidsPage;