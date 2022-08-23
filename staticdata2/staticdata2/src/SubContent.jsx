import React from 'react';
import sampleData from './jsonexample.json';
import Person from './Person';

const SubContent = () => {


return(
    <>
      {sampleData.map(person => (
        <Person key={person.id} name={person.name} city={person.address.city}/>
      ))};
    </>
    )
}

export default SubContent;