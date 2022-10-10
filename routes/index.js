const sql = require("../SQL/DBOprations");
const express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Database Connection */
router.get("/get_all_users", async (req, res) => {
  sql
    .getdata()
    .then((data) => {
      res.send(data);
    })
    .catch((rej) => {
      console.log(`Error Code:${rej} Not empty data.`);
    });
});

/* GET FILTER USERS */
router.get("/get_all_users/:id", async (req, res) => {
  let ID = req.params.id;
  sql
    .getFilterData(ID)
    .then((data) => {
      res.send(data);
    })
    .catch((rej) => {
      console.log(`Error Code:${rej} Not empty data.`);
    });
});

/* POST DATA */
router.post("/get_all_users", (req, res) => {
  let BodyData = { ...req.body };
  sql
    .addData(BodyData)
    .then((response) => res.send("Yeah! User added successfully"))
    .catch((err) => console.log(`Error Code:${err} Not send data`));
});

/* UPDATE DATA */
router.put("/get_all_users/:id", (req, res) => {
  let BodyData = { ...req.body };
  let PharamsID = req.params.id;
  sql
    .updateUser(BodyData, PharamsID)
    .then((response) => res.send("Yeah! User updated successfully"))
    .catch((err) => console.log(`Error Code:${err} Not Update data`));
});

/* DELETE DATA */
router.delete("/get_all_users/:id", (req, res) => {
  let BodyData = req.params.id;
  sql
    .daleteUser(BodyData)
    .then((response) => res.send("Yeah! User delete successfully"))
    .catch((err) => console.log(`Error Code:${err} Not delete data`));
});

module.exports = router;
