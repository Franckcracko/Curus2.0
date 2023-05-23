const Header = ({children}) =>{
    return(
        <header className="bg-purple-500 flex justify-between items-center px-4 text-white min-h-[64px]">
            {/* Implementar icono  */}
            <span>CURUS</span>
            {children}
        </header>
    )

}


export default Header;