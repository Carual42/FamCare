const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  // GET route code here
  console.log('/visit GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = ` SELECT * FROM "visit" WHERE "user_visit_id" = $1 ORDER BY "visit" DESC;`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403); // 403 Forbidden (must log in)
        // 401 Unauthorized (e.g. requires Admin but logged in as User)
    }
});

/**
 * POST route template
 */
 router.post('/', async (req, res) => {
  try {
  if (req.isAuthenticated()){
    console.log('this is req.body', req.body)
    const queryText = `INSERT INTO "visit" (date, user_visit_id)
                       VALUES ($1, $2);`;
    await pool.query(queryText, [req.body.date, req.user.id]);
    const queryText2 = `INSERT INTO "medication" (name, notes, user_id, visit_id, phone, date)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    for (let i = 0; i < req.body.med.length; i++ ) {
    await pool.query(queryText2, [ req.body.med[i].name, req.body.med[i].note, req.user.id, req.body.visit, req.body.med[i].phone, req.body.date])
    };
    const queryText3 = `INSERT INTO "procedure" (name, notes, user_id, visit_id, phone, date)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    for (let i = 0; i < req.body.procedure.length; i++ ) {
    await pool.query(queryText3, [ req.body.procedure[i].name, req.body.procedure[i].note, req.user.id, req.body.visit, req.body.procedure[i].phone, req.body.date])
    };
    const queryText4 = `INSERT INTO "scan" (name, notes, user_id, visit_id, phone, date)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    for (let i = 0; i < req.body.exam.length; i++ ) {
    await pool.query(queryText4, [ req.body.exam[i].name, req.body.exam[i].note, req.user.id, req.body.visit, req.body.exam[i].phone, req.body.date])
    };
    res.sendStatus(201);}
  } catch (err) {
    console.log('error in POST newVisit', err);
    res.sendStatus(500);
  }
 });

module.exports = router;
