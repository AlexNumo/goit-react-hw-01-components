import FriendsList from "./FriendList";

function RenderFriendList({ friendsInfo }) {
    return (
        <ul class="friend-list">
            {friendsInfo.map(function (friendInfo) { 
                return(
                <FriendsList
                    key={friendInfo.id}
                    avatar={friendInfo.avatar}
                    name={friendInfo.name}
                    isOnline={friendInfo.isOnline}
                />)
            })
            
            }

        </ul>

    )

}
 
export default RenderFriendList;