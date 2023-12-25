import "../styles/People.css"

const People = () => {
    const people = [{id: 1, name: "MO"}, {id:2, name: "NO"}]

    return (
        <div className="people-container">
            <ul className="people-list">
                {people.map((person) => (
                    <li key={person.id} className="person">
                        {person.name}
                        <button  className="add-button">
                            Add
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default People;