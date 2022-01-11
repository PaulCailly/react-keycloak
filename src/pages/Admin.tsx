import { FC } from "react";

const AdminPage: FC = () => {
  return (
    <div>
      <h1>Welcome to the Admin page</h1>
      <p>
        It can only be accessed if you are logged in and have the <b>admin</b>{" "}
        role
      </p>
    </div>
  );
};

export default AdminPage;
