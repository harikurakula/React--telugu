import React, { useState } from "react"
import axios from "axios"
export const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpPassword: "",
  })
  const { username, email, password, confirmPassword } = data
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios
      .post(
        "https://teluguskillhub-d4cb1-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("submitted succesfully"))
    // if (username.length <= 5) {
    //   alert("username must be atleast 5 characters")
    //   // } else if (password !== confirmPassword) {
    //   alert("passwords are not matching")
    // } else {
    //   console.log(data)
    // }
    // if (password === confirmpPassword) {
    //   console.log(data)
    // } else {
    //   console.log("passwords are not matched")
    // }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="enter confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
          />
        </div>
        {/* {{ password } !== { confirmPassword } ? (
          <p style={{ color: "red" }}>"passwords not matching"</p>
        ) : null} */}
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
