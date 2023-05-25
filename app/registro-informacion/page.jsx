const RegistroInformacionPersonal = () => {
    return(
        <main className="content">
            <section>
            <h1 className="title_h1">Registra tu Informacion</h1>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta repellendus nostrum id voluptas consequuntur perspiciatis maiores harum hic necessitatibus, recusandae quasi unde dicta eligendi consequatur, architecto odio pariatur a!</p>
            </section>
            <section>
                <h3 className="title_h3 uppercase">codigo qr</h3>
                <div className="w-[200px] h-[200px] bg-slate-500"></div>
                <p className="content_p_small">Descargar</p>
            </section>
            <form>
                <h2>Formulario de Datos</h2>
                <section>
                    <span>
                        Nombre del portador: 
                        <input className=" text-[--primary-color] border-solid outline rounded border-0" type="text" name="" id="" />
                    </span>
                </section>
            </form>
        </main>
    )
}
export default RegistroInformacionPersonal;