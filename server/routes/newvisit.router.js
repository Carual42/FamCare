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
 router.post('/', (req, res) => {
  if (req.isAuthenticated()){
    const queryText = `INSERT INTO "visit" (date, user_visit_id)
    VALUES ($1, $2);`;
  pool.query(queryText, [req.body.date, req.user.id])
     .then(() => {
      const queryText2 = `INSERT INTO "medication" (name, notes, user_id, visit_id, phone, date)
     VALUES ($1, $2, $3, $4, $5, $6);`;
   pool.query(queryText2, [ req.body.med[0].name, req.body.med[0].note, req.user.id, req.body.visit, req.body.med[0].phone, req.body.date])
   .then(() => {
    res.sendStatus(201);
    })
    }).catch((err) => {
       console.log('err in visit POST', err);
       res.sendStatus(500);
     });
  }
 });

module.exports = router;
