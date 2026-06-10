import { originProducts } from "../js/products.jsx";
import FilterBar from "/src/components/filter/filterbar.jsx";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import Footer from '../components/footer.jsx'
import { useState } from "react";
function WomenPage(){
    const womenProduct = [...originProducts].filter(pro=>pro.cat == "women")
    const [products,setProducts] = useState(womenProduct);
    const filtersOptions ={
        title:"Women Categories",
        filterLinks:["All Women","Sneakers","Heels","Flats","Boots"],
        sizes:[23,34,343,54,32],
        highPrice:400,
        color:["#920402","red","gray","yello","gold","pink","green"],
    }
    function filterWomen(cat){
        switch(cat){
            case "Sneakers":
                setProducts([...womenProduct].filter(c => c.type == "sneakers"))
                break;
            case "Heels":
                setProducts([...womenProduct].filter(c => c.type == "heels"))
                break;
            case "Flats":
                setProducts([...womenProduct].filter(c => c.type == "flats"))
                break;
            case "Boots":
                setProducts([...womenProduct].filter(c => c.type == "boots"))
                break;
            default:
                setProducts([...womenProduct])
                break;
        }
    }
    function filterSize(size){
        setProducts([...womenProduct].filter(pro=>pro.size.includes(size)))
    }
    function filterPrice(price){
        setProducts([...womenProduct].filter(pro=>pro.price<=price))
    }
    function filterColor(col){
        setProducts([...womenProduct].filter(pro=>pro.colors.includes(col)))
    }
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
                <TopFilter title="Women" length={products.length}
                            Filtertop={FilterTop}/>
                <FilterBar filter={filtersOptions} products={filterWomen}
                            filtersize={filterSize} filterprice={filterPrice}
                            filtercolor={filterColor}/>
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
            </div>
    )
}
export default WomenPage;