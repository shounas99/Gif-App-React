import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('')

    const onInputChanged = ( event ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        /*Validaciones , si viene vacio que no ejecute la funcion*/
        if( inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() )
        /*Limpiar*/
        setInputValue('')
    }

    return (
        <form onSubmit={ ( event ) => onSubmit( event )}>
            <input 
                type="text"
                placeholder="Buscador de gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
