const express = require("express");

const pokedex = require("./pokedex");

console.log("taco", pokedex);

const app = express();

// Body parser middleware
app.use(express.json());


// Update/replace a pokemon
app.put("/pokemon", (req, res) => {
  console.log("test", req.body);

  // const { name, hp, attack, defense } = req.body; // With "destructuring"

  // Without "destructuring"
  const name = req.body.name;
  const hp = req.body.hp;
  const attack = req.body.attack;
  const defense = req.body.defense;


  // The *put* should check first that the specified pokemon is already in our data
  // if not, it should return status 404
  if (!pokedex.get(name)) {
    res.status(404).end();
    return; // (CALLED A BOUNCER) without return it will add jigglypuff because of the following lines with the return it bounces / control-flow
  }

  console.log("Updating pokemon . . .", name);
  pokedex.set(name, {
    hp: hp,
    attack: attack,
    defense: defense,
  });

  res.end(); // .send ("you are approved") // .json({ name: "taco", age: 22 })
});

// Read (list all pokemon)
app.get("/pokemon-as-object", (req, res) => {
  //   const data = {} // Start with empty object

  //   for (let p of pokedex) {

  //     data[p[0]] = p[1];
  //   }

  //   res.json(data);

  // This is the same as the logic above (but much simpler)
  res.json(Object.fromEntries(pokedex));
});

app.get("/pokemon-as-array-of-tuples", (req, res) => {
  // const data = []; // Start with empty array

  // for (let p of pokedex) {

  //   data.push({[p[0]]: p[1]});
  // }

  // res.json(data);

  // This is the same as the logic above (but much simpler)
  res.json(Array.from(pokedex));
});

app.get("/pokemon-as-array-of-objects", (req, res) => {

    const data = []; 
     
    for (let p of pokedex) {
      data.push({
        name: p[0],
        ...p[1]
    });
    }

    res.json(data);
  });

app.listen(3456, () => {
  console.log("Server started successfully on port 3456");
});
