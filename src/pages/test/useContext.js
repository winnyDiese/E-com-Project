

const { useState } = require("react")

function UserDetailComponent(){
    var [userDetail, setUserDetail] = useState({
        name: "Mayank",
        age:30
    })

    return (
        <div>
            <h1>this is the parent</h1>
            <Child userDetail={userDetail}/>
        </div>
    )
}
export default UserDetailComponent


function Child({userDetail}){
    return (
        <div>
            <h2>The child component</h2><hr/>
            <SubChild userDetail={userDetail} />
        </div>
    )
}

function SubChild({userDetail}){
    return(
        <div>
            <h3>The sub child component</h3>
            <h4>The name : {userDetail.name}</h4>
            <h4>The age : {userDetail.age}</h4>
        </div>
    )
}




