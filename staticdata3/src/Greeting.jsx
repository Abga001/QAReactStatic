// Greeting.jsx
const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1> Welcome Back! </h1>
    }
    return <h1> Please Sign up.</h1>

}
export default Greeting; 

//import { useState } from 'react';

//const User = () => {
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');

    //const printValues = e => {
        //e.preventDefault();
        //console.log(username, password);
    //};

    //return (
       // <>
            //<form onSubmit={printValues}>
                //<label> Username:</label>
               // <input name="username"
                   // type="text"
                    //value={username}
                   // onChange={e => setUsername(e.target.value)} />

               // <label> Password: </label>
               // <input type="password"
                  //  name="password"
                   // value={password}
                  //  onChange={e => setPassword(e.target.value)} />
               // <br />
              //  <button>Submit</button>
           // </form>
      //  </>
   // );
// }

export default User;