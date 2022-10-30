const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    let queryText = `SELECT * FROM "procedure" WHERE "user_id" = $1 ORDER BY "date" DESC`;
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

  const query = `SELECT * FROM "procedure" WHERE "id"=$1`;
  pool.query(query, [req.params.id])
    .then(result => {
      // Return the first item in the array (which is an Object)
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

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

 //PUT route
 router.put('/:id', (req, res) => {
  console.log(req.body, req.params);
  const queryText = `UPDATE "procedure" 
                    SET "name" = $1, 
                    "phone" = $2, 
                    "date" = $3, 
                    "notes" = $4
                     WHERE "id" = $5;`;
  pool.query(queryText, [req.body.name, req.body.phone, req.body.date, req.body.notes, req.params.id])
      .then(results => {
        res.sendStatus(200);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
})

// DELETE route
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  const deleteData = `DELETE from "procedure"
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
