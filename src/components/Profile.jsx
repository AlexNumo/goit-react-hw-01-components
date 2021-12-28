import props from "../user.json";
import { UserCards, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity } from './Profile.styled';
import { MdAlternateEmail } from 'react-icons/Md'

function UserCard() {
  return (
    <UserCards>
      <Description>
        <Avatar src={props.avatar}>
        </Avatar>
        <Name>{ props.username }</Name>
        <Tag><MdAlternateEmail />{ props.tag }</Tag>
        <Location>{ props.location }</Location>
      </Description>
      <Stats>
        <Label>Folowers</Label>
        <Quantity>{props.stats.followers}</Quantity>
        <Label>Views</Label>
        <Quantity>{props.stats.views }</Quantity>
        <Label>Likes</Label>
        <Quantity>{ props.stats.likes }</Quantity>
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