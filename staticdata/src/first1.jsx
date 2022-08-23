import React from 'react';
import sampleData from './jsonexample.json';

const Content = () => {

 return(
   <div>
     {sampleData.map((person)=>(
       <p> Hello, {person.name} from {person.address.city}!</p>
     ))}
   </div>
 )
}

export default Content;