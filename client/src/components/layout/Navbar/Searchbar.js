import React, { useState } from 'react';
import'./Searchbar.css';
import {Link} from 'react-router-dom';

const Searchbar = (props) => {

    const [UserInput, SetUserInput] = useState({
        USERinput : "",
        USERinput1 : "",
    })

    const NewUserInput = (event) =>{
        SetUserInput({
            USERinput : event.target.value,
        })
        console.log(UserInput.USERinput);
    }




    return(<div className="srchbar">
     
        <input type="text" className="search-crse" onChange={NewUserInput} value={UserInput.USERinput} />
       
        
        <Link  to ="/"className="btn btn-full">Search</Link>
        </div>
        );
};

export default Searchbar;