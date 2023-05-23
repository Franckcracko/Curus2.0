'use client'

import Link from "next/link";
import { useState } from "react";

const ListNavbar = () => {
    const [collission, setCollission] = useState(false);
    const handleCollission = () =>{
        console.log(collission);
        setCollission(!collission);
    }
    return (
        <nav className={`${collission && 'fixed w-full h-full top-0 right-0 bg-purple-500 transition'}`}>
            <ul className={` ${collission ? 'mt-16 grid gap-y-5 justify-end mr-11 ' : 'flex max-md:hidden gap-x-5'} `}>
                <li><Link href='/'>INICIO</Link></li>
                <li><Link href='/propuesta-de-valor'>PROPUESTA DE VALOR</Link></li>
                <li><Link href='/producto'>PRODUCTO</Link></li>
                <li><Link href='/about-me'>CONOCENOS</Link></li>
            </ul>
            <button onClick={handleCollission} className="absolute top-4 right-3">
                <img className='hidden max-md:block' src="/images/menu-hamburguer.svg" alt="" width='32' />
            </button>
        </nav>
    )
}
export default ListNavbar;