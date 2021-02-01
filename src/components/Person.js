import React from 'react';

const Person = (prop) => {
    return (
        <>
        <p onClick={prop.click}>My name is {prop.name}.</p>
        <p>I'm {prop.age} years old.</p>
        <p>{prop.children}</p>
        <input type="text" onChange={prop.change} value={prop.name}></input>
        </>
    )

}
export default Person;