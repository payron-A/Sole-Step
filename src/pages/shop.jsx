import FilterBar from "/src/components/filter/filterbar.jsx";
import TopFilter from "/src/components/filter/topFilter.jsx";
import Card from "/src/components/card.jsx";
import { useState } from "react";
function ShopPage(){
    const originProducts =[
  {id:1,name:'White Premium Sneakers',price:89,stars:4,cat:'women',badge:'New',img:'https://picsum.photos/seed/p01/400/450'},
  {id:2,name:'Pink Sneakers',price:79,stars:4,cat:'women',badge:'',img:'https://picsum.photos/seed/p02/400/450'},
  {id:3,name:'Beige Heels',price:129,stars:4,cat:'women',badge:'Hot',img:'https://picsum.photos/seed/p03/400/450'},
  {id:4,name:'Black Boots',price:149,stars:4,cat:'women',badge:'',img:'https://picsum.photos/seed/p04/400/450'},
  {id:5,stars:4,name:'Pink Flats',price:89,cat:'women',badge:'New',img:'https://picsum.photos/seed/p05/400/450'},
  {id:6,stars:4,name:'White Sandals',price:79,cat:'women',badge:'',img:'https://picsum.photos/seed/p06/400/450'},
  {id:7,stars:4,name:'Sporty Sneakers',price:99,cat:'women',badge:'',img:'https://picsum.photos/seed/p07/400/450'},
  {id:8,stars:4,name:'Rose Gold Heels',price:119,cat:'women',badge:'Sale',img:'https://picsum.photos/seed/p08/400/450'},
  {id:9,stars:4,name:'Velcro Sneakers',price:49,cat:'kids',badge:'New',img:'https://picsum.photos/seed/p09/400/450',desc:'Easy-on velcro sneakers for little feet. Durable, colorful, and super comfortable.'},
  {id:10,stars:4,name:'Light Up Shoes',price:89,cat:'kids',badge:'Hot',img:'https://picsum.photos/seed/p10/400/450',desc:'Fun light-up shoes kids will love! Durable LED soles that flash with every step.'},
  {id:11,stars:4,name:'Casual Sneakers',price:45,cat:'kids',badge:'',img:'https://picsum.photos/seed/p11/400/450',desc:'Comfortable casual sneakers for everyday adventures. Breathable and easy to clean.'},
  {id:12,stars:4,name:'Mary Jane Shoes',price:39,cat:'kids',badge:'',img:'https://picsum.photos/seed/p12/400/450',desc:'Classic Mary Jane shoes in premium leather. Perfect for school and special occasions.'},
  {id:13,stars:4,name:'Winter Boots (Kids)',price:65,cat:'kids',badge:'',img:'https://picsum.photos/seed/p13/400/450',desc:'Warm and waterproof winter boots designed for active kids in cold weather.'},
  {id:14,stars:4,name:'Sporty Kids Shoes',price:55,cat:'kids',badge:'New',img:'https://picsum.photos/seed/p14/400/450',desc:'High-performance sports shoes with excellent grip and ankle support for growing kids.'},
];
    const [products,setProducts] = useState(originProducts);
    return (
            <div className="page">
                <TopFilter/>
                <FilterBar/>
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
export default ShopPage;