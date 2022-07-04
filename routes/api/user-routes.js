const router = require('express').Router();
const { User } = require('../../models');

// GET /API/USERS
router.get('/', (req, res) => { });

// GET /API/USERS/1
router.get('/:id', (req, res) => { });

// POST /API/USERS
router.post('/', (req, res) => { });

// PUT /API/USERS/1
router.put('/:id', (req, res) => { });

// DELETE /API/USERS/1
router.delete('/:id', (req, res) => { });

module.exports = router;