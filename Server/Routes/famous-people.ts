import express from 'express';
const router = express.Router();
import passport from 'passport';

import { getAllFamousPeople, getFamousPersonById, createFamousPerson, updateFamousPerson, deleteFamousPerson } from '../Controllers/famous-people';

/* List of Famous People Routes (endpoints) */

/* GET Famous People List - fallback in case /list is not used */
router.get('/', (req, res, next) => { getAllFamousPeople(req, res, next); });

/* GET Famous People List. */
router.get('/list', (req, res, next) => { getAllFamousPeople(req, res, next); });

/* GET Famous Person by ID. */
router.get('/find/:id', (req, res, next) => { getFamousPersonById(req, res, next); });

/* Add Famous Person */
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => { createFamousPerson(req, res, next); });

/* Update Famous Person */
router.put('/update/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => { updateFamousPerson(req, res, next); });

/* Delete Famous Person */
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => { deleteFamousPerson(req, res, next); });

export default router;
