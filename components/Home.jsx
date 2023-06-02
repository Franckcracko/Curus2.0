import Image from "next/image";
import styles from '../app/home.module.css';

const Home = () => {
    const stylesSection = "grid md:grid-cols-2 items-center mb-5"
    return (
        <main>
            <article>
                {/* Hero Icon */}
                <section className={`${styles.hero_image} max-h-[1000px] flex justify-start md:grid md:place-content-center md:whitespace-pre-line`}>
                    <h1 className="text-7xl mt-6 mx-1 leading-snug md:text-[5.5rem] text-white">VE SEGURA, VUELVE SIEMPRE</h1>
                </section>
            </article>
            <article className="content">

                {/* Seguridad */}
                <section className={stylesSection}>
                    <section>
                        <h2 className="title_h2">Seguridad</h2>
                        <p className="content_p">
                            La pulsera de seguridad está pensada para
                            situaciones en la cual la persona se encuentre
                            en peligro. Para ello tiene implementado un GPS
                            que estará prendido las 24 horas del dia, al igual
                            que contiene un boton de alarma que provocará
                            un ruido acustico para alertar a las personas que
                            se encuentran cerca de tí y al mismo tiempo
                            enviará un mensaje de auxilio a las personas de
                            mayor confianza que tenga configuradas desde
                            la app de Curus.
                        </p>
                    </section>
                    <div className="mx-auto">
                    <Image  src={'/images/security.jpg'} alt=""  height={300} width={300}></Image>
                    </div>
                </section>
                {/* Imperceptible */}
                <section className={stylesSection}>

                    <section className="md:order-2 flex flex-col md:items-end">
                        <h2 className="title_h2">Imperceptible</h2>
                        <p className="content_p ">
                            Cuenta con un diseño bastante simple con
                            la finalidad de que pase imperceptible al
                            ojo humano. Con la finalidad de que en
                            caso de que te sientas en alguna situación
                            de peligro la persona agresora no lo haya
                            percibido
                        </p>
                    </section>
                    <div className="mx-auto">
                    <Image  src={'/images/oculto.png'} alt=""  height={300} width={300}></Image>
                    </div>

                </section>
                {/* Facil de usar */}
                <section className={stylesSection}>
                    <section>
                        <h2 className="title_h2">Facil de Usar</h2>
                        <p className="content_p">
                            La pulsera solo la debes colocar en tu
                            muñeca, tiene la funcionalidad del Gps y
                            del botón de alarma que estará ubicada en
                            la parte de abajo. Además cuenta con una
                            aplicación movil en la cual debes iniciar
                            sesión como en cualquier otra app movil.
                        </p>
                    </section>
                    <div className="mx-auto">
                    <Image  src={'/images/facilidad.jpg'} alt=""  height={300} width={300}></Image>
                    </div>
                </section>
            </article>
        </main>
    )
}
export default Home;