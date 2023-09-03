import React from "react";

interface Props {
  users: any;
  onDelete: (userId: number) => void;
  onViewDetails: (user: any) => void;
}

const UserTable = ({ users, onDelete, onViewDetails }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Actions</th> {/* New Actions Column */}
        </tr>
      </thead>
      <tbody>
        {users.map((user: any, index: number) => (
          <tr key={index}>
            <td className="py-1">{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {/* Action Buttons */}
              <button onClick={() => onViewDetails(user)} className="mr-4">
                Details
              </button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
