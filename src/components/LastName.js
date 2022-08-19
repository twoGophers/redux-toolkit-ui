import React from 'react';

// Вывод информации который хранитс в сторе
import { useSelector } from 'react-redux';

const LastName = () => {

    const lastName = useSelector((state) => state.user.lastName);

    return <div className='font-bold'>{ lastName }</div>
}

export default LastName
