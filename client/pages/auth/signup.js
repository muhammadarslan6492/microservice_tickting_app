import { useState } from "react";
import axios from "axios";

const authBaseUrl = "http://localhost:4500";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4500/api/users/signup", {
        email,
        password,
      });
      console.log("this is response", res);
    } catch (err) {
      console.log("this is error", err);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>This is sign up page</h1>
      <div className='form-group'>
        <label className=''>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label className=''>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='form-control'
        />
      </div>
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};
