/*
<div i="Parent">
    <div id="child">
        <h1>I am H1 Tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
 </div>
*/

const Parent = React.createElement("div" ,{id:"parent"}, 
React.createElement("div" , {id:"child"}, 
[
React.createElement("h1" , {id:"heading1"} , "I am H1 tag"),
React.createElement("h2" , {id:"heading1"} , "I am H2 tag")
]),
React.createElement("div" , {id:"child2"}, 
[
React.createElement("h3" , {id:"heading2"} , "I am H3 tag"),
React.createElement("h4" , {id:"heading2"} , "I am H4 tag")
]),
)

// const heading1 = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"ABC", className:"headingClass"},
//     "Hello World from React*****");

// console.log("Heading Means Object",heading1)
const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(Parent);


