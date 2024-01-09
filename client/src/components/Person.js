import React from "react";
import "../styles/People.css";
import { useNavigate } from "react-router-dom";

const Person = ({ person }) => {
  const history = useNavigate();

  const handleClick = () => {
    history(`/chat/${person._id}`);
  };
  return (
    <li className="person" key={person._id} onClick={handleClick}>
      {person.name}
      <button className="add-button">Add</button>
    </li>
  );
};

export default Person;
