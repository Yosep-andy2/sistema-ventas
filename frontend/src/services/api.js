// Archivo placeholder para servicios de API
// Aquí se implementarán las llamadas al backend

const API_URL = 'http://localhost:3000/api';

export const productosService = {
    getAll: async () => {
        // Implementar llamada GET a /api/productos
    },
    create: async (data) => {
        // Implementar llamada POST a /api/productos
    },
    update: async (id, data) => {
        // Implementar llamada PUT a /api/productos/:id
    },
    delete: async (id) => {
        // Implementar llamada DELETE a /api/productos/:id
    }
};

export const clientesService = {
    getAll: async () => {
        // Implementar llamada GET a /api/clientes
    },
    create: async (data) => {
        // Implementar llamada POST a /api/clientes
    },
    update: async (id, data) => {
        // Implementar llamada PUT a /api/clientes/:id
    },
    delete: async (id) => {
        // Implementar llamada DELETE a /api/clientes/:id
    }
};

export const ventasService = {
    getAll: async () => {
        // Implementar llamada GET a /api/ventas
    },
    create: async (data) => {
        // Implementar llamada POST a /api/ventas
    }
};

export const authService = {
    login: async (credentials) => {
        // Implementar llamada POST a /api/auth/login
    }
};
