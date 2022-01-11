import { FC } from "react";

const ProtectedPage: FC = () => {
  return (
    <div>
      <h1>Welcome to the Protected page</h1>
      <p>It can only be accessed if you are logged in</p>
    </div>
  );
};

export default ProtectedPage;
