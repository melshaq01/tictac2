const leaderboards = require('leaderboards');
exports.handler = async (event, context) => {
    // TODO implement
    if(event && event.pathParameters && event.pathParameters.user) {
        console.log(user);
    }

    const responseBody = getLeaderBoards();

    const response = {
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseBody)
    };
    return response;
};