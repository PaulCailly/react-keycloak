import { FC } from "react";
import HttpService from "../services/HttpService";

const ProtectedPage: FC = () => {
  const handleRequest = async () => {
    await HttpService.getAxiosClient().get("http://localhost:8000/protected");
  };

  return (
    <div>
      <h2>Welcome to the Protected page</h2>
      <p>It can only be accessed if you are logged in</p>
      <button onClick={handleRequest}>Make request</button>
    </div>
  );
};

export default ProtectedPage;
