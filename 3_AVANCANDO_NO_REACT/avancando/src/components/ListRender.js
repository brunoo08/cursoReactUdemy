import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus","Bruno","Maria"]);

    const [users] = useState([
        {id: 1, name: "Bruno", age: 26},
        {id: 2, name: "João", age: 12},
        {id: 3, name: "Maria", age: 13},
    ])

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
        </div>
    );
};

export default ListRender
