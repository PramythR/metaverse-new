import React from 'react';
import Image from "next/image";
import universe from "../images/universe.jpeg"
import {useMoralis} from "react-moralis";
function Login(props) {
    const { authenticate } = useMoralis();
    return (
       <div className="bg-black text-white relative">
          <h1>I am the login components</h1>
           <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center
           space-y-4
           ">
              <Image
               className="object-cover rounded-full"
                  src={universe}
              width={200}
              height={200}
              />
               <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"> Login to the METAVERSE</button>
           </div>
           <div className="w-full h-screen">
                 <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
           </div>
       </div>
    );
}

export default Login;