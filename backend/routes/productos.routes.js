const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// GET - Obtener todos
router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET - Obtener uno por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(results[0]);
  });
});

// POST - Crear nuevo
router.post('/', (req, res) => {
  const { nombre, precio, stock } = req.body;
  db.query('INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)',
    [nombre, precio, stock], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, precio, stock });
    });
});

// PUT - Actualizar
router.put('/:id', (req, res) => {
  const { nombre, precio, stock } = req.body;
  db.query('UPDATE productos SET nombre=?, precio=?, stock=? WHERE id=?',
    [nombre, precio, stock, req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Actualizado correctamente' });
    });
});

// DELETE - Eliminar
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM productos WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Eliminado correctamente' });
  });
});

module.exports = router;