import Link from "next/link";

const RegistroInformacionPersonal = () => {
    const styleInput = 'peer md:placeholder:text-transparent shadow md:shadow-sm rounded flex-1 md:flex-auto md:ml-2 p-3 md:p-1 border border-solid border-black border-opacity-10';
    return (
        <main className="grid md:gap-x-5 md:grid-cols-2 content ">
            <section>
                <h1 className="title_h1">Registra tu Informacion</h1>
                <p className="text-base">
                    Los datos que te pedimos a continuación son
                    requeridos para el uso correcto de la pulsera de
                    seguridad. Con esta informacion que nos
                    proporciones generaremos un Código Qr que al
                    escanearlo mediante un celular te enviará una URL
                    unica y directa a la información personal sobre ti en
                    caso de necesitar sus datos personales en alguna
                    situación de riesgo. Su información está totalmente
                    segura con nosotros será privada ni nosotros ni nadie
                    más solamente usted conocerá estos datos.
                </p>
            </section>
            <section className="order-3 grid justify-center justify-items-center">
                <h3 className="title_h3 uppercase">codigo qr</h3>
                <section className="border border-black w-[200px] h-[200px] bg-slate-500 "></section>
                <a href="#" className="content_p_small">Descargar</a>
            </section>
            <form className="md:shadow-lg md:rounded md:px-5 md:my-10  md:row-span-2 md:bg-[--primary-color]">
                <h2 className="text-start md:text-center title_h2 md:text-white">Formulario de Datos</h2>
                <section className="grid gap-y-3 w-full  px-5 sm:px-10 md:px-0 md:my-10">
                    {
                        [1, 2, 3, 4].map(el => {
                            return(
                                <section key={el} className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                                    <label className="flex-none text-sm text-[rgba(0,0,0,0.5)] md:text-slate-200 md:opacity-100 focus-visible:hidden">
                                        Nombre del portador:
                                    </label>
                                    <input className={styleInput} type="email" placeholder="Brian Leonardo" />
                                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                        Requerido
                                    </p>

                                </section>
                            )
                        })

                    }
                </section>
                <section className="flex justify-center sm:mt-7 md:mt-0 md:justify-end">
                    <button type="submit" className="w-full mx-28 text-center py-3 sm:py-2 md:py-2 md:mx-0 sm:mx-0 sm:w-auto md:w-auto sm:px-10 md:px-10 p-2 uppercase text-white bg-[--footer-bg] hover:bg-[--border-color] rounded hover:shadow">enviar</button>
                </section>
            </form>
        </main >
    )
}
export default RegistroInformacionPersonal;