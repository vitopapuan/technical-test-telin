'use client'

import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import UserCard from './UserCard'

const QuickInvoice = () => {
  const [latestTransaction, setLatestTransaction] = useState([])

  useEffect(() => {
    const getLatestTransaction = async () => {
      const data = await fetchLatestTransaction()
      setLatestTransaction(data)
    }

    getLatestTransaction()
  }, [])

  const fetchLatestTransaction = async () => {
    const response = await fetch('http://localhost:5000/latest_transaction')
    const data = await response.json()

    return data
  }
  return (
    <div className='h-full bg-white rounded-xl space-y-4 p-8'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Quick Invoices</h1>
        <button className="bg-slate-200 rounded-full p-4">
          <FaPlus size={16} className='text-sky-500' />
        </button>
      </div>
      <h2 className='text-lg font-semibold'>Lastest Transaction</h2>
      <div className='flex overflow-x-auto gap-4 no-scrollbar'>
      {latestTransaction.map((item, id) => (
        <UserCard
          key={id}
          username={item.name}
          email={item.email}
        />
      ))}
      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
          <label htmlFor="" className='text-lg font-semibold'>Customer Name</label>
          <input type="text" placeholder='Type customer name' className='p-4 bg-slate-100 rounded-lg' />
          <label htmlFor="" className='text-lg font-semibold'>Item Name</label>
          <input type="text" placeholder='Type item name' className='p-4 bg-slate-100 rounded-lg' />
          <button className="p-4 rounded-lg inline-flex justify-center items-center">
            <span className="font-semibold text-sky-500">Add more details</span>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="" className='text-lg font-semibold'>Customer Email</label>
          <input type="text" placeholder='Type customer email' className='p-4 bg-slate-100 rounded-lg' />
          <label htmlFor="" className='text-lg font-semibold'>Item Name</label>
          <button className="p-4 bg-slate-100 rounded-lg inline-flex justify-between items-center">
            <span className="mr-1">USD</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <button className="bg-sky-500 p-4 rounded-lg inline-flex justify-center items-center">
            <span className="font-semibold text-white">Send Money</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickInvoice