import React from 'react';
import ReactDOM from 'react-dom';

// const luckyNumber = () => (Math.floor(Math.random()*1000)+1)

// const Greeting = (user) => (
//     <div className="container">
//         <h1>Hello {name}</h1>
//         <h2 className="text-muted">You're lucky number is {luckyNum}</h2>
//     </div>
// )
// const {name,luckyNum} = user
// ReactDOM.render(
//     <h1 className="container text-center">React Prototypes!</h1>,
//     <Greeting name="nameString" luckyNum={luckyNumber}/>,
//     document.getElementById('root')
// );
//error: user is not defined



/////////////////////////////////////////


// const luckyNumber = () => (Math.floor(Math.random()*1000)+1)

// const Greeting = (props) => (
//     <div className="container">
//         <h1>Hello {props.user.name}</h1>
//         <h2 className="text-muted">You're lucky number is {props.user.luckyNumber}</h2>
//     </div>
// )
// ReactDOM.render(
//     <h1 className="container text-center">React Prototypes!</h1>,
//     // <Greeting user={name="nameString" luckyNumber={luckyNumber}}/>,
//     // <Greeting user={name:"nameString", luckyNumber:{luckyNumber}}/>,
//     // <Greeting user=[name:"nameString", luckyNumber:{luckyNumber}]/>,
//     <Greeting user={[name="test",luckyNumber]}></Greeting>,
//     document.getElementById('root')
// );

//error: uncaught invariant violoation: target container is not a DOM element

/////////////////////////////////////////////

function luckyNumber(){
    return (Math.floor(Math.random()*1000)+1)
}

function greeting(user){
    return  <div className="container">
                <h1>Hello {user.name}</h1>
                 <h2 className="text-muted">You're lucky number is {user.luckyNumber}</h2>
            </div>
}
const user = {
    name: "Tatumn",
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
)


