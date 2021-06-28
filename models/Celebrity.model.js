//  Add your code here
//  Add your code here
const { Schema, model } = require("mongoose");
const celebritySchema = new Schema({
      name: String, 
      occupation: String, 
      catchPhrase: String
});
const CelebrityModel = model("celebrity", celebritySchema);

module.exports = CelebrityModel;
