'use client'

import { useState, useEffect } from 'react'
import { HiOutlineCash } from 'react-icons/hi'

const MyCard = () => {
  const [user, setUser] = useState([])
  const [transcation, setTransaction] = useState([])

  useEffect(() => {
    const getTransaction = async () => {
      const data = await fetchTransaction()
      setTransaction(data)
    }
    const getUser = async () => {
      const data = await fetchUser()
      setUser(data)
    }

    getTransaction()
    getUser()
  }, [])

  const fetchTransaction = async () => {
    const response = await fetch('http://localhost:5000/transaction_history')
    const data = await response.json()

    return data
  }

  const fetchUser = async () => {
    const response = await fetch('http://localhost:5000/user')
    const data = await response.json()

    return data
  }

  return (
    <div className='h-full bg-white rounded-xl space-y-8 p-8'>
      <div className='space-y-8'>
        <h1 className='text-2xl font-semibold'>My Card</h1>
        {user.map((item, id) => (
          <a
            href='#'
            className='block w-full max-w-xl bg-sky-500 p-8 rounded-lg text-white space-y-20'>
            <div className='w-full flex justify-between items-center'>
              <div>
                <p>Card Name</p>
                <p className='font-semibold text-2xl'>{item.name}</p>
              </div>
              <HiOutlineCash size={32} />
            </div>
            <div className='text-right space-y-4'>
              <p className='font-semibold text-3xl'>{item.card_number}</p>
              <p className='font-light'>{item.expiry_date} - {item.cvc}</p>
            </div>
          </a>
        ))}
        <div className='flex gap-4'>
          <div className='h-2 w-8 bg-sky-500 rounded-full'></div>
          <div className='h-2 w-2 bg-slate-200 rounded-full'></div>
          <div className='h-2 w-2 bg-slate-200 rounded-full'></div>
        </div>
      </div>
      <hr />
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold'>Transaction History</h1>
          <p className='text-sky-500'>See all</p>
        </div>
        <p className='font-light'>13 April 2022</p>
        {transcation.map((item, id) => (
          <div
            key={id}
            className='flex justify-between items-center bg-slate-100 rounded-lg p-4'>
            <div className='space-y-2'>
              <p className='text-xl font-semibold'>{item.name}</p>
              <p className='font-light'>{item.date}</p>
            </div>
            <p className='text-2xl font-semibold'>${item.nominal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCard
