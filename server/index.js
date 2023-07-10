const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sypbrfe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const toyCollection = client.db('pyratesToy').collection('toys');

    app.get('/toys', async(req, res) => {
        const limit = parseInt(req.query.limit) || 20;
        const result = await toyCollection.find().limit(limit).toArray();
        res.send(result);
    })

    app.get('/category/:text', async (req, res) => {
      console.log(req.params.text);
      if (req.params.text == "die-cast" || req.params.text == "remote-control" || req.params.text == "building"){
        const result = await toyCollection.find({category: req.params.text}).toArray();
        console.log(result);
        return res.send(result);
      } 
      const result = await toyCollection.find({}).toArray();
      res.send(result);
    });

    app.get('/toys/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id)}
        const result = await toyCollection.findOne(query);
        res.send(result)
    })

    app.get('/addtoys', async(req, res) => {
      console.log(req.query.userEmail);
      let query = {};
      if(req.query?.userEmail){
        query = {userEmail: req.query.userEmail}
      }
      const result = await toyCollection.find(query).toArray()
      res.send(result)
    })

    app.post('/addtoys', async(req, res) => {
      const addToys = req.body;
      console.log(addToys);
      const result = await toyCollection.insertOne(addToys);
      res.send(result);
    })

    app.get('/addtoys/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await toyCollection.findOne(query)
      res.send(result)
    })

    app.put('/addtoys/:id', async(req, res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const options = { upsert: true};
      const updatedToy = req.body;
      const toy = {
        $set: {
          toyName: updatedToy.toyName,
          sellerName: updatedToy.sellerName,
          sellerEmail: updatedToy.sellerEmail,
          price: updatedToy.price,
          picture: updatedToy.picture,
          rating: updatedToy.rating,
          quantity: updatedToy.quantity,
          description: updatedToy.description,
          category: updatedToy.category,
        }
      }

      const result = await toyCollection.updateOne(filter, toy, options)
      res.send(result)
    })

    app.delete('/addtoys/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await toyCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


// server run check
app.get('/', (req, res) => {
    res.send('pyrates toy is running')
})

app.listen(port, () => {
    console.log(`Pyrates toy is running on port ${port}`);
})