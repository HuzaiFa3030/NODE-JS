const sql = require("mssql");
const dbconfig = require("./DBConfig");
const queries = require("./Queries");

const getdata = async () => {
  try {
    let pool = await sql.connect(dbconfig);
    let request = await pool.request().query(queries.getAllData);
    return request.recordset;
  } catch (error) {
    console.log("DB_Connection Error==>", error);
  }
};

const getFilterData = async (ID) => {
  try {
    let pool = await sql.connect(dbconfig);
    let request = await pool.request().input("id", ID).query(queries.userFind);
    return request.recordset;
  } catch (error) {
    console.log("DB_Connection Error==>", error);
  }
};

const addData = async (data) => {
  try {
    const pool = await sql.connect(dbconfig);
    const sendData = await pool
      .request()
      .input("first_name", sql.NVarChar, data.first_name)
      .input("last_name", sql.NVarChar, data.last_name)
      .input("email", sql.NVarChar, data.email)
      .input("gender", sql.NVarChar, data.gender)
      .input("password", sql.NVarChar, data.password)
      .query(queries.addRow);
    return sendData.recordset;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updateUser = async (data, ID) => {
  try {
    const pool = await sql.connect(dbconfig);
    const updateUser = await pool
      .request()
      .input("id", sql.Int, ID)
      .input("first_name", sql.NVarChar, data.first_name)
      .input("last_name", sql.NVarChar, data.last_name)
      .input("email", sql.NVarChar, data.email)
      .input("gender", sql.NVarChar, data.gender)
      .input("password", sql.NVarChar, data.password)
      .query(queries.updateUser);
    return updateUser.recordset;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const daleteUser = async (id) => {
  try {
    const pool = await sql.connect(dbconfig);
    const deleteUser = await pool
      .request()
      .input("id", id)
      .query(queries.deleteRow);
    return deleteUser.recordset;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  getdata,
  addData,
  updateUser,
  daleteUser,
  getFilterData,
};
