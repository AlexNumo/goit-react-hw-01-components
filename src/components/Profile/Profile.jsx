import { UserCards, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity, Info } from './Profile.styled';
import { MdAlternateEmail } from 'react-icons/md';
import PropTypes from "prop-types";

function UserCard({userName, tag, location, avatar, stats}) {
  return (
    <UserCards>
      <Description>
        <Avatar src={ avatar }>
        </Avatar>
        <Name>{ userName }</Name>
        <Tag><MdAlternateEmail />{ tag }</Tag>
        <Location>{ location }</Location>
      </Description>
      <Stats>
        <Info>
          <Label>Folowers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Info>
        <Info>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Info>
        <Info>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Info>
      </Stats>
    </UserCards>
  );
}
export default UserCard;

UserCard.propTypes = {
  friendsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.string.isRequired,
    })
  ),
};