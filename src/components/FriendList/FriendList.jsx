import PropTypes from "prop-types";
import { Item, Avatar, Name, StatusOnline, StatusOffline} from "./FriendList.styled";
function FriendsList({ avatar, name, isOnline }) { 
    return (
            <Item>
                <span className="status">{isOnline ? <StatusOnline/> : <StatusOffline/>}</span>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Item>
        );
}

export default FriendsList;

FriendsList.propTypes = {
  friendsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    })
  ),
};