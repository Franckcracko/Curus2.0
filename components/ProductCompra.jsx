"use client"
import { Field, Form, Formik } from "formik";
import Link from "next/link";

const ProductoCompra = () => {
    return (
        <article className="py-5 md:py-7">
            <section className="flex flex-col md:flex-row">
                <section className="flex-none px-4 sm:px-10 md:px-0 md:w-52 md:relative">
         
                    <img src='/images/pulsera_img_product-page.png' alt="" className="md:absolute inset-0 w-full h-full object-cover rounded-sm" loading="lazy" />
                </section>
                <section className="flex-auto px-2 sm:p-6 md:p-6">
                    <section className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            Pulsera de seguridad CURUS
                        </h1>
                        <p className="flex-auto text-lg font-medium text-slate-500">
                            $2499.00
                        </p>
                        <p className="text-xs leading-6 font-medium uppercase text-slate-500">
                            En existencia
                        </p>
                    </section>
                    <section className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <Formik 
                        initialValues={{
                            size: '',
                          }}
                        >
                            <Form className="space-x-1 flex text-sm font-medium">
                                <p>TALLA PARA MUJERES </p>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="xs"  />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        XS
                                    </section>
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="s" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        S
                                    </section>
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="m" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        M
                                    </section>
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="l" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        L
                                    </section>
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="xl" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        XL
                                    </section>
                                  
                                </label>
                                <p> TALLA PARA HOMBRES</p>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="s" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        S
                                    </section>
                                  
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="m" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        M
                                    </section>
                                  
                                </label>
                                <label>
                                    <Field className="sr-only peer" name="size" type="radio" value="l" />
                                    <section className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                        L
                                    </section>
                                  
                                </label>
                              
                            </Form>
                        </Formik>
                    </section>
                    <section className="flex space-x-4 mb-5 text-sm font-medium">
                        <section className="flex-auto flex space-x-4 pr-4">
                            <Link href='/registro-informacion' className="flex-none w-1/2 h-12 uppercase button_primary ">
                                Compra Ya
                            </Link>
                        </section>
                    </section>
                    <p className="text-sm text-slate-500">
                        Pulsera de seguridad, facil de usar e impreciptible.
                        Cuenta con bateria de larga duración de 24 horas y
                        recargable. Ante cualquier situación de peligro
                        podrás presionar el boton de pánico para que de esta
                        manera se emita un ruido lo bastante fuerte para
                        alertas a las personas a tu alrededor.
                    </p>
                </section>
            </section>
            <section className=" px-2 md:px-20">
                <h3 className="title_h3">Propiedades</h3>
                <ul>
                    <ll>  Buzzer Ky-006 Zumbador Pasivo Módulo    </ll>
                    <li>    Cables jumpers Dupont proyecto Arduino    </li>
                    <li>    GPS-Proteus PCB CURUS    </li>
                    <li>    Adafruit Ultimate GPS Breakout - 66 chanel w/10 Hz Updates     </li>
                    <li>     Adafruit Bluefruit LE UART Friend . Bluetooth Low Energy (BLE)   </li>
                </ul>
            </section>
        </article >

    )
}
export default ProductoCompra;