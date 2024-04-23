const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@cluster0.zrua0aj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const espressoCollection = client
    .db('espressoCoffees')
    .collection('espressoCoffeesData');
  try {
    await client.connect();
    app.get('/', (req, res) => {
      res.send('Espresso Emporium Coffee Server');
    });
    app.get('/coffees', async (req, res) => {
      const cursor = espressoCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await espressoCollection.findOne(query);
      res.send(result);
    });
    app.post('/add-coffee', async (req, res) => {
      const coffeeInfo = req.body;
      console.log(coffeeInfo);
      const result = await espressoCollection.insertOne(coffeeInfo);
      res.send(result);
    });
    app.put('/update-coffee/:id', async (req, res) => {
      const id = req.params.id;
      const updatedInfo = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatedInfo.name,
          chef: updatedInfo.chef,
          supplier: updatedInfo.supplier,
          taste: updatedInfo.taste,
          category: updatedInfo.category,
          details: updatedInfo.details,
          photo: updatedInfo.photo,
        },
      };
      const result = await espressoCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await espressoCollection.deleteOne(query);
      res.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Espresso Emporium Coffee server is on ${port}`);
});
