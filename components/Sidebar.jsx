'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import UserCard from './UserCard'
import { MdDashboard } from 'react-icons/md'

const Sidebar = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser()
      setUser(data)
    }

    getUser()
  }, [])

  const fetchUser = async () => {
    const response = await fetch('http://localhost:5000/user')
    const data = await response.json()

    return data
  }

  return (
    <aside className='w-full max-w-sm space-y-8 p-8'>
      <div>Logo</div>
      {user.map((item, id) => (
        <UserCard
          key={id}
          username={item.name}
          email={item.email}
        />
      ))}
      <hr />
      <Link
        href='/'
        className='w-full flex items-center gap-4 p-4 rounded-lg font-bold text-xl text-sky-500 hover:bg-slate-100'>
        <MdDashboard />
        Dashboard
      </Link>
    </aside>
  )
}

export default Sidebar
