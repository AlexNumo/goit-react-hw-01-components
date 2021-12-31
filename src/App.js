import "./App.css";
import UserCard from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import Statistics from "./components/Statistics/Statistics";

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
      <Statistics data={data} />
    </div>
  );
}
export default App;

// console.log({data.map((dataElem))};
