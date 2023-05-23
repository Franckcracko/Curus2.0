'use client'

import Link from "next/link";
import { useState } from "react";

const ListNavbar = () => {
    const [collission, setCollission] = useState(false);
    const handleCollission = () => setCollission(!collission);
    return (
        <nav className={`${collission && 'fixed w-full h-[100%] top-0 right-0 bg-purple-500 transition'} items-center`}>
            <ul className={` ${collission ? 'mt-16 grid gap-y-5 justify-start ml-11 ' : 'flex max-md:hidden gap-x-5'} `}>
                <li><Link href='/'>INICIO</Link></li>
                <li><Link href='/propuesta-de-valor'>PROPUESTA DE VALOR</Link></li>
                <li><Link href='/producto'>PRODUCTO</Link></li>
                <li><Link href='/about-me'>CONOCENOS</Link></li>
            </ul>
            <button onClick={handleCollission} className="absolute top-3 right-3">
                <img className='hidden max-md:block' src={`${collission ? "/images/error.svg" : "/images/menu-hamburguer.svg"}`} alt="icon-menu" width='32' />
            </button>
        </nav>
    )
}
export default ListNavbar;