import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const UserCard = ({username, email}) => {
  return (
    <div className='flex bg-slate-100 items-center gap-4 pl-4 pr-20 py-4 rounded-lg'>
      <FaUserCircle size={42} className='h-full w-auto text-sky-500' />
      <div>
        <p className='font-semibold'>{username}</p>
        <p className='font-light text-sm'>{email}</p>
      </div>
    </div>
  )
}

export default UserCard