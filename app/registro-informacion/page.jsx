"use client"
import FormularioInfo from "@/components/FormularioInformacion";
import Image from "next/image";
import { toCanvas, toDataURL } from "qrcode";
import { useEffect, useState } from "react";

const RegistroInformacionPersonal = () => {

    const [link, setLink] = useState('')
    const [data, setData] = useState(false)

    const [linkDownloadQR, setLinkDownloadQR] = useState('');

    const handleCanvas = () => {
        const canvas = document.getElementById('canvas')
        toCanvas(canvas, link,
            {
                width: 200,
                margin: 0,
                scale: 0,
            },
            function (error) {
                if (error) {
                    return console.error(error)
                }

            }
        )
    }
    useEffect(() => {
        if (data) {
            handleCanvas();
            toDataURL(link, function (err, url) {
                if (url) {
                    setLinkDownloadQR(url);
                }
            })
        }
    }, [data])
    return (
        <main className="grid md:gap-x-5 md:grid-cols-2 content ">
            <section>
                <h1 className="title_h1">Registra tu Informacion</h1>
                <p className="text-base">
                Los datos que te pedimos a continuación son requeridos para el uso correcto de la pulsera de seguridad. Con esta informacion que nos proporciones generaremos un Código Qr que al escanearlo mediante un celular te enviará una URL unica y directa a la información personal sobre ti en caso de necesitar sus datos personales en alguna situación de riesgo. Su información está totalmente segura con nosotros será privada ni nosotros ni nadie más solamente usted conocerá estos datos
                </p>
            </section>
            <section className="order-3 grid justify-center justify-items-center">
                <h3 className="title_h3 uppercase">codigo qr</h3>
                {
                    data ?
                        (<canvas width={200} height={200} id="canvas" className="m-0 bg-purple-400_20"></canvas>) :
                        (<section className="border border-black w-[200px] h-[200px] bg-slate-500 "></section>)
                }
                {
                    data && <a href={linkDownloadQR} className="text-[#0E34FF] hover:text-[#4277FF]" download>DESCARGAR</a>
                }
            </section>

            <FormularioInfo setData={setData} setLink={setLink} />
        </main >
    )
}
export default RegistroInformacionPersonal;