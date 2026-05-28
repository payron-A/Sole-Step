import { originProducts } from "../js/products.jsx";
import TopFilter from "../components/filter/topFilter.jsx";
import Card from "../components/card.jsx";
import Footer from '../components/footer.jsx'
import { useState } from "react";

function NewArrivalsPage(){
    const newProduct = [...originProducts].filter(pro=>pro.badge == "New")
    const [products,setProducts] = useState(newProduct);
    const filtersOptions ={
        highPrice:500,
    }
    function FilterTop(option){
        switch(option){
            case "Newest":
                setProducts([...newProduct].filter(pro=>pro.badge == "New"))
                break;
            case "Price: Low to High":
                setProducts([...newProduct].sort((a,b)=>a.price-b.price))
                break;
            case "Price: High to Low":
                setProducts([...newProduct].sort((a,b)=>b.price-a.price))
                break;
            case "Best Sellers":
                setProducts([...newProduct].filter(pro=>pro.price <= (filtersOptions.highPrice / 2)))
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
                            <Card 
                                  id={p.id}
                                  badge={p.badge}
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