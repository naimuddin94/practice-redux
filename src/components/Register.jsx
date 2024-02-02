import { useDispatch } from "react-redux";
import { createUser } from "../features/userAPI";

const Register = () => {
  const dispatch = useDispatch();

  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    dispatch(createUser(user));
    form.reset();
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleUser}>
        <label>Email</label>
        <br />
        <input type="text" name="email" />
        <br />
        <label>Name</label>
        <br />
        <input type="text" name="name" />
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
