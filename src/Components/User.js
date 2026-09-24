import { useEffect, useState } from "react"

const User = (props) =>{
    const [count , setCount] = useState(0)

    useEffect(()=>{
      const timer=  setInterval(()=>[
            console.log("Hey hello Puja")
        ],1000)
        console.log("useEffect called from functionanl component")

        return () => {
            clearInterval(timer)
        }
    })
    // Destructuring
    const {userName} = props

    return(
        <div className="user-card">
          <h2>This is from functional component</h2>
          <h3>{userName}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>
          <p>{count}</p>
        </div>
    )
}

export default User;