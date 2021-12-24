import props from "../user.json";

// const Profile = [0];
// let Profile1 = [1, 2, 3]
//   username={props.username};
//   tag={props.tag}
//   location={props.location}
//   avatar={props.avatar}
//   stats={props.stats}]

function UserCard() {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="User avatar" className="avatar" />
        <p className="name">{props.username}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default UserCard;
