import "./App.styled.jsx";
import UserCard from "./components/Profile/Profile";
import user from "./data/user.json";
import StatisticsRender from "./components/Statistics/StatisticsRender";
import data from "./data/data.json";
import RenderFriendList from "./components/FriendList/FriendListRender";
import friendsInfo from "./data/friends.json";
import TransactionHistoryRender from "./components/TransactionHistory/TransactionHistoryRender";
import transactions from "./data/transactions.json";
import { StyleHW } from "./App.styled";

function App() {
  return (
    <StyleHW>
      <UserCard
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsRender stats={data} title={data.title} />
      <RenderFriendList friendsInfo={friendsInfo} />
      <TransactionHistoryRender items={transactions} />
    </StyleHW>
  );
}
export default App;
