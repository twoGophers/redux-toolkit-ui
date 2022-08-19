import React from 'react'

// Вывод информации который хранитс в сторе
import { useSelector } from 'react-redux';

const FirstName = () => {

    const name = useSelector((state) => state.user.firstName);

    return <div className='font-bold'>{name}</div>
}

export default FirstName
