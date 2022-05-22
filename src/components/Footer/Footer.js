
import '../Footer/footer.scss'

const Footer = () => {




  return (

    <div className="footer">
        <div className="footer__logo">
            <h2>Cine Home</h2>
        </div>
        <div className="footer__links">
            <h3><span className="material-symbols-outlined">
            support_agent
            </span>TEL: 0800 333 3398</h3>
            <a href='#'>Dept Legales - </a><a href='#'>Ventas coorporativas - </a><a href='#'>Informacion General</a>
            <h4>Sitio desarrollado por : <span className='nombre_desarrollo'>Martin Setaro &copy;</span></h4>
          </div>
    </div>
  )
}

export default Footer