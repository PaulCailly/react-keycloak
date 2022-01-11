import { FC } from "react";
import HttpService from "../services/HttpService";

const AdminPage: FC = () => {
  const handleRequest = async () => {
    await HttpService.getAxiosClient().get("http://localhost:8000/admin");
  };

  return (
    <div>
      <h2>Welcome to the Admin page</h2>
      <p>
        It can only be accessed if you are logged in and have the <b>admin</b>{" "}
        role
      </p>
      <button onClick={handleRequest}>Make request</button>
    </div>
  );
};

export default AdminPage;
