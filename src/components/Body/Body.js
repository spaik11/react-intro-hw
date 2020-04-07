import React from 'react';
import Content from './Content/Content';
import './Body.css'

const body = () => (
    <div className="body">
        <img style={{ height: 200, width: 200 }}src="./images/karen.jpg" alt="..." />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis volutpat urna sit amet posuere. Etiam quis nisi vel velit porttitor lobortis sit amet quis purus.</p>
        <div className="content">
        <Content 
            image='./images/n95.png' 
            />
        <Content 
            image='./images/gloves.jpg'
            />
        <Content 
            image='./images/handsanitizer.jpeg'
            />
        <Content 
            image='./images/corona.jpg'
            />
        </div>
    </div>
);

export default body;