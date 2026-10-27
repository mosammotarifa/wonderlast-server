const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
      res.send(result);
    });
    app.get(`/users/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });
    //     app.get("/users/:id", async (req, res) => {
    //   try {
    //     const id = req.params.id;

    //     if (!ObjectId.isValid(id)) {
    //       return res.status(400).send({
    //         message: "Invalid user ID",
    //       });
    //     }

    //     const query = { _id: new ObjectId(id) };

    //     const result = await usersCollection.findOne(query);

    //     if (!result) {
    //       return res.status(404).send({
    //         message: "User not found",
    //       });
    //     }

    //     res.send(result);
    //   } catch (error) {
    //     res.status(500).send({
    //       message: "Failed to fetch user",
    //     });
    //   }
    // });
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });
    app.patch(`/users/:id`,async(req,res)=>{
      const id =req.params.id
      const filter={_id : new ObjectId(id)}
      const modified=params.body
      const result = {
        $set:{
          category:modified.category,
          country:modified.country,
          departureDate:modified.departureDate,
          description:modified.description,
          destinationName:modified.destinationName,
          duration:modified.duration,
          image:modified.image,
          price:modified.price,
          
        }
      }

    })
    app.delete(`/users/:id`, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });
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
