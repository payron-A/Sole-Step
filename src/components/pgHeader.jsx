import { Link } from "react-router-dom";
function PageHeader({currentPage}){
    return <div className="pg-header">
                    <div className="breadcrumb">
                        <Link to="/" className="bc-link">Home</Link>
                        <span>›</span>
                        <span className="bc-link">{currentPage}</span>
                    </div>
            </div>
}
export default PageHeader;