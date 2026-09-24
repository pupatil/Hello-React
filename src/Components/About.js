import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructer", props);
  }
  componentDidMount() {
    console.log("Component Mounted in parant compoenet");
  }

  render() {
    console.log("Parent render called");
    return (
      <div>
        <div>
        LoggedIn User:
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            console.log("data", loggedInUser);
            return <h2>{loggedInUser}</h2>;
          }}
        </UserContext.Consumer>
        </div>
        <h1>This is about class component</h1>
        <h2>This React Learning web series</h2>
        <UserClass
          userName={"Yogesh"}
          location={"Pune"}
          contact={"puja@gmail.com"}
        ></UserClass>
        <User userName={"Himanshi"} location={"warje"}></User>
      </div>
    );
  }
}

export default About;
