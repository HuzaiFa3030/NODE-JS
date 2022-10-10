const dbconfig = {
  HOST: "",
  server: "",
  user: "",
  password: "",
  database: "",
  port: 1433,
  dialect: "mssql",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "",
    encrypt: false,
  },
};

module.exports = dbconfig;
