import { useState, useEffect } from 'react';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });

    // Simulación de datos iniciales
    useEffect(() => {
        setProductos([
            { id: 1, nombre: 'Producto 1', descripcion: 'Descripción 1', precio: 100, stock: 50 },
            { id: 2, nombre: 'Producto 2', descripcion: 'Descripción 2', precio: 200, stock: 30 },
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
        // Aquí se implementará la lógica para guardar el producto
        console.log('Nuevo producto:', formData);
        setShowModal(false);
        setFormData({ nombre: '', descripcion: '', precio: '', stock: '' });
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Gestión de Productos</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}
                >
                    Nuevo Producto
                </button>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.stock}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning me-2">Editar</button>
                                        <button className="btn btn-sm btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal para nuevo producto */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Nuevo Producto</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Descripción</label>
                                        <textarea
                                            className="form-control"
                                            name="descripcion"
                                            value={formData.descripcion}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Precio</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="precio"
                                            value={formData.precio}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Stock</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="stock"
                                            value={formData.stock}
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
                                        <button type="submit" className="btn btn-primary">
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

export default Productos;
