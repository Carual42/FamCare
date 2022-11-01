const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/:id', (req, res) => {
  // GET route code here
  console.log('/visit GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = ` 
        SELECT * FROM "medication"
        JOIN "procedure" ON "medication"."visit_id" =
        "procedure"."visit_id" 
        join "scan" on "procedure"."visit_id" = 
        "scan"."visit_id"
        WHERE "medication"."visit_id" = $1;`;
        pool.query(queryText, [req.params.id]).then((result) => {
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

module.exports = router;
