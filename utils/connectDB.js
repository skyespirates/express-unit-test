const { connect } = require("mongoose");

const db_url = "mongodb://127.0.0.1:27017/my_applications";

const db = async () => {
  try {
    const connection = await connect(db_url);
    console.log("database connected to:", connection.connection.name);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = db;
