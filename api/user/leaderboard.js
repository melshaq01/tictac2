'use strict';

//returns static data for now
//TODO: integrate with dynamodb
function getLeaderBoards() {
  leaderboards: [
      {
          name: 'rommel',
          wins: 100
      },
      {
          name: 'grayson',
          wins: 99
      },
      {
          name: 'melissa',
          wins: 98
      },
      {
          name: 'mykael',
          wins: 0
      },
      {
          name: 'grace',
          wins: 1
      }
  ]
  return leaderboards;
}