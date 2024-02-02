import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  const users = useSelector((state) => state.user);
  console.log(users);
  return (
    <div>
      <h1>Home page here</h1>
    </div>
  );
};

export default Home;
