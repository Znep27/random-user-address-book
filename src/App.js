import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from "./Card";


const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=25')
        .then(res => {
          const { data } = res;
          console.log(data)
          setUsers(data.results)
      })
    }, [])

   const changeName = (userToUpdate) => {
    setUsers(users.map((user) => {
        if (userToUpdate.email === user.email) {
            return {
                ...user,
                name: {
                    ...userToUpdate.name,
                    first: userToUpdate.name.first
                }
            }
        }
        return user;
    }))
   }

    return (
        <div className="App">
          {users.map((user, idx) => (
            <CustomCard
              key={idx}
              img={user.picture.large}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              changeName={changeName}
              user={user}
             />
          ))}
        </div>
      );
}

export default App;