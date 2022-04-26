import React from "react";
import { renderRoutes } from "react-router-config";

class Book extends React.Component{   
    render(){
        return(
            <div>
                <h1>Book Page</h1>
                {renderRoutes(this.props.route.routes, {someProp: "It`s prop from Ebook"})}
            </div>
            
        );
    }
}

export default Book;