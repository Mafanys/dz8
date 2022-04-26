import React from "react";


class Ebook extends React.Component{
    render(props){
        return(
          <div>
            <h1>El-Book Page</h1>
            {this.props.someProp}
            </div>
        );
    }
}

export default Ebook;