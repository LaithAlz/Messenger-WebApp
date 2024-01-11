import axios from "axios";
import "../styles/People.css";
import Person from "./Person";
import { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";

const People = () => {
  const [data, setData] = useState([]);
  const { user } = ChatState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const response = await axios.get(`/api/user?search=`, config);
        setData(response.data);
        console.log("REsponse");
        console.log(response);
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="people-container">
      <h1 className="people">People</h1>

      <ul className="people-list">
        {data.map((person) => (
          <Person key={person._id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default People;
