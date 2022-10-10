const dbconfig = {
  HOST: "localhost",
  server: "MHN-019",
  user: "sa",
  password: "deenv",
  database: "TestAPI",
  port: 1433,
  dialect: "mssql",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "MHN-019",
    encrypt: false,
  },
};

module.exports = dbconfig;
