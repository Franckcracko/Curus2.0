import Image from "next/image";
import styles from '../app/home.module.css';

const Home = () => {
    return (
        <main>
            <article>
                {/* Hero Icon */}
                <section className={styles.hero_image}>

                </section>
            </article>
            <article>

                {/* Seguridad */}
                <section>
                    <h2 className="text-xl md:text-2xl">Seguridad</h2>
                    <p className="text-base">
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
                {/* Imperceptible */}
                <section>
                    <h2 >Imperceptible</h2>
                    <p>
                        Cuenta con un diseño bastante simple con
                        la finalidad de que pase imperceptible al
                        ojo humano. Con la finalidad de que en
                        caso de que te sientas en alguna situación
                        de peligro la persona agresora no lo haya
                        percibido
                    </p>
                </section>
                {/* Facil de usar */}
                <section>
                    <h2>Facil de Usar</h2>
                    <p>
                        La pulsera solo la debes colocar en tu
                        muñeca, tiene la funcionalidad del Gps y
                        del botón de alarma que estará ubicada en
                        la parte de abajo. Además cuenta con una
                        aplicación movil en la cual debes iniciar
                        sesión como en cualquier otra app movil.
                    </p>
                </section>
            </article>
        </main>
    )
}
export default Home;