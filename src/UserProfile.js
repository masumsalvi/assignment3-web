import { auth } from './firebase';

const UserProfile = () => {
    // Get the currently authenticated user from Firebase Authentication
    const user = auth.currentUser;

    // Render the UserProfile component
    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            {/* Display the user's display name */}
            <h3>{user.displayName}</h3>
            {/* Display the user's email address */}
            <p>{user.email}</p>
        </div>
    );
}

export default UserProfile;