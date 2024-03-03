import React from 'react'

const ContactCard = ({id , Icons ,Content ,LinkName , Link}) => {
  return (
    <div className='ContactCards' key={id}>
        <div className='ContactIcons'>{Icons}</div>
        <div className='Content'>{Content}</div>
        <a href={Link} target= {Link == '#' ? '_self':'blank'} className='ContactLink'>{LinkName}</a>
    </div>
  )
}

export default ContactCard