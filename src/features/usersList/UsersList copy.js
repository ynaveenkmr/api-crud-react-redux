import React, { useState, useEffect } from 'react';
import { fetchUsers,userDeleted } from './usersListSlice'
import { useDispatch } from 'react-redux';
import "../usersList/usersList.css"

export function UsersList() {
    const [users, setUsers] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers()).then(
            (e)=>{
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

    const handleDelete = (e,d) => {
        console.log(e,'e');
        // let usersClone = [...users];
        var currentData = users.filter(d=>d.id === e.id);
        var currentIndex = users.findIndex(x => x.id === e.id);
        console.log(currentData, currentIndex);
        let usersClone = [...users];
        usersClone.splice(currentIndex, 1, { ...currentData[0],d});
        // console.log(usersClone)
        setUsers(usersClone);

      };

    const funUsersList = () => {
        if(users?.length >0 && users !== "undefined"){
        return (
            <>
                {users.map((e,i)=><input type="text" key={i} value={e.name} onChange={(d) => handleDelete(e,d)}/>)}
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