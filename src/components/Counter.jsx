import { useState } from "react"

const Counter = function () {
      const [likes, setLikes] = useState(0)
      const [value, setValue] = useState("default text")

      function increment() {
        setLikes(likes + 1)
        console.log(likes)
      }

      function decrement() {
        setLikes(likes - 1)
        console.log(likes)
      }

    return (
      <div className="counter">
        <span id="idSpan">span</span>
        <h1>{likes}</h1>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
}

export default Counter