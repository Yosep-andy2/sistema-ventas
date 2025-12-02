import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-light border-end" style={{ width: '250px', minHeight: 'calc(100vh - 120px)' }}>
            <div className="list-group list-group-flush">
                <Link to="/dashboard" className="list-group-item list-group-item-action">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </Link>
                <Link to="/home" className="list-group-item list-group-item-action">
                    <i className="bi bi-house-door me-2"></i>
                    Home
                </Link>
                <Link to="/productos" className="list-group-item list-group-item-action">
                    <i className="bi bi-box-seam me-2"></i>
                    Productos
                </Link>
                <Link to="/clientes" className="list-group-item list-group-item-action">
                    <i className="bi bi-people me-2"></i>
                    Clientes
                </Link>
                <Link to="/ventas" className="list-group-item list-group-item-action">
                    <i className="bi bi-cart-check me-2"></i>
                    Ventas
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
