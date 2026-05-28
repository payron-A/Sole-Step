import Hero from "../components/hero/hero.jsx";
import Category from "../components/category.jsx";
import Footer from "../components/footer.jsx";
import PromoBanner from "../components/promoBanner.jsx";
import NewArrivals from "../components/newArrivals-home.jsx";
import FeaturesBar from "../components/hero/featuresBar.jsx";
function HomePage(){
    return(
    <div className="page">
        <Hero/>
        <FeaturesBar/>
        <Category/>
        <NewArrivals/>
        <PromoBanner/>
        <Footer/>
    </div>
    )
}
export default HomePage;