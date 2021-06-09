import React, { useState, useEffect } from 'react';
import { fetchUsers, postUsers } from './usersListSlice'
import { useDispatch } from 'react-redux';
import "../usersList/usersList.css"

export function UsersList() {
    const [users, setUsers] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers()).then(
            (e) => {
                setUsers(e.payload)
            }
        )
    }, [dispatch])

    // const handleInput = (e,i) => {
    //     alert(e.target.value);
    //     var value = e.target.value;
    //     alert(i.target.value);
    //     let usersClone = [...users];
    //     console.log(usersClone);
    //     usersClone.filter((e,i)=>e.id !== value);
    //     console.log(usersClone);
    // }

    const handleUpdate = (e, d) => {
        console.log(e, 'e');
        var value = d.target.value;
        let usersClone = [...users];
        var currentData = usersClone.filter(d => d.id === e.id);
        var currentIndex = usersClone.findIndex(x => x.id === e.id);
        console.log(currentData, currentIndex);
        usersClone[currentIndex].name = value;
        console.log(usersClone);
         setUsers(usersClone);

    };

    const handleDelete = (e, d) => {
        console.log(e, 'e');
        let usersClone = [...users];
        var currentData = usersClone.filter(d => d.id !== e.id);
        setUsers(currentData);
    };

    const saveData = () => {
        let data = [...users]
        dispatch(postUsers(data))
    }

    const funUsersList = () => {
        if (users?.length > 0 && users !== "undefined") {
            return (
                <>
                    <div className="input-api-values-body">
                        {users.map((e, i) => <input className="custom-input" type="text" key={i} value={e.name} onChange={(d) => handleUpdate(e, d)} />)}
                        <button type="button" onClick={saveData}>
                            Save New User
                        </button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {funUsersList()}
        </>
    )
}