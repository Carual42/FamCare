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

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  const query = `SELECT * FROM "medication" WHERE "id"=$1 AND "user_id"=$2`;
  pool.query(query, [req.params.id, req.user.id])
    .then(result => {
      // Return the first item in the array (which is an Object)
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
  }
});

/**
 * PUT route template
 */
 router.put('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  console.log(req.body, req.params);
  const queryText = `UPDATE "medication" 
                    SET "med_name" = $1, 
                    "med_phone" = $2, 
                    "date" = $3, 
                    "med_notes" = $4
                     WHERE "id" = $5 AND
                     "user_id" = $6;`;
  pool.query(queryText, [req.body.name, req.body.phone, req.body.date, req.body.notes, req.params.id, req.user.id])
      .then(results => {
        res.sendStatus(200);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
    }
});


// DELETE route
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  console.log(req.params.id)
  const deleteData = `DELETE from "medication"
                      WHERE "id" = $1 AND
                      "user_id" = $2;`;
  pool.query(deleteData, [req.params.id, req.user.id])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('error in med DELETE', error);
    res.sendStatus(500);
  })
}
})

module.exports = router;
