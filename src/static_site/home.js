import './home.css';
import ListItem from '../components/list_item/list_item';
import React, { useState } from 'react';

import { Button } from 'react';

function Home() {
    //const value = 0;
    const [value, setValue] = useState(0);

    const students = [];


    return (
        <div className='body'>
            <div className="header">
                <div className='logo'>
                    <img src='/logo192.png' height={50} />
                    <h1>React</h1>
                </div>

                <h5>React Course - Project 1</h5>
            </div>

            <div className='subhead'>Fun facts about React</div>

            <ul>
                <ListItem text="Was first released in 2013" />
                <ListItem text="Was originally created by Jordan Walke" />
                <ListItem text="Has well over 100K stars on GitHub" />
                <ListItem text="Is maintained by Facebook" />
                <ListItem text="Powers thousands of enterprise apps, including mobile apps" />
            </ul>

            <div className='button_add'>
                <button onClick={() => setValue(value + 1)} >Add 1</button>

                <div className='value'>{value}</div>
            </div>
        </div>
    );
}

export default Home;