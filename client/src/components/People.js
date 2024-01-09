import "../styles/People.css";
import Person from "./Person";

const People = () => {
  const people = [
    { _id: 1, name: "MO" },
    { _id: 2, name: "NO" },
  ];

  return (
    <div className="people-container">
      <h1 className="people">People</h1>

      <ul className="people-list">
        {people.map((person) => (
          <Person key={person._id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default People;
