import { Link } from 'react-router-dom'
import './Header.styles.scss'

const Header = () => {
    return (
        <nav>
            <div className= 'header'>
                <span className = 'header__link'><Link to='/'>Home</Link></span>
                <span className = 'header__link'><Link to='/reserve'>Reserve</Link></span>
            </div>
        </nav>
    )
}

export default Header