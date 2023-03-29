
import { useContext, useState, createContext } from "react"

var userDetailContext = createContext(null)

export default function userDetailFunc(){

    var [userDetail] = useState({
        name: "Pasco",
        age: 30
    })

    return (
        <userDetailContext.Provider value={userDetail} >
            <h1>This is the parent</h1><hr/>
            <ChildComponent />
        </userDetailContext.Provider>
    )
}

function ChildComponent(){
    return(
        <div>
            <h3>The child component</h3><hr/>
            <SubChildComponent />
        </div>
    )
}


function SubChildComponent(){
    var contextData = useContext(userDetailContext)
    return(
        <div>
            <h3>The sub child component</h3>
            <h4>The name : {contextData.name}</h4>
            <h4>The age : {contextData.age}</h4>
        </div>
    )
}