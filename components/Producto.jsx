import Link from "next/link";

const Producto = () => {
    return (
        <main>
            <article className="mb-5 flex justify-center gap-x-10 items-center bg-slate-500 h-[30vh] md:h-[50vh]">
                <section>
                    <h1>PULSERA DE SEGURIDAD CURUS</h1>
                    <h2>Uso Facil, Imperceptible y Segura</h2>
                    <Link href='producto/producto-compra'>VER PRODUCTO</Link>
                </section>
                {/* Imagen de Producto */}
                <section className="hidden md:block">
                    lia
                </section>
            </article>
            <article className="content">
                <section>
                    <h2 className="title_h2">¿Por que usarla?</h2>
                    <p className="content_p">
                        Te invitamos a que pruebes la pulsera CURUS ya que nosotros más que nadie
                        queremos que te encuentres segurx y te estes prevenido ante cualquier situación en
                        la que se pueda ver afectada tu salud.
                        Por ello se ha diseñado este producto que cuenta con GPS y botón de pánico, fácil
                        de usar y simple. Además, pasará desapercibido al ojo de las personas que te
                        encuentres a tu alrededor y cada diseño será personalizado al gusto del cliente para
                        su comodidad preguntando las medidas de su muñeca.
                        Cuenta con un Código QR que contendrá información personal que tu como cliente
                        nos hayas brindado en el formulario de compra. Toda esta información que nos
                        entregues será de uso personal y nadie, más que tú tendrá acceso a ella mediante el
                        Código QR de tu pulsera. Asimismo, con la ayuda de la aplicación móvil podrás
                        compartir esta información con tu circulo de confianza (familiares o amigos de mucha
                        confianza).
                    </p>
                </section>
                <section className="grid xl:grid-cols-2">
                    <section>
                        <h2 className="title_h2">CARACTERISTICAS</h2>
                        <ul className="list-disc px-5 md:px-10 text-sm md:text-base">
                            <li>
                                Cuenta con sistema GPS que toma tu ubicación a
                                tiempo real las 24 horas del día siempre que esté
                                encendida.
                            </li>
                            <li>
                                Tiene una aplicación móvil donde podrás establecer un
                                círculo de personas de confianza los cuales ellos
                                podrán acceder a tu ubicación mediante la función de
                                amigos.
                            </li>
                            <li>
                                Cuenta con Bluetooth para vincularlo a tu celular y de
                                esta manera poder interactuar la pulsera mediante la
                                aplicación móvil.
                            </li>
                            <li>
                                El diseño es muy simple, al igual que los cliores
                                presentados, esto con la finalidad de pasar
                                desapercibida a simple vista al ojo de las demás
                                personas.
                            </li>
                            <li>
                                En el interior de la pulsera por la parte superior cuenta
                                con un botón de pánico que se encuentra oculto dentro
                                de este si lo presionas, emitirá un ruido lo bastante
                                fuerte para alertar a las personas a tu alrededor
                            </li>
                            <li>
                                En la parte inferior de la pulsera tiene grabada en ella
                                un Código QR el cual contiene tus datos personales
                                que se te pedirán en un formulario a la hora de realizar
                                a compra de la pulsera.
                            </li>
                            <li>
                                Este código Qr al escanearse mostrará tus datos
                                personales en caso de que quieran buscarte por
                                alguna situación de riesgo/peligro.
                            </li>
                        </ul>
                    </section>
                    {/* Carrusel de Imagenes */}
                    <section className="hidden xl:block">
                        imagennnn
                    </section>
                </section>
                <section>
                    <h2 className="title_h2">¿Cómo instalar la aplicacion de Curus?</h2>
                    {/* Pendiente */}
                    <ul>
                    </ul>
                </section>
                <section>
                    <h2 className="title_h2">PANTALLAS DE LA APLICACION MOVIL DE CURUS</h2>
                    {/* Imagenes de la aplicacion */}
                    <section>

                    </section>
                </section>
            </article>
        </main>
    )
}

export default Producto;