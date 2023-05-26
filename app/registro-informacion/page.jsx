import FormularioInfo from "@/components/FormularioInformacion";

const RegistroInformacionPersonal = () => {
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

            <FormularioInfo />
        </main >
    )
}
export default RegistroInformacionPersonal;