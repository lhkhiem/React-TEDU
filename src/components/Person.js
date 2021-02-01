import React from 'react';

const Person = (prop) => {
    return (
        <>
        <p>My name is {prop.name}.</p>
        <p>I'm {prop.age} years old.</p>
        <p>{prop.children}</p>
        </>
    )

}
export default Person;