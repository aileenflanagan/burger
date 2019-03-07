
//need to edit this function
//   * `updateOne()`

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {
        
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
  }


var connection = require("../config/connection.js");

let orm= {
    all: function(tableInput, cb){
        var queryString= "SELECT * FROM "+ tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }, 

    create: function(table, cols, vals, cb){
        queryString="INSERT INTO "+ table;
        queryString+=" (";
        queryString+=cols.toString();
        queryString+= " ) VALUES (?)";

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }, 

    //need to finish the update function
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}

module.exports= orm;