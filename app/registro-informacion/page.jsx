const RegistroInformacionPersonal = () => {
    const styleInput = 'shadow-sm rounded ';
    return (
        <main className="grid md:gap-x-5 md:grid-cols-2 content">
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
            <section className="md:order-3">
                <h3 className="title_h3 uppercase">codigo qr</h3>
                <div className="border border-black w-[200px] h-[200px] bg-slate-500"></div>
                <p className="content_p_small">Descargar</p>
            </section>
            <form className=" p-5 md:my-10 md:row-span-2 md:bg-[--primary-color]">
                <h2>Formulario de Datos</h2>
                <section className="grid gap-y-3">
                    <label>
                        Nombre del portador:
                        <input className={styleInput} type="text" name="" id="" />
                    </label>
                    <label>
                        Nombre del portador:
                        <input className={styleInput} type="text" name="" id="" />
                    </label>
                    <label>
                        Nombre del portador:
                        <input className={styleInput} type="text" name="" id="" />
                    </label>
                </section>
            </form>
        </main>
    )
}
export default RegistroInformacionPersonal;