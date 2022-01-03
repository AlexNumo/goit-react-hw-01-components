import "./App.css";
import UserCard from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import StatisticsRender from "./components/Statistics/StatisticsRender";
import data from "./components/Statistics/data.json";
import RenderFriendList from "./components/FriendList/FriendListRender";
import friendsInfo from "./components/FriendList/friends.json";
import TransactionHistoryRender from "./components/TransactionHistory/TransactionHistoryRender";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <UserCard
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsRender data={data} />
      <RenderFriendList friendsInfo={friendsInfo} />
      <TransactionHistoryRender items={transactions} />
    </div>
  );
}
export default App;
