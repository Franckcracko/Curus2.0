import Link from "next/link";

const ProductoCompra = () => {
    return (
        <article className="py-5 md:py-7">
            <section class="flex flex-col md:flex-row">
                <section class="flex-none px-4 sm:px-10 md:px-0 md:w-52 relative">
                    <img src="/images/hero_image.webp" alt="" class="md:absolute inset-0 w-full h-full object-cover rounded-sm" loading="lazy" />
                </section>
                <section class="flex-auto px-2 sm:p-6 md:p-6">
                    <section class="flex flex-wrap items-baseline">
                        <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            Pulsera de seguridad CURUS
                        </h1>
                        <p class="flex-auto text-lg font-medium text-slate-500">
                            $1499.00
                        </p>
                        <p class="text-xs leading-6 font-medium uppercase text-slate-500">
                            En existencia
                        </p>
                    </section>
                    <section class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <section class="space-x-1 flex text-sm font-medium">
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                                <section class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    XS
                                </section>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="s" />
                                <section class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    S
                                </section>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="m" />
                                <section class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    M
                                </section>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="l" />
                                <section class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    L
                                </section>
                            </label>
                            <label>
                                <input class="sr-only peer" name="size" type="radio" value="xl" />
                                <section class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                                    XL
                                </section>
                            </label>
                        </section>
                    </section>
                    <section class="flex space-x-4 mb-5 text-sm font-medium">
                        <section class="flex-auto flex space-x-4 pr-4">
                            <Link href='/registro-informacion' class="flex-none w-1/2 h-12 uppercase button_primary ">
                                    Compra Ya
                            </Link>
                        </section>
                    </section>
                    <p class="text-sm text-slate-500">
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
                </ul>
            </section>
        </article >

    )
}
export default ProductoCompra;