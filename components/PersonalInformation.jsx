"use client"

import { useState } from "react"

const PersonalInformation = ({data}) =>{
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const keys = Object.keys(data);
    const values = keys.map(key => data[key]);
    console.log(data);
    console.log(keys);
    return (
        <>
            <h1 className="title_h1">Datos personales</h1>
            <ul >
                {values.map((value, index) => (
                    <li key={index} className="flex flex-col md:gap-x-2 md:flex-row mb-5">
                        <h3 className="title_3 uppercase text-[--secondary-color]">{keys[index]}:</h3>
                        <p>{value}</p>
                    </li>
                    ))
                }
            </ul>
        </>
        
    )
}
export default PersonalInformation;