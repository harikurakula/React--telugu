import React, { useState } from "react"

function Submit() {
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const { username, password } = data
  const onChange = (e) => {
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
          name="username "
          placeholder="username"
          value={username}
          onChange={onChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}

export default Submit
