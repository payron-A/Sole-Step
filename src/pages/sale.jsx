import Shop from'./shop.jsx';
import '../styles/filterbar.css';
import { Link } from 'react-router-dom';
function SalePage(){
    return (
        <div className="page">
            <div className="pg-header">
                <div className="breadcrumb">
                    <Link to="/" className="bc-link">Home</Link>
                    <span>›</span>
                    <span className="bc-link">Shop</span>
                </div>
            </div>
            <Shop/>
        </div>
    )
}
export default SalePage;