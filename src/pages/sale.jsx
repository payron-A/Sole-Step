import { originProducts } from "../js/products.jsx";
import TopFilter from "../components/filter/topFilter.jsx";
import Card from "../components/card.jsx";
import { useState } from "react";
import PageHeader from "../components/pgHeader.jsx";
function SalePage(){
    const saleProduct = [...originProducts].filter(pro=>pro.badge == "Sale")
    const [products,setProducts] = useState(saleProduct);
    const filtersOptions ={
        highPrice:500,
    }
    function FilterTop(option){
        switch(option){
            case "Price: Low to High":
                setProducts([...saleProduct].sort((a,b)=>a.price-b.price))
                break;
            case "Price: High to Low":
                setProducts([...saleProduct].sort((a,b)=>b.price-a.price))
                break;
            case "Best Sellers":
                setProducts([...saleProduct].filter(pro=>pro.price <= (filtersOptions.highPrice / 2)))
                break;
            default :
                setProducts([...saleProduct])
                break;
        }
    }
    return (
        <div className="page">
            <PageHeader currentPage="Sale"/>
            <TopFilter title="Sale" length={products.length}
                            Filtertop={FilterTop}/>
            <div className="product-grid"
                     style={{display:"flex",
                        justifyContent:"center",
                        flexWrap:"wrap",
                        padding:"1rem",
                     gap:" 2rem 1rem "}}>
                    {products.map(p=>
                        <Card   id={p.id}
                            badge={p.badge}
                            image={p.img}
                            category={p.cat}
                            title={p.name}
                            stars={p.stars}
                            price={p.price}
                            key={p.id}/>
                        )}
            </div>
        </div>
    )
}
export default SalePage;