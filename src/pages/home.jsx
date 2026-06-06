import Hero from "../components/hero/hero.jsx";
import Category from "../components/category.jsx";
import NewArrivals from "../components/newArrivals-home.jsx";
import FeaturesBar from "../components/hero/featuresBar.jsx";
function HomePage(){
    return(
    <div className="page">
        <Hero/>
        <FeaturesBar/>
        <Category/>
        <NewArrivals/>
    </div>
    )
}
export default HomePage;