import FilterBar from "../components/filter/filterbar.jsx";
import TopFilter from "../components/filter/topFilter.jsx";
import Card from "../components/card.jsx";
import { originProducts } from "../js/products.jsx";
import { useState } from "react";
function ShopPage(){
    const [products,setProducts] = useState(originProducts);
    const filtersOptions ={
        title:"category",
        filterLinks:["All Product","Women shoes","Kids shoes"],
        sizes:[23,34,343,54,32],
        highPrice:500,
        color:["red","yellow","white","brown"],
        materials:["Leather","Canvas","Knit","Cotton"],
    }
    function filterCategory(cat){
    switch(cat){
        case "Women shoes":
            setProducts([...originProducts].filter(c => c.cat == "women"))
            break;
        
        case "Kids shoes":
            setProducts([...originProducts].filter(c => c.cat == "kids"))
            break;
        default:
            setProducts([...originProducts])
            break;
        }
    }
    function filterSize(size){
        setProducts([...originProducts].filter(pro=>pro.size.includes(size)))
    }
    function filterPrice(price){
        setProducts([...originProducts].filter(pro=>pro.price<=price))
    }
    function filterColor(col){
        setProducts([...originProducts].filter(pro=>pro.colors.includes(col)))
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
                <TopFilter title="Shop" length={products.length}
                            Filtertop={FilterTop}/>
                <FilterBar filter={filtersOptions} products={filterCategory}
                            filtersize={filterSize} filterprice={filterPrice}
                            filtercolor={filterColor}/>
                <div className="product-grid"
                     style={{display:"flex",
                        justifyContent:"center",
                        flexWrap:"wrap",
                        padding:"1rem",
                     gap:" 2rem 1rem "}}>
                        {products.map(p=>
                            <Card id={p.id}
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
export default ShopPage;