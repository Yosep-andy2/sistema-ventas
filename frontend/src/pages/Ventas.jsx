import { useState, useEffect } from 'react';

function Ventas() {
    const [ventas, setVentas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        cliente_id: '',
        producto_id: '',
        cantidad: '',
        total: ''
    });

    // Simulación de datos iniciales
    useEffect(() => {
        setVentas([
            {
                id: 1,
                cliente: 'Juan Pérez',
                producto: 'Producto 1',
                cantidad: 2,
                total: 200,
                fecha: '2024-12-01'
            },
            {
                id: 2,
                cliente: 'María García',
                producto: 'Producto 2',
                cantidad: 1,
                total: 200,
                fecha: '2024-12-02'
            },
        ]);
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se implementará la lógica para guardar la venta
        console.log('Nueva venta:', formData);
        setShowModal(false);
        setFormData({ cliente_id: '', producto_id: '', cantidad: '', total: '' });
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Gestión de Ventas</h1>
                <button
                    className="btn btn-warning"
                    onClick={() => setShowModal(true)}
                >
                    Nueva Venta
                </button>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventas.map((venta) => (
                                <tr key={venta.id}>
                                    <td>{venta.id}</td>
                                    <td>{venta.cliente}</td>
                                    <td>{venta.producto}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>${venta.total}</td>
                                    <td>{venta.fecha}</td>
                                    <td>
                                        <button className="btn btn-sm btn-info me-2">Ver</button>
                                        <button className="btn btn-sm btn-danger">Anular</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal para nueva venta */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Nueva Venta</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Cliente</label>
                                        <select
                                            className="form-select"
                                            name="cliente_id"
                                            value={formData.cliente_id}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Seleccione un cliente</option>
                                            <option value="1">Juan Pérez</option>
                                            <option value="2">María García</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Producto</label>
                                        <select
                                            className="form-select"
                                            name="producto_id"
                                            value={formData.producto_id}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Seleccione un producto</option>
                                            <option value="1">Producto 1 - $100</option>
                                            <option value="2">Producto 2 - $200</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Cantidad</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="cantidad"
                                            value={formData.cantidad}
                                            onChange={handleInputChange}
                                            required
                                            min="1"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Total</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="total"
                                            value={formData.total}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancelar
                                        </button>
                                        <button type="submit" className="btn btn-warning">
                                            Guardar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Ventas;
