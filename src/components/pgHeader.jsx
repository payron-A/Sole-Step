import { Link } from "react-router-dom";
function PageHeader({currentPage}){
    return <div className="pg-header">
                    <div className="breadcrumb">
                        <Link to="/shop.jsx" className="bc-link">Shop</Link>
                        <span>›</span>
                        <span className="bc-link">{currentPage}</span>
                    </div>
            </div>
}
export default PageHeader;