'use client'

const { Formik, Form, Field } = require("formik")

const FormularioInfo = () => {
    const styleInput = 'md:placeholder:text-transparent shadow md:shadow-sm rounded flex-1 md:flex-auto md:ml-2 p-3 md:p-1 border border-solid border-black border-opacity-10';
    const stylesLabel = 'sm:min-w-[50px] md:min-w-[70px] flex-none text-sm text-[rgba(0,0,0,0.5)] md:text-slate-200 md:opacity-100 focus-visible:hidden'
    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                age: '',
                birthday: '',
                blood: '',
                email: '',
                phone: '',
                country: '',
                state: '',
                address: ''
            }}
            validate={values => {

            }}
            onSubmit={(valores, { resetForm }) => {
                resetForm();
                console.log(valores);
            }}
        >
            {/* 
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Requerido
                        </p>
            */}
            <Form className="md:shadow-lg md:rounded md:px-5 md:my-10  md:row-span-2 md:bg-[--primary-color]">
                <h2 className="text-start md:text-center title_h2 md:text-white">Formulario de Datos</h2>
                <section className="grid gap-y-3 w-full  px-5 sm:px-10 md:px-0 md:my-10">

                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Nombre:
                        </label>
                        <Field className={styleInput} type="text" placeholder="Brian Leonardo" id="name" name="name" />
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Apellidos:
                        </label>
                        <Field className={styleInput} type="text" placeholder="Martínez Cobos" id="lastName" name="lastName" />
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Edad:
                        </label>
                        <Field className={styleInput} type="number" placeholder="20" id="age" name="age" />
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Cumpleaños:
                        </label>
                        <Field className={styleInput} type="date" id="birthday" name="birthday" />
                    </section>
                    <section className="text-[rgba(0,0,0,0.5)] md:text-slate-200 flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Tipo de Sangre:
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="A+" />
                            A+
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="A-" />
                            A-
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="B+" />
                            B+
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="B-" />
                            B-
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="AB+" />
                            AB+
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="AB-" />
                            AB-
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="O+" />
                            O+
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="O-" />
                            O-
                        </label>
                        <label>
                            <Field type="radio" name="blood" value="none" />
                            No Especificar
                        </label>
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Correo:
                        </label>
                        <Field className={styleInput} type="email" placeholder="unknow@gmail.com" id="email" name="email" />
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Telefono:
                        </label>
                        <Field className={styleInput} type="tel"  id="phone" name="phone" />
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label htmlFor="country" className={stylesLabel}>
                            País:
                        </label>
                        <Field name="country" as="select" >
                            <option value="mexico">Mexico</option>
                            <option value="españa">España</option>
                            <option value="argentina">Argentina</option>
                        </Field>
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label htmlFor="state" className={stylesLabel}>
                            Estado:
                        </label>
                        <Field name="state" as="select" >
                            <option value="tamaulipas">Tamaulipas</option>
                            <option value="puebla">Puebla</option>
                            <option value="chihuahua">Chihuahua</option>
                        </Field>
                    </section>
                    <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                        <label className={stylesLabel}>
                            Dirección:
                        </label>
                        <Field className={styleInput} type="text"  name="address" />
                    </section>
                </section>
                <section className="flex justify-center sm:mt-7 md:mt-0 md:justify-end">
                    <button type="submit" className="w-full mx-28 text-center py-3 sm:py-2 md:py-2 md:mx-0 sm:mx-0 sm:w-auto md:w-auto sm:px-10 md:px-10 p-2 uppercase text-white bg-[--footer-bg] hover:bg-[--border-color] rounded hover:shadow">enviar</button>
                </section>
            </Form>
        </Formik>
    )
}
export default FormularioInfo