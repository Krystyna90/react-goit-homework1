import React from 'react';
import Profile from "./Profile/Profile";
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import Friends from './Friends/Friends';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from './Transaction/transactions.json';


console.log(data);
export default function App() {
  return (
  <div>
      <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="UPLOAD STATS" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items = {transactions}/>
  </div>
  );
}

//  {user.map(element => (
//       <Profile
//       key = {element.tag}
//       username={element.username}
//       tag={element.tag}
//       location={element.location}
//       avatar={element.avatar}
//       stats={element.stats} />))}
