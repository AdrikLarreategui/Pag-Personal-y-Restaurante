import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.styles.scss'

const Contact = () => {
    const [ data, setData] = useState ({
        name:'',
        nickname:'',
        email:''
    })

    const [ message, setMessage ] = useState("")
    const [ btnDisabled, setBtnDisabled ] = useState(true)
    let navigate = useNavigate()

    const handleInputChange = (event) => {
        if(data.name.length <4 || data.nickname.length <5) {
            setMessage('Name must be at least four characters')
            setMessage('Nickname must be at least five characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        localStorage.setItem('user', JSON.stringify({
            name: data.name,
            nickname:data.nickname,
            email:data.email
    }))
        console.log({ message: 'data succesfully stored' }, { name:data.name }, { nickname:data.nickname }, { email:data.email })
        setTimeout(() => { navigate('/') }, 1000)
    }

    return(
        <>
            <h2>Contact</h2>
            <form className='form' onSubmit= { handleSubmit }>
                <input
                type = "text"
                placeholder="name"
                onChange={ handleInputChange }
                name = "name"
                value = { data.name }
                />
                <input 
                type = "text"
                placeholder = "nickname"
                onChange = { handleInputChange }
                name = "nickname"
                value = { data.nickname}
                />
                <input 
                type = "email"
                placeholder="email"
                onChange={ handleInputChange }
                name = "email"
                value = { data.email }
                /> 
                <button type = "submit" disabled= { btnDisabled }>Send</button> 
                <p> {message}</p>
            </form>
        </>
    )
}

export default Contact




