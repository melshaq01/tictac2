var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-2"
});
var docClient = new AWS.DynamoDB.DocumentClient();

function insert(user) {
    console.log("Adding a new item...");
    docClient.put(user, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err));
        } else {
            console.log("Added item:", JSON.stringify(data);
        }
    });
}

function read() {

}
