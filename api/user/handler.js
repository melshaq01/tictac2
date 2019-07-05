const leaderboards = require('./leaderboard');
module.exports.invoke = async (event, context) => {
   const responseBody = leaderboards.getLeaderBoards();

   const response = {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseBody)
    };
    return response;
};