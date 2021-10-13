import React from 'react'
import faker from "faker";

function Header (props) {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">{faker.name.firstName()} </a>
                    
                    <div className="metadata">
                      
                        <span className="date">{props.author}</span>
                    
                    </div>
                    <div className="text">
                
                        {props.Time}
                
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Header
