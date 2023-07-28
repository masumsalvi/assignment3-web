import { firestore } from './firebase';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth } from './firebase';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const user = auth.currentUser;
    const fetchUsers = async () => {

        await getDocs(collection(firestore, "user-list"))
            .then((querySnapshot) => {
                const newUsers = querySnapshot.docs
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                setUsers(newUsers);
            })

    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(userItem => {
                if (userItem.email !== user.email) {
                    return (
                        <div key={userItem.id}>
                            <h2>{userItem.displayName}</h2>
                            <p>{userItem.email}</p>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default UserList;