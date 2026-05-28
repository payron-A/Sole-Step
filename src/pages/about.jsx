import { Link } from 'react-router-dom';
import FeaturesBar from '../components/hero/featuresBar';
import Footer from '../components/footer';
import Button from '../components/button';
import '../styles/about.css';

const stats = [
  { number: '12+', label: 'Years of Craft' },
  { number: '340+', label: 'Styles Available' },
  { number: '98%', label: 'Happy Customers' },
  { number: '60+', label: 'Countries Served' },
];

const values = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every pair is crafted from ethically sourced materials, built to last seasons — not just one.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Sustainable',
    desc: 'We partner with responsible suppliers and use recycled packaging across our entire supply chain.',
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Made for You',
    desc: 'From wide-fit to narrow, kids to women — our sizing is designed to fit every step of life.',
  },
];

function AboutPage() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="ab-hero">
        <div className="ab-hero-text">
          <div className="eyebrow">Our Story</div>
          <h1>Where Comfort<br />Meets <em>Beauty</em></h1>
          <p>
            Sole & Step was born from a simple belief — that you shouldn't
            have to choose between looking good and feeling good.
            Since 2012, we've been crafting footwear that honours both.
          </p>
          <Link to="/shop">
            <Button variant="btn-dark">Shop the Collection</Button>
          </Link>
        </div>

        <div className="ab-hero-img">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80"
            alt="Sole and Step craftsmanship"
          />
          <div className="ab-hero-badge">
            <div className="ab-badge-label">Est.</div>
            <div className="ab-badge-val">2012</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ab-stats">
        {stats.map(s => (
          <div key={s.label} className="ab-stat">
            <span className="ab-stat-num">{s.number}</span>
            <span className="ab-stat-lbl">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── VALUES ── */}
      <section className="ab-values">
        <div className="sec-head">
          <div className="eyebrow">What We Stand For</div>
          <h2>Our Values</h2>
        </div>
        <div className="ab-values-grid">
          {values.map(v => (
            <div key={v.title} className="ab-value-card">
              <div className="ab-value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ── CRAFT ── */}
      <section className="ab-craft">
        <div className="ab-craft-img">
          <img
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80"
            alt="Shoe craftsmanship"
          />
        </div>
        <div className="ab-craft-text">
          <div className="eyebrow">The Craft</div>
          <h2>Handpicked.<br />Hand-finished.</h2>
          <p>
            Every sole is inspected by hand. Every stitch is deliberate.
            We work with artisan workshops that have been perfecting their
            craft for generations.
          </p>
          <p>
            We keep our production runs small — not because we have to,
            but because we want to know every pair by name.
          </p>
        </div>
      </section>
      {/* ── PULL QUOTE ── */}
      <section className="ab-quote">
        <blockquote>
          "A great shoe doesn't just carry you from place to place —
          it carries you through every chapter of your story."
        </blockquote>
        <cite>— Founder, Sole & Step</cite>
      </section>

    {/* ── FEATURES BAR ── */}
      <FeaturesBar />
      <Footer />
    </div>
  );
}

export default AboutPage;