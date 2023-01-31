import React from 'react';
const Input = (props) => {
    return ( 
        <>
         <input type="text" 
          value={props.name}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.name}
          className="form-control my-3 p-4" />
        </>
     );
}
 
export default Input;