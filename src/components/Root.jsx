import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <div>
      {/* header */}
      <NavBar></NavBar>
      {/* <h1 className='text-4xl text-center'>This is Root</h1> */}
      <Outlet></Outlet>
      {/* footer */}
    </div>
  );
};

export default Root;
