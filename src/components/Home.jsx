import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  const { users, status } = useSelector((state) => state.user);

  return (
    <div>
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
