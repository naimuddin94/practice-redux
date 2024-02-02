const Register = () => {
  return (
    <div>
      <form>
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
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
