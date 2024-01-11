export const getSender = (loggedUser, users) => {
    console.log("this is loggedUser and users");
    console.log(loggedUser);
    console.log(users);
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};

export const getSenderId = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[0] : users[1];
  };

  export const isSameSender = (messages, m, i, userId) => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id === undefined) &&
      messages[i].sender._id !== userId
    );
  };
  
  export const isLastMessage = (messages, i, userId) => {
    return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      messages[messages.length - 1].sender._id
    );
  };
  
  export const isSameUser = (messages, m, i) => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };
  