console.log("I am mongoose.js")

const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    model_path = path.join(__dirname, "../models");

module.exports = function(DB_NAME){
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    let models = fs.readdirSync(model_path);
    for(let model of models){
        if (model.endsWith(".js")){
            require(path.join(model_path, model)); // 
        }
    }
}

