import { useRef, useState } from "react";
import Card from "./card";
import Button from "./button";

const products = [
  { id: 1, badge: "Special", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=620&auto=format&fit=crop", category: "Women · Shoes", title: "White Premium Sneakers", stars: 5, price: "$89.00", originalPrice: "$120.00" },
  { id: 2, badge: "New",     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=620&auto=format&fit=crop", category: "Men · Shoes",   title: "Sport Run Trainer",       stars: 4, price: "$95.00", originalPrice: "$130.00" },
  { id: 3, badge: null,      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=620&auto=format&fit=crop", category: "Men · Shoes",   title: "Classic Comfort Loafers", stars: 4, price: "$74.00", originalPrice: "$99.00"  },
  { id: 4, badge: "Special", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=620&auto=format&fit=crop", category: "Women · Shoes", title: "Rose Suede Mules",        stars: 5, price: "$112.00",originalPrice: "$145.00" },
  { id: 5, badge: null,      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=620&auto=format&fit=crop", category: "Unisex · Socks","title": "Merino Crew Socks",    stars: 5, price: "$24.00", originalPrice: null       },
  { id: 6, badge: "Sale",    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=620&auto=format&fit=crop", category: "Men · Shoes",   title: "Leather Derby Oxfords",  stars: 5, price: "$138.00",originalPrice: "$179.00" },
];

function NewArrivals() {
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
            <Card
              badge={p.badge}
              image={p.image}
              category={p.category}
              title={p.title}
              stars={p.stars}
              price={p.price}
              originalPrice={p.originalPrice}
            />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {products.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to product ${i + 1}`}
          />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "44px" }}>
        <Button variant="btn-outline">View All Products</Button>
      </div>
    </section>
  );
}

export default NewArrivals;