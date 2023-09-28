import React, { useState } from 'react'
import data from './data'
import Title from './components/Title'
import BirthdayList from './components/birthdayList'



function App() {

    const [birthdays, setBirthday] = useState(data)

    const deleteBirthday = (id) => {
        setBirthday((prev) => {
            return prev.filter((item) => {
                return item.id !== id
            })
        })
    }


    return (
        <div className='header'>
            <Title birthdaysCount={birthdays.length} />
            <BirthdayList birthdays={birthdays} deleteBirthday={deleteBirthday} />
            {birthdays.length > 0 && <button className='deleteBtn' onClick={() => setBirthday([])}>clear All</button>}
            {birthdays.length === 0 && <button className='resetBtn' onClick={() => setBirthday(data)}>reset</button>}
        </div>
    )
}

export default App