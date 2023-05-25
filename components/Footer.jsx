import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#501CE6] text-white pb-4 mt-5 pt-2 sm:pt-10 md:pt-20 px-2 sm:px-10 md:px-20 flex flex-col ">
            <section className="grid items-start gap-x-10 gap-y-5 grid-rows-2  md:gap-y-0 grid-cols-2 md:grid-rows-1 md:grid-cols-4 mb-5">
                {/* CURUS */}
                <section>
                    <h3 className="font-bold title_h3 mt-0">CURUS</h3>
                    <p>Ve segura, vuelve siempre.</p>
                </section>
                {/* Secciones pagina */}
                <section>
                    <h4 className="font-semibold">Explorar</h4>
                    <ul>
                        <li><Link href='/'>Inicio</Link></li>
                        <li><Link href='/propuesta-de-valor'>Propuesta de Valor</Link></li>
                        <li><Link href='/producto'>Producto</Link></li>
                        <li><Link href='/'>Conocenos</Link></li>
                    </ul>
                </section>
                {/* Contactanos */}
                <section>
                    <h4 className="font-semibold">Servicio a cliente</h4>
                    <p className="text-xs">Puedes contactarte a soporte si tienes alguna duda sobre el producto o algun error del sitio web.</p>
                    <p className="text-sm underline underline-offset-2">example@gmail.com</p>
                </section>
                {/* Aplicacion */}
                <section>
                    <h4 className="font-semibold">Plataformas</h4>
                    <button className="flex items-center">
                        <img width={16}  src='/images/playstore.svg'/>
                        <span>Playstore</span>
                    </button>
                </section>
            </section>
            <p>Copyright 2023©</p>
        </footer>
    )
}

export default Footer;