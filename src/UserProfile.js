import { auth } from './firebase';

const UserProfile = () => {
  const user = auth.currentUser;

  return (
    <div>
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;