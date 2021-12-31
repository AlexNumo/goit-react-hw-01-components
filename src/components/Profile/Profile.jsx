// import props from "./user.json";
import { UserCards, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity } from './Profile.styled';
import { MdAlternateEmail } from 'react-icons/md';
// import PropTypes from "prop-types";

function UserCard({username, tag, location, avatar, stats}) {
  return (
    <UserCards>
      <Description>
        <Avatar src={ avatar }>
        </Avatar>
        <Name>{ username }</Name>
        <Tag><MdAlternateEmail />{ tag }</Tag>
        <Location>{ location }</Location>
      </Description>
      <Stats>
        <Label>Folowers</Label>
        <Quantity>{ stats.followers }</Quantity>
        <Label>Views</Label>
        <Quantity>{ stats.views }</Quantity>
        <Label>Likes</Label>
        <Quantity>{ stats.likes }</Quantity>
      </Stats>
    </UserCards>
  );
}
export default UserCard;

/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */