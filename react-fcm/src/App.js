import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import firebase from './firebase'
import { getMessaging, getToken } from "firebase/messaging";

const App = () => {
  const [token, setToken] = useState("");
  const messaging = getMessaging();

  useEffect(() => {
    getToken(messaging).then(token => {
      setToken(token);
    }).catch((err) => {
      console.log(err)
    })
  }, [messaging])

  return (
    <div style={{marginLeft:"5%"}}>
      <h1>Your Device Token</h1>
      <p><b>{token}</b></p>
    </div>
  );
}

export default App;


// vvvvvvvvvvvvvvvvvvvvv for firebase v7 vvvvvvvvvvvvvvvvvvvvv

// import React, { useEffect, useState } from 'react'
// import firebase from './firebase'
// const Home = () => {
//     const [token, setToken] = useState("");

//     useEffect(() => {
//         const messaging = firebase.messaging()
//         messaging.requestPermission().then(() => {
//             return messaging.getToken()
//         }).then((token1) => {
//             console.log(token1)
//             setToken(token1)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }, [])

    
//     return (
//         <div>
//             <h1>{token}</h1>
//         </div>
//     )
// }

// export default Home
