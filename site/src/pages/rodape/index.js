import './index.scss'




export default function () {


return(
    <footer>

            <div className='footer-content'>
                <div className='footer-contacts'>
                    

                    <div className='social-midia'>

                        <a href='#' className='footer-link' id='facebook'>
                            <li class="<FaFacebook/>">
                            </li>
                        </a>

                        <a href='https://www.instagram.com/_therunnerburguers/' className='footer-link' id='instagram'>
                            <li class="fa-brands fa-facebook-f">
                            </li>
                        </a>

                        <a href='#' className='footer-link' id='whatsapp'>
                            <li class="fa-brands fa-whatsapp">
                            </li>
                        </a>

                    </div>
                </div>
                <ul className="footer-list">
                    <li>
                        <h3>Home</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Status Do Pedido</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Carrinho</a>
                    </li>

                    <li>
                        <a href="http://localhost:3000/contato" className="footer-link">Fale conosco</a>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Combos</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Bebidas</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Batatas</a>
                    </li>
                </ul>

                <div id="footer_subscribe">
                    <h3>Subscribe</h3>

                    <p>
                        The Runners Burguers, Mais que uma hamburgueria, uma Correria
                    </p>



                </div>
            </div>

            <div id='footer_copyright'>
                &copy; 2023 all rigtht reservt
            </div>

        </footer>

)


    
}