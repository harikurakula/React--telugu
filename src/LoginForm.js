import React, { useState } from "react"

export const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    passwrod: "",
  })
  const { username, password } = data
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={username}
          onChange={changeHandler}
        />
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}
