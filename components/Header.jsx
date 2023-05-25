const Header = ({children}) =>{
    return(
        <header className= "z-50 h-12 bg-purple-700 flex justify-between items-center px-4 text-white">
            {/* Implementar icono  */}
            <section className="flex justify-center items-center">
                <span>CURUS</span>
            </section>
            {children}
        </header>
    )

}


export default Header;