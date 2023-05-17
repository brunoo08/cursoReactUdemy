import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus","Bruno","Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Bruno", age: 26},
        {id: 2, name: "João", age: 12},
        {id: 3, name: "Maria", age: 13},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>DELETE RANDOM USER</button>
        </div>
    );
};

export default ListRender
