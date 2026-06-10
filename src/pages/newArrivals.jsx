import { originProducts } from "../js/products.jsx";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import Footer from '../components/footer.jsx'
import { useState } from "react";

function NewArrivalsPage(){
    const newProduct = [...originProducts].filter(pro=>pro.badge == "New")
    const [products,setProducts] = useState(newProduct);
    function FilterTop(option){
        switch(option){
            case "Newest":
                setProducts([...originProducts].filter(pro=>pro.badge == "New"))
                break;
            case "Price: Low to High":
                setProducts([...originProducts].sort((a,b)=>a.price-b.price))
                break;
            case "Price: High to Low":
                setProducts([...originProducts].sort((a,b)=>b.price-a.price))
                break;
            case "Best Sellers":
                setProducts([...originProducts].filter(pro=>pro.price <= (filtersOptions.highPrice / 2)))
                break;
        }
    }
    return (
            <div className="page">
                <TopFilter title="New Arrivals" length={products.length}
                            Filtertop={FilterTop}/>
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