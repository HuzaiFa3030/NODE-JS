const dbconfig = {
  HOST: "",       // Enter your host name
  server: "",     // Enter your server name
  user: "",       //Enter your username
  password: "",   //Enter your password
  database: "",   //Enter your database name
  port: 1433,     //defult port 1433
  dialect: "mssql",   //defult
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "",
    encrypt: false,
  },
};

module.exports = dbconfig;
