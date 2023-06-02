"use client"

const { Formik, Form, Field } = require("formik")
import * as Yup from 'yup';
import { toDataURL } from 'qrcode';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormularioInfo = ({ setData, setLink }) => {
    const stylesLabel = 'sm:min-w-[50px] md:min-w-[70px] flex-none text-sm text-[rgba(0,0,0,0.5)] md:text-slate-200 md:opacity-100 focus-visible:hidden'
    const uuid = uuidv4();
    const link = `https://curus.org/datos_personales/${uuid}`;
    const styleInput = `md:placeholder:text-transparent shadow md:shadow-sm rounded flex-1 md:flex-auto md:ml-2 p-3 md:p-1 border border-solid border-black border-opacity-10 `;
    const [url, setUrl] = useState('');
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es obligatorio'),
        lastName: Yup.string().required('El apellido es obligatorio'),
        age: Yup.number()
            .typeError('La edad debe ser un número')
            .integer('La edad debe ser un número entero')
            .min(18, 'Debes ser mayor de edad')
            .required('La edad es obligatoria'),
        birthday: Yup.date()
            .typeError('La fecha de nacimiento debe ser una fecha válida')
            .max(new Date(), 'La fecha de nacimiento no puede ser en el futuro')
            .required('La fecha de nacimiento es obligatoria'),
        blood: Yup.string().required('El tipo de sangre es obligatorio'),
        email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
        phone: Yup.string().required('El número de teléfono es obligatorio'),
        country: Yup.string().required('El país es obligatorio'),
        state: Yup.string().required('El estado es obligatorio'),
        address: Yup.string().required('La dirección es obligatoria'),
    });
    if (url === '') {
        toDataURL(link, function (err, url) {
            if (url) setUrl(url)
        })
    }
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
            validationSchema={validationSchema}

            onSubmit={async (valores, { resetForm }) => {
                const data = { ...valores, id: uuid }
                const response = await fetch("/api/nodemailer", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }

                })
                if (response.ok) {
                    setData(true);
                    setLink(link)
                }
                if (!response.ok) {
                    console.log("error");
                }
                
            }}
        >
            {({ errors, touched }) => (
                <Form className="md:shadow-lg md:rounded md:px-5 md:my-10  md:row-span-2 md:bg-[--primary-color]">

                    <h2 className="text-start md:text-center title_h2 md:text-white">Formulario de Datos</h2>
                    <section className="grid gap-y-3 w-full  px-5 sm:px-10 md:px-0 md:my-10">

                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Nombre:
                            </label>
                            <Field className={styleInput} type="text" placeholder="Brian Leonardo" id="name" name="name" />
                        
                            {errors.name && touched.name && (
                                <p className="text-red-500 text-xs italic">{errors.name}</p>
                            )}
                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Apellidos:
                            </label>
                            <Field className={styleInput} type="text" placeholder="Martínez Cobos" id="lastName" name="lastName" />
                            {errors.lastName && touched.lastName && (
                                <p className="text-red-500 text-xs italic">{errors.lastName}</p>
                            )}
                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Edad:
                            </label>
                            <Field className={styleInput} type="number" placeholder="20" id="age" name="age" />
                            {errors.age && touched.age && (
                                <p className="text-red-500 text-xs italic">{errors.age}</p>
                            )}
                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Cumpleaños:
                            </label>
                            <Field className={styleInput} type="date" id="birthday" name="birthday" />
                            {errors.birthday && touched.birthday && (
                                <p className="text-red-500 text-xs italic">{errors.birthday}</p>
                            )}
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
                            {errors.blood && touched.blood && (
                                <p className="text-red-500 text-xs italic">{errors.blood}</p>
                            )}
                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Correo:
                            </label>
                            <Field className={styleInput} type="email" placeholder="unknow@gmail.com" id="email" name="email" />
                            {errors.email && touched.email && (
                                <p className="text-red-500 text-xs italic">{errors.email}</p>
                            )}

                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Telefono:
                            </label>
                            <Field className={styleInput} type="tel" id="phone" name="phone" />
                            {errors.phone && touched.phone && (
                                <p className="text-red-500 text-xs italic">{errors.phone}</p>
                            )}

                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label htmlFor="country" className={stylesLabel}>
                                País:
                            </label>
                            <Field name="country" as="select" >
                                <option value=""></option>
                                <option value="mexico">Mexico</option>
                                <option value="españa">España</option>
                                <option value="argentina">Argentina</option>
                            </Field>
                            {errors.country && touched.country && (
                                <p className="text-red-500 text-xs italic">{errors.country}</p>
                            )}

                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label htmlFor="state" className={stylesLabel}>
                                Estado:
                            </label>
                            <Field name="state" as="select" >
                                <option value=""></option>
                                <option value="tamaulipas">Tamaulipas</option>
                                <option value="puebla">Puebla</option>
                                <option value="chihuahua">Chihuahua</option>
                            </Field>
                            {errors.state && touched.state && (
                                <p className="text-red-500 text-xs italic">{errors.state}</p>
                            )}

                        </section>
                        <section className="flex gap-y-2 sm:gap-y-0 md:gap-y-0 sm:items-center sm:gap-x-2 md:items-center flex-col sm:flex-row  md:flex-row">
                            <label className={stylesLabel}>
                                Dirección:
                            </label>
                            <Field className={styleInput} type="text" name="address" />
                            {errors.address && touched.address && (
                                <p className="text-red-500 text-xs italic">{errors.address}</p>
                            )}

                        </section>
                    </section>
                    <section className="flex justify-center my-7 md:my-0 md:mb-7 md:justify-end">
                        <button type="submit" className="w-full mx-28 text-center py-3 sm:py-2 md:py-2 md:mx-0 sm:mx-0 sm:w-auto md:w-auto sm:px-10 md:px-10 p-2 uppercase text-white bg-[--footer-bg] hover:bg-[--border-color] rounded hover:shadow">enviar</button>
                    </section>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioInfo