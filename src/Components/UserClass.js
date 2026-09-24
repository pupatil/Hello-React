import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count1:1,
            userData:{
                userName:"dummyName",
                location:"DummyLocation",
            }
        }
        console.log(this.props.userName + "child constructor")
    }

    async componentDidMount (){
        console.log(this.props.userName + "" + "componentDidMount called in child")
    //   this.timer =  setInterval(()=>[
    //         console.log("Hey hello Puja")
    //     ],1000)

    // to avoid this setcalling on each page 
        // calling API in the componentDidMount
        // this.getUsers(); // i have commected beacuse 
    }

    
    async getUsers() {
    const data = await fetch("https://api.github.com/users/pupatil") ;
    const json = await data.json();
    this.setState({
        userData:json
    })
    console.log("githib user data", json)
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
    }
    render(){
        // console.log(this.props.userName + "child render");
        // Destructuring
        //const { userName, location, contact } = this.props;
        const {name, location ,login,avatar_url} = this.state.userData;
            return(
                <div className="user-card">
                    <img src={avatar_url}></img>
                    <h2>Name - {name}</h2>
                     <h3>Location - {location}</h3>
                     {/* <h4>Contact - {contact}</h4> */}
                    <button onClick={ () => {
                        this.setState({
                          count : this.state.count + 1 
                        })
                    }}>Increment</button>
                    <p>{this.state.count}</p>
                </div>
            )
        }
}

export default UserClass;