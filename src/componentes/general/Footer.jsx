const Footer = () => {
    return (
        <footer id="footer" className="bg-white mt-4 text-xs h-56">
            <div className="flex flex-col px-8 md:px-px-16 lg:px-24">
                <a href="index.html" className="d-flex align-items-center">
                    <span className="text-2xl font-semibold text-[#5f687b]">PRISMA</span>
                </a>
                <div className="footer-contact pt-3 flex flex-col gap-2.5">
                    <p>Lib. Nte. Ote. s/n. Col.Paso Limón.</p>
                    <p>Tuxtla Gutiérrez, Chiapas.</p>
                    <p className="mt-3"><strong>Phone:</strong> <span>+52 961 - 614 - 0339</span></p>
                    <p><strong>Email:</strong> <span>contacto@cetis138.edu.mx</span></p>
                </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
            </div>

            <div className="col-lg-2 col-md-3 footer-links">

            </div>

            <div className="col-lg-4 col-md-12">
            </div>
            <div className="text-center my-8">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">PRISMA</strong> <span>Todos los derechos reservados</span></p>
                <div className="credits">Desarrollado por Javier y Alex</div>
            </div>

        </footer>
    );
}

export default Footer;