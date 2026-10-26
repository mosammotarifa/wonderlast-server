const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const uri = process.env.MongoDB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const run = async () => {
  try {
    await client.connect();
    const db = client.db("wonderlast");
    const usersCollection = db.collection("users");
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    });
    app.post('/users',async(req,res)=>{
      const newUser = req.body
      const result = await usersCollection .insertOne(newUser)
      res.send(result)
    })
    await client.db("admin").command({ ping: 1 });
    console.log("deployment pinged");
  } finally {
    // await client .close()
  }
};
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("server is serving");
});
app.listen(port, () => {
  console.log(`port${port} serveing `);
});
