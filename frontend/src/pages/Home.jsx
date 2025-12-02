import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Sistema de Ventas</h1>
            <p className="lead">Bienvenido al sistema de gestión de ventas</p>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Gestión de Productos</h5>
                            <p className="card-text">
                                Administra tu catálogo de productos, actualiza precios y controla el inventario.
                            </p>
                            <Link to="/productos" className="btn btn-primary">
                                Ir a Productos
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Gestión de Clientes</h5>
                            <p className="card-text">
                                Mantén un registro completo de tus clientes y su información de contacto.
                            </p>
                            <Link to="/clientes" className="btn btn-success">
                                Ir a Clientes
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Registro de Ventas</h5>
                            <p className="card-text">
                                Registra y consulta todas las transacciones de venta realizadas.
                            </p>
                            <Link to="/ventas" className="btn btn-warning">
                                Ir a Ventas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
