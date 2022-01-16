import FriendsList from "./FriendList";
import PropTypes from "prop-types";
import { FriendList } from "./FriendList.styled";

function RenderFriendList({ friendsInfo }) {
    return (
        <FriendList>
            {friendsInfo.map(function (elem) { 
                return(
                <FriendsList
                    key={elem.id}
                    avatar={elem.avatar}
                    name={elem.name}
                    isOnline={elem.isOnline}
                />)
            })
            }
      </FriendList>
    )
}
 
export default RenderFriendList;

RenderFriendList.propTypes = {
  RenderFriendList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    })
  ),
};