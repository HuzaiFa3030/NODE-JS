const queries = {
  getAllData: "SELECT * FROM user_info",
  addRow:
    "INSERT INTO user_info ( first_name, last_name, email, gender, password) VALUES ( @first_name, @last_name, @email, @gender, @password)",
  deleteRow: "DELETE FROM user_info WHERE id = @id",
  userFind: "SELECT * FROM user_info WHERE ID = @id",
  updateUser:
    "UPDATE user_info SET first_name=@first_name, last_name=@last_name, email=@email, gender=@gender, password=@password WHERE id= @id",
  checkUserLength: "SELECT max(id) FROM user_info",
};

module.exports = queries;
