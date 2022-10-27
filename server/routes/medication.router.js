const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('/medication GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "medication" WHERE "user_id" = $1 ORDER BY "date" DESC`;
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


// DELETE route
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  const deleteData = `DELETE from "medication"
                      WHERE "id" = $1;`;
  pool.query(deleteData, [req.params.id])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('error in med DELETE', error);
    res.sendStatus(500);
  })
})

module.exports = router;
