import { Outlet } from "react-router-dom";

const Navigator = () => {
  return (
    <div>
      <div>
        <h1>This is the navigator bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
