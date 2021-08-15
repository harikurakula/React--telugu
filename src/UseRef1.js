import React, { useRef, useEffect } from "react"

const UseRef1 = () => {
  const data = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data.current.value)
    //updating
    // data.current.value = "hello amma"
  }
  useEffect(() => {
    data.current.focus()
  }, [])
  return (
    <div>
      <centre>hello </centre>
      <form onSubmit={submitHandler}>
        <input ref={data} type="text" placeholder="Enter your name" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UseRef1
