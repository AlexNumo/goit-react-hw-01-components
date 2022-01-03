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