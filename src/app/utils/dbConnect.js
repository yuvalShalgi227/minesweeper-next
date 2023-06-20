const mongoose = require("mongoose");

const connection = {}; /* creating connection object*/

module.exports = dbConnect = async () => {
  /* check if we have connection to our databse */
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};
