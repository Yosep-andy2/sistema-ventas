const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  db.query('SELECT id, nombre, email FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT id, nombre, email FROM usuarios WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const { nombre, email, password } = req.body;
  db.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, password], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, nombre, email });
    });
});

router.put('/:id', (req, res) => {
  const { nombre, email, password } = req.body;
  db.query('UPDATE usuarios SET nombre=?, email=?, password=? WHERE id=?',
    [nombre, email, password, req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ mensaje: 'Actualizado correctamente' });
    });
});

router.delete('/:id', (req, res) => {
  db.query('DELETE FROM usuarios WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Eliminado correctamente' });
  });
});

module.exports = router;