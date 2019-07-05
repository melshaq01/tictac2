'use strict';

//returns static data for now
//TODO: integrate with dynamodb
function getLeaderBoards() {
  const leaderboards= [
      {
          name: 'rommel',
          wins: 100,
          loss: 0
      },
      {
          name: 'grayson',
          wins: 99,
          loss: 0
      },
      {
          name: 'melissa',
          wins: 98,
          loss: 0
      },
      {
          name: 'mykael',
          wins: 0,
          loss: 0
      },
      {
          name: 'grace',
          wins: 1,
          loss: 0
      }
  ]
  return leaderboards;
}