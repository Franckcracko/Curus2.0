import Image from "next/image";
import Link from "next/link";
import styles from '../app/producto.css';

const Producto = () => {
    return (
        <main>
            <article className="mb-5 flex justify-center gap-x-10 items-center  bg-slate-400 h-[35vh] md:h-[50vh]">
                <section className="flex-1 md:p-20">
                    <h1 className="title_h1 text-white">PULSERA DE SEGURIDAD CURUS</h1>
                    <h2 className="content_p_small text-white">Uso Facil, Imperceptible y Segura</h2>
                    <Link className="text-[--primary-color]  hover:text-[--secondary-color] hover:shadow-sm border-b border-[--primary-color] hover:border-[--secondary-color]" href='producto/producto-compra'>VER PRODUCTO</Link>
                </section>
                {/* Imagen de Producto */}
                <section className="md:flex-auto hidden md:block">
                    <Image className="" width={300} height={250} src='/images/pulsera_img_product-page.png'></Image>
                </section>
            </article>
            <article className="content">
                <section>
                    <h2 className="title_h2">¿Por que usarla?</h2>
                    <p className="content_p">
                        Te invitamos a que pruebes la pulsera CURUS ya que nosotros más que nadie
                        queremos que te encuentres segurx y estes prevenidx ante cualquier situación en la que se pueda ver afectada tu salud.
                        Por ello se ha diseñado este producto que cuenta con GPS y botón de pánico, fácil
                        de usar y simple. Además, pasará desapercibido al ojo de las personas que te
                        encuentres a tu alrededor y cada diseño será personalizado al gusto del cliente para
                        su comodidad preguntando las medidas de su muñeca.
                        Cuenta con un Código QR que contendrá información personal que tu como cliente
                        nos hayas brindado en el formulario de compra. Toda la información que nos
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
                                El diseño es muy simple, al igual que los colores
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
            
                    <section className={'${contenedor}'}>
                        <section className={'${imagenes}'}>
                
                         <Image className="" width={150} height={100} src='/images/mapa.png'></Image>
                        <Image className="" width={150} height={100} src='/images/telefono.png'></Image>
                        <Image className= "" width={150} height={100} src='/images/bluetooth.png'></Image>
                        <Image className="" width={150} height={100} src='/images/imperceptible.png'></Image>
                        <Image className="" width={150} height={100} src='/images/boton_de_emergencia.png'></Image>
                        <Image className="" width={150} height={100} src='/images/codigoqr.png'></Image>
                 </section>
                    </section>
                </section>
                <section>
                    <h2 className="title_h2">¿Cómo instalar la aplicacion de Curus?</h2>
                    {/* Pendiente */}
                    <li>1.- Instala nuestra app mediante este enlace https://www.mediafire.com/file/ylfk50y67t99npj/app-debug.apk/file</li>
                    <li>2.- Dale permisos a tu celular de instalar aplicaciones de origenes desconocidos.</li>
                    <li>3.- Una vez instalada abre la aplicación “Curus”</li>
                    <li>4.- Registrate con tu correo eléctronico y crea una contraseña para la app.</li>
                    <li>5.- Registra el codigo de referencia de tu pulsera en caso de que tengas portada una pulsera(este código de referencia se te otorgará una vez realizada tu compra).</li>
                    <li>6.- Listo, ya estas dentro de la aplicación de Curus.</li>
                    <ul>
                    </ul>
                </section>
                <section>
                    <h2 className="title_h2">PANTALLAS DE LA APLICACION MOVIL DE CURUS</h2>
                    <li>REGISTRO</li>
                    <li>CODIGO DE REFERENCIA</li>
                    <li> INICIO</li>
                    <li>AMIGOS</li>
                    <li>CONFIGURACION</li>
                    {/* Imagenes de la aplicacion */}
                    <section className="column-count:5">
                    <section className="md:flex-auto hidden md:block">
                    <Image className="" width={300} height={500} src='/images/Imagen_app1.png'></Image>
                    <Image className="" width={300} height={500} src='/images/Imagen_app2.png'></Image> 
                    <Image className="" width={300} height={500} src='/images/Imagen_app3.png'></Image>
                    <Image className="" width={200} height={400} src='/images/Imagen_app4.jpg'></Image>
                    <Image className="" width={200} height={600} src='/images/imagen_app5.png'></Image>
                </section>
                    {/* ENLACE DEL MANUAL*/}
                    <Link className="text-[--primary-color]  hover:text-[--secondary-color] hover:shadow-sm border-b border-[--primary-color] hover:border-[--secondary-color]" href='https://pdf.ac/1IAWjf'>Descarga el Manual de Usuario e Instalacion</Link>
                    </section>
                </section>
            </article>
        </main>
    )
}

export default Producto;