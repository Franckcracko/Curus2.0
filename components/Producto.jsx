import Link from "next/link";

const Producto = () => {
    return (
        <main>
            <article>
                <section>
                    <h1>PULSERA DE SEGURIDAD CURUS</h1>
                    <h2>Uso Facil, Imperceptible y Segura</h2>
                    <Link href='producto/producto-compra'>VER PRODUCTO</Link>
                </section>
                {/* Imagen de Producto */}
                <section>
                </section>
            </article>
            <article>
                <section>
                    <h2>¿Por que usarla?</h2>
                    <p>
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
                <section>
                    <h2>CARACTERISTICAS</h2>
                    <ul>
                        <ol>
                            Cuenta con sistema GPS que toma tu ubicación a
                            tiempo real las 24 horas del día siempre que esté
                            encendida.
                        </ol>
                        <ol>
                            Tiene una aplicación móvil donde podrás establecer un
                            círculo de personas de confianza los cuales ellos
                            podrán acceder a tu ubicación mediante la función de
                            amigos.
                        </ol>
                        <ol>
                            Cuenta con Bluetooth para vincularlo a tu celular y de
                            esta manera poder interactuar la pulsera mediante la
                            aplicación móvil.
                        </ol>
                        <ol>
                            El diseño es muy simple, al igual que los colores
                            presentados, esto con la finalidad de pasar
                            desapercibida a simple vista al ojo de las demás
                            personas.
                        </ol>
                        <ol>
                            En el interior de la pulsera por la parte superior cuenta
                            con un botón de pánico que se encuentra oculto dentro
                            de este si lo presionas, emitirá un ruido lo bastante
                            fuerte para alertar a las personas a tu alrededor
                        </ol>
                        <ol>
                            En la parte inferior de la pulsera tiene grabada en ella
                            un Código QR el cual contiene tus datos personales
                            que se te pedirán en un formulario a la hora de realizar
                            a compra de la pulsera.
                        </ol>
                        <ol>
                            Este código Qr al escanearse mostrará tus datos
                            personales en caso de que quieran buscarte por
                            alguna situación de riesgo/peligro.
                        </ol>
                    </ul>
                    {/* Carrusel de Imagenes */}
                    <section>
                        
                    </section>
                </section>
                <section>
                    <h2>¿Cómo instalar la aplicacion de Curus?</h2>
                    {/* Pendiente */}
                    <ul>
                    </ul>
                </section>
                <section>
                    <h2>PANTALLAS DE LA APLICACION MOVIL DE CURUS</h2>
                    {/* Imagenes de la aplicacion */}
                    <section>

                    </section>
                </section>
            </article>
        </main>
    )
}

export default Producto;