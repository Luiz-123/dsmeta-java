import logo from '../../assets/img/logo.png'
import './styles.css'

function Header() {
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1></h1>                
            </div>
        </header>
    )
}

export default Header