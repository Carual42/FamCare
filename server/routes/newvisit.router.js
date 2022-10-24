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
        let queryText = ` SELECT * FROM "medication"
        JOIN "visit" ON "medication"."visit_id" =
        "visit"."id" WHERE "user_id" = $1;`;
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
    const queryText = `INSERT INTO "medication" (name, notes, user_id, phone)
      VALUES ($1, $2, $3, $4);`;
    pool
      .query(queryText, [ req.body.med[0].name, req.body.med[0].note, req.user.id, req.body.med[0].phone])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('err in visit POST', err);
        res.sendStatus(500);
      });
   }
  });

module.exports = router;