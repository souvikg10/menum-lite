// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://neo4j:menum-lite@localhost:7474');

router.use(bodyParser.urlencoded({ extended: true }));
// ADD THIS PART
// CREATES A NEW INGREDIENT CATEGORY
router.post('/', function (req, res) {

});
// RETURNS ALL THE INGREDIENT CATEGORY FROM THE DATABASE
router.get('/', function (req, res) {
    var response = new Array();
    db.cypher({
        query: 'MATCH (n:Ingredient_category) RETURN n'
    }, function (err, results) {
        if (err) throw err;
        if (!results) {
            response.push({ "error": "No ingredient catetgories found" })
        } else {
            for (result in results) {
                response.push(results[result]['n'].properties)
            }
            res.json(response)
        }
    })
});
module.exports = router;