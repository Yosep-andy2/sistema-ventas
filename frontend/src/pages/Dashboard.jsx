function Dashboard() {
    return (
        <div>
            <h1>Bienvenido al Sistema de Ventas</h1>
            <p>Selecciona una opción del menú para comenzar.</p>

            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Productos</h5>
                            <p className="card-text">Gestiona tu inventario</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Clientes</h5>
                            <p className="card-text">Administra tus clientes</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Ventas</h5>
                            <p className="card-text">Registra nuevas ventas</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-white bg-info mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Reportes</h5>
                            <p className="card-text">Visualiza estadísticas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
