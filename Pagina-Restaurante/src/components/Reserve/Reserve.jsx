import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Reserve.styles.scss'

const Reserve = () => {
    const [ data, setData ] = useState({
        name: '',
        email: '',
        reservationDate: ''
    })
    let navigate = useNavigate()

    const handleInputChange = (event) => {
        setData({...data, [ event.target.name ]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('reserve', JSON.stringify({
            name: data.name,
            email: data.email,
            reservationDate: data.reservationDate
        }))
        console.log({ message: 'data succesfully stored: '}, 
            {name: data.name,
            email: data.email,
            reservationDate: data.reservationDate})
        setTimeout(() => { navigate('/') }, 1000)
    }

    return(
        <>
        <form className='form' onSubmit={handleSubmit}>
            <input 
            className='form__input'
            placeholder='name'
            type= 'text'
            name='name'
            value={data.name}
            onChange={handleInputChange}
            />
            <input 
            className='form__input'
            placeholder='email'
            type='email'
            name='email'
            value={data.email}
            onChange={handleInputChange}
            />
            <input 
            className='form__input'
            type='date'
            name='reservationDate'
            value={data.reservationDate}
            onChange={handleInputChange}
            />
            <button type='submit'>Send</button>
        </form>
        </>
    )
}

export default Reserve