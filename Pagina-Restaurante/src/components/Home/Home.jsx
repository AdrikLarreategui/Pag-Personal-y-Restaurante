import './Home.styles.scss'

const Home = () => {
    return (
        <div className='Home'>
            <h1>Asador Full Stack</h1>
            <h2>Carta Html</h2>
            <>
            <p>Alubias con sacramentos Javascript <span className='home__price'>16€</span></p>
            <p>Arroz con cosas de React <span className='home__price'>13€</span></p>
            <p>Chuleta de vaca Sequelize<span className='home__price'>30€</span></p>
            <p>Ventresca de bonito de Docker<span className='home__price'>25€</span></p>
            <p>Pastel decorado con CSS <span className='home__price'>3€</span></p>
            </>
        </div>
    )
}

export default Home