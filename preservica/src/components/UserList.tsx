import { useState, useEffect } from "react";
import Profile from "./Profile";
import UserTable from "./UserTable";

const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  const [selectedUser, setSelectedUser] = useState<any>("");
  const [showProfile, setShowProfile] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Network response failed");
        }

        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  const handleDelete = (userId: number) => {
    const updatedUsers = users.filter((user: any) => user.id !== userId);

    setUsers(updatedUsers);
  };

  const handleViewDetails = (user: any) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5">Users</h1>
      <div className="flex">
        <UserTable
          users={users}
          onDelete={handleDelete}
          onViewDetails={handleViewDetails}
        />
        {showProfile ? (
          <Profile
            selectedUser={selectedUser}
            setShowProfile={setShowProfile}
          />
        ) : null}
      </div>
    </div>
  );
};

export default UserList;
