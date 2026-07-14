import React from "react";
import ReactDOM from "react-dom/client";

    // JXS traspiles before it reaches the browser. 
    // It is not understood by the browser.
    // So we need to use babel to transpile it into React.createElement() method which is understood by the browser.
    // this is the way to create a react element using React.createElement() method

    // JSX babel transpiles it into React.createElement() method which is understood by the browser.
    // JSX => Babel tranpiles it to React.createElement() method => React.createElement object =>HTMLElement Render()
    const heading = React.createElement("h1" , {},"Hello, React!");
    const root= ReactDOM.createRoot(document.getElementById("root"))


    // if we have single line jsx code then its fine to use it directly in the render method. But if we have multiple lines
    //  of jsx code then we need to wrap it in a div or a angular bracket.
    // this is the react Element because its start with small letter. 
    const heading2 = (
    <h1 className="heading" id="heading" tabIndex="1">
        Hello, React! from JSX
    </h1>
    );

    // Wwe can create components in two ways. One is using function and another is using class.
    //Functional Component:
    // this is first way to create a functional component. We can also use arrow function to create a functional component.
    // functinal compoen talwys start with the capital letter.
    // use return syntax while writing the code
    const TitleComponent = function(){
        return(
            <div>
                <h1>Hello, React! from Title Functional Component</h1>
            </div>
        )
    }
    const HeadingComponent = () =>{
       return( 
       <div>
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
            <h1>Hello, React! from Functional Component</h1>
        </div>
        )
    }
    const HeadingComponents = () => <h1>Hello, React! from Functional Component , second way</h1>
        
    

// root.render(HeadingComponent); // we cant pass like this beacuse its a comopoen elament we can only pass in this way. we can also pass like this root.render(<HeadingComponent />); but we cant pass like this root.render(HeadingComponent()); because it will return a react element and we need to pass a react component.
root.render(<HeadingComponent />); // we can also pass like this root.render(<HeadingComponent />); but we cant pass like this root.render(HeadingComponent()); because it will return a react element and we need to pass a react component.
console.log(heading2);
console.log(heading);