import { useLocation } from "react-router-dom";
import "../styles/People.css";
import Person from "./Person";
import { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";
import axios from "axios";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  const [data, setData] = useState([]);
  const { user } = ChatState();

  useEffect(() => {
    if (searchQuery) {
      const fetchData = async () => {
        try {
          const config = { headers: { Authorization: `Bearer ${user.token}` } };
          const response = await axios.get(`/api/user?search=${searchQuery}`, config);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching search data:", error);
        }
      };
      fetchData();
    }
  }, [searchQuery]);

  return (
    <div className="people-container">
      <h1 className="people">Search Result</h1>
      <ul className="people-list">
        {data.map((person) => (
          <Person key={person._id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default Search;
