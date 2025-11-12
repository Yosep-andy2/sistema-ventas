const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'andy', // Cambia según tu configuración
  database: 'db_ventas'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error de conexión a MySQL:', err.message);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;