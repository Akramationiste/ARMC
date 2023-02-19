const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://chanelhm50:iPqIxFQtJrkHRqkW@cluster0.q8id5cn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  if (err) {
    console.log('Impossible de se connecter à la base de données', err);
  } else {
    console.log('Connecté à la base de données');
    const collection = client.db("test").collection("devices");
    // Effectuez des opérations sur la collection ici
  }
});