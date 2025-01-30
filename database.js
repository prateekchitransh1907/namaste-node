const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://prateekchitransh:kgz6L5BBpP39MVQz@namastedev.9a4rq.mongodb.net/";

const client = new MongoClient(url);

const dbName = "testDB";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // the following code examples can be pasted here...

  //insert data into DB
  const data = {
    firstName: "Smita",
    lastName: "Pradhan",
    age: 32,
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);
  // const deleteResult = await collection.deleteMany({ firstName: "Smita" });
  // console.log("Deleted documents =>", deleteResult);
  const updateResult = await collection.updateOne(
    { firstName: "Prateek" },
    { $set: { age: 34 } }
  );
  console.log("Updated documents =>", updateResult);
  //read the data from DB
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
