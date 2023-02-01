const express = require("express");
const { Client } = require("pg");
const { check, validationResult } = require("express-validator");

const app = express();
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "username",
  password: "password",
  database: "postgres",
});

client
  .connect()
  .then(() => {
    const query = `
      CREATE TABLE students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name NOT NULL,
        last_name NOT NULL,
        email NOT NULL
      );
    `;
    return client.query(query);
  })
  .then(() => console.log("Connected to the database successfully!"))
  .catch((err) => console.error("Could not connect to the database:", err));

app.get("/students", (req, res) => {
  client
    .connect()
    .then(() => {
      const query = "SELECT * FROM students";
      return client.query(query);
    })
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.error("Could not retrieve students:", err))
    .finally(() => client.end());
});

app.post("/students", async (req, res) => {
  const text = "INSERT INTO students (first_name) VALUES ('Anna')";
  const values = [req.body.name];

  try {
    const result = await client.query(text, values);

    console.log("-->", result.rows[0]);

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err.stack);
  }
});

app.put("/students", async (req, res) => {
  const text = "UPDATE students SET first_name = 'Lou' WHERE id = 2";
  const updateValues = [req.params.id, req.body.name];

  try {
    const updateResult = await client.query(text, updateValues);

    console.log("updateResult", updateResult);

    res.status(200).json(updateResult.rows);
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

app.delete("/students", async (req, res) => {
  const id = req.params.id;

  const deleteText = "DELETE FROM students WHERE id = 2";
  const deleteValues = [req.params.id];

  try {
    const deleteResult = await client.query(deleteText, deleteValues);

    console.log("deleteResult", deleteResult);

    res.status(200).json(deleteResult.rows);
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

app.listen(3000, () => console.log("App listening on port 3000!"));
