import { firestore } from './firebase';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth } from './firebase';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const user = auth.currentUser;

    // Function to fetch the list of users from the 'user-list' collection in Firestore
    const fetchUsers = async () => {
        // Use the getDocs function to retrieve all documents from the 'user-list' collection
        await getDocs(collection(firestore, "user-list"))
            .then((querySnapshot) => {
                // Map the querySnapshot into an array of user objects, extracting the document ID and data
                const newUsers = querySnapshot.docs
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                // Update the state with the new list of users
                setUsers(newUsers);
            });
    }

    // Use the useEffect hook to fetch the list of users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h1>User List</h1>
            {users.map(userItem => {
                // Check if the user's email matches the currently logged-in user's email
                // If they don't match, render the user information in a user-card div
                if (userItem.email !== user.email) {
                    return (
                        <div key={userItem.id} className="user-card">
                            <h2>{userItem.displayName}</h2>
                            <p>{userItem.email}</p>
                        </div>
                    );
                }
                // If the user's email matches, return null to skip rendering this user
                return null;
            })}
        </div>
    );
}

export default UserList;