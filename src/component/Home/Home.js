import React from "react";

class Home extends React.Component{

handelClick(){
    this.props.history.push('book')
}

    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handelClick.bind(this)}>
                    click
                </button>                
            </div>
            
        );
    }
}

export default Home;