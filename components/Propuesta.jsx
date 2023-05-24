import Image from "next/image";

const Propuesta = () => {
    return (
        <main className="content">
            <h1 className="title_h1">PROPUESTA DE VALOR</h1>
            <section className="mb-5">
                <p className="content_p font-medium">
                    SEREMOS LOS PRIMEROS EN MEXICO EN OFRECERTE SEGURIDAD AL
                    ALCANCE DE TU PULSERA
                </p>
                <section className="grid md:grid-cols-2">
                    <p className="content_p">
                        El valor de este producto es ser los primeros en México
                        en garantizar la proteccion de nuestro cliente y a su vez
                        que sienta seguridad a la hora de usar nuestra pulsera
                        asi como tambien, satisfacer sus necesidades al
                        momento de portar la pulsera, asegurar su bienestar y
                        tranquilidad.
                        Con este producto, pretendemos con el uso de nuestro
                        dispositivo disminuir las despaariciones forzadas de las
                        personas y ayudarlas en diversas situaciones de
                        vulnerabilidad
                    </p>
                    <Image />
                </section>
            </section>
            <section className="mb-5 grid md:grid-cols-2">

                <section className="md:order-2">
                    <h2 className="title_h2 md:text-end">Caracteristicas</h2>
                    <section className="md:grid md:justify-end">
                        <p className="content_p">Este producto esta dirigido a personas de todas las edades</p>
                        <ul className="list-disc px-10">
                            <li>Menores de edad.</li>
                            <li>Niños con autismo, o alguna otra discapacidad.</li>
                            <li>Personas con alzheimer.</li>
                            <li>Mujeres y niñas.</li>
                            <li>Personas con enfermedades crónicas.</li>
                            <li>Personas de la tercera edad.</li>
                            <li>Personas que padezcan algún tipo de enfermedad mental.</li>
                        </ul>
                    </section>
                </section>
                <Image />

            </section>
            <section className="mb-5 grid md:grid-cols-2">
                <section>
                    <h2 className="title_h2">Situacion en Mexico</h2>
                    <p className="content_p">
                        Del 1 de Enero al 28 de Febrero del
                        2023 se han registrado 1938
                        personas desaparecidas y no
                        localizadas. Según investigaciones,
                        el promedio de desapariciones en
                        México son 14 personas al día.
                    </p>
                </section>
                <Image />
            </section>
            <section className="mb-5">
                <h2 className="title_h2">Casos de Desaparecidos en México</h2>
                //Implementar Casos de Imagenes en Mexico
                <article className="grid justify-center sm:grid-cols-2 sm:justify-items-center md:grid-cols-3 gap-y-4">

                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(cardInfo =>
                            <section className="w-[275px] min-h-[325px] sm:w-[250px] sm:min-h-[400px] md:w-[200px] md:min-h-[300px] bg-slate-200 ">
                                {/* Imagen */}
                                <section className="w-full h-36 sm:h-32 md:h-24 mb-2 bg-slate-600"></section>
                                <section className="px-4 mb-2">
                                    {/* Resumen*/}
                                    <p className="sm:text-sm md:text-xs mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas cumque exercitationem non ducimus officia placeat dolorum quasi? Officia fugit porro tenetur laborum natus tempore distinctio facere iure eos ea!</p>
                                    {/* Link del caso */}
                                    <a href="https://google.com" target="_blank" className="text-blue-600 underline">Ver mas</a>
                                </section>
                            </section>
                        )
                    }
                </article>
            </section>
        </main>
    )
}

export default Propuesta;