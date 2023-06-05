const Formulario = () =>{
    return(
        <main>
            <h1>FORMULARIO DE PÄGO</h1>
            <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                               Nombre:
                            </label>
                            <Field className={styleInput} type="nombre" placeholder="Carlos Perez" id="nombrepago" name="nombrepago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Calle:
                            </label>
                            <Field className={styleInput} type="direccion" placeholder="Benito Juarez" id="direccionpago" name="direccionpago" />

        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Colonia:
                            </label>
                            <Field className={styleInput} type="direccion2" placeholder="Tamaulipas" id="coloniapago" name="coloniapago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Numero de casa:
                            </label>
                            <Field className={styleInput} type="numero" placeholder="8331248654" id="numcasapago" name="numcasapago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                               Codigo postal:
                            </label>
                            <Field className={styleInput} type="numerocodigo" placeholder="89450" id="Codigopostalpago" name="Codigopostalpago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                               Numero de telefono:
                            </label>
                            <Field className={styleInput} type="numerotelefono" placeholder="8339875748" id="numerotelpago" name="numerotelpago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Correo Electronico:
                            </label>
                            <Field className={styleInput} type="correo" placeholder="charly@gmail.com" id="gmail" name="gmail" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Numero de tarjeta:
                            </label>
                            <Field className={styleInput} type="numetarj" placeholder="9846274920127374" id="numtarjertapago" name="numtarjetapago" />
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                CVV:
                            </label>
        </section>
        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label htmlFor="tajetapago" className={stylesLabel}>
                                Tarjeta a usar
                            </label>
                            <Field name="tarjetapagar" as="select" >
                                <option value=""></option>
                                <option value="mexico">VISA</option>
                                <option value="españa">MasterCard</option>
                                <option value="argentina">paypal</option>
                            </Field>
                            </section>
        </main>
    )
}
export default Formulario;