const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  db.query('SELECT * FROM clientes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM clientes WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { nombre, documento_identidad, direccion, telefono } = req.body;
  db.query('INSERT INTO clientes (nombre, documento_identidad, direccion, telefono) VALUES (?, ?, ?, ?)',
    [nombre, documento_identidad, direccion, telefono], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, documento_identidad, direccion, telefono });
    });
});

router.put('/:id', (req, res) => {
  const { nombre, documento_identidad, direccion, telefono } = req.body;
  db.query('UPDATE clientes SET nombre=?, documento_identidad=?, direccion=?, telefono=? WHERE id=?',
    [nombre, documento_identidad, direccion, telefono, req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Actualizado correctamente' });
    });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM clientes WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Eliminado correctamente' });
  });
});

module.exports = router;