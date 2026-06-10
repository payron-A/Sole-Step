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
        filterLinks:["All Kids","Sneakers","Boots","School Shoes"],
        sizes:[23,34,343,54,32],
        highPrice:300,
        color:["#920402","red","gray","yello","gold","pink","green"],
    }
    function filterSize(size){
        setProducts([...kidsProduct].filter(pro=>pro.size.includes(size)))
    }
    function filterKids(cat){
        switch(cat){
            case "Sneakers":
                setProducts([...kidsProduct].filter(c => c.type == "sneakers"))
                break;
            case "School Shoes":
                setProducts([...kidsProduct].filter(c => c.type == "school shoes"))
                break;
            case "Boots":
                setProducts([...kidsProduct].filter(c => c.type == "boots"))
                break;
            default:
                setProducts([...kidsProduct])
                break;
        }
    }
    function filterSize(size){
        setProducts([...kidsProduct].filter(pro=>pro.size.includes(size)))
    }
    function filterPrice(price){
        setProducts([...kidsProduct].filter(pro=>pro.price<=price))
    }
    function filterColor(col){
        setProducts([...kidsProduct].filter(pro=>pro.colors.includes(col)))
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
                <TopFilter title="Kids" length={products.length}
                            Filtertop={FilterTop}/>
                <FilterBar filter={filtersOptions} products={filterKids}
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
export default KidsPage;