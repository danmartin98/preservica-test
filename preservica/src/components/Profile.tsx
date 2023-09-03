interface Props {
  selectedUser: any;
  setShowProfile: (show: boolean) => void;
}

const Profile = ({ selectedUser, setShowProfile }: Props) => {
  return (
    <div className="bg-slate-500 flex-grow text-black ml-5 p-4 flex flex-col justify-start items-center">
      <div className="flex items-center mt-5">
        <p className=" flex-grow text-lg pr-7">Profile</p>
        <button
          onClick={() => {
            setShowProfile(false);
          }}
        >
          X
        </button>
      </div>
      <ul>
        <li className="mb-2">Username: {selectedUser.username}</li>
        <li className="mb-2">Name:{selectedUser.name} </li>
        <li className="mb-2">Email: {selectedUser.email}</li>
        <li className="mb-2">Address: {selectedUser.address.street}</li>
        <li className="mb-2">Phone Number: {selectedUser.phone} </li>
        <li className="mb-2">Company Name: {selectedUser.company.name}</li>
      </ul>
    </div>
  );
};

export default Profile;
