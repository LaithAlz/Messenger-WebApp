import "../styles/Friends.css"

const Friends = () => {


    const friends = [{name: "Laith"}, {name: "Ameer"}]

    return (

        <div className="friends-container">
            <ul className="friends-list">
                {friends.map((friend, index) => (
                    <li key={index} className="friend">
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    );
 
}
export default Friends;