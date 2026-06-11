import { useRef, useState } from "react";
import { originProducts } from "../js/products";
import Card from "./card";
import { Link } from "react-router-dom";
import Button from "./button";
function NewArrivals() {
  const newProduct = [...originProducts].filter(pro=>pro.badge == "New")
  const [products,setProducts] = useState(newProduct);
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const CARD_WIDTH = 340; // card width + gap

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, products.length - 1));
    setCurrent(clamped);
    trackRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.scrollSnapType = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.style.scrollSnapType = "x mandatory";
    const nearest = Math.round(trackRef.current.scrollLeft / CARD_WIDTH);
    goTo(nearest);
  };

  const onScroll = () => {
    const nearest = Math.round(trackRef.current.scrollLeft / CARD_WIDTH);
    setCurrent(nearest);
  };

  return (
    <section className="new-arrivals-section">
      <div className="sec-head">
        <div className="eyebrow">Latest</div>
        <h2>New Arrivals</h2>
      </div>

      <div className="carousel-nav">
        <button className="nav-arrow" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="nav-arrow" onClick={() => goTo(current + 1)} disabled={current >= products.length - 1} aria-label="Next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div
        className="carousel-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={onScroll}
      >
        {products.map((p, i) => (
          <div
            key={p.id}
            className="carousel-item"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Card id={p.id}
                  badge={p.badge}
                  image={p.img}
                  category={p.cat}
                  title={p.name}
                  stars={p.stars}
                  price={p.price}
                  key={p.id}/>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {products.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "dot-active" : ""}`}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "44px" }}>
        <Link to="/shop.jsx"><Button variant="btn-outline">View All Products</Button></Link>
      </div>
    </section>
  );
}

export default NewArrivals;