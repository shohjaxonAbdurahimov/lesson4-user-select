import React from 'react'

function birthdayList({ birthdays, deleteBirthday }) {
    console.log(birthdays)
    return (
        <ul className='list_item'>
            {birthdays.map((item) => {
                return (
                    <li key={item.id}>
                        <div className='left'>
                            <img src={item.image} width={75} height={75} />
                            <div className='name_list'>
                                <h2>{item.name}</h2>
                                <p>{item.age} years old</p>
                            </div>
                        </div>
                        <button className='deleteOneBtn' onClick={() => deleteBirthday(item.id)} >delete </button>
                    </li>
                )
            })}

        </ul>
    )
}

export default birthdayList