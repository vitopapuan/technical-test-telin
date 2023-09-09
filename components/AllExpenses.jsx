'use client'

import React, { useEffect, useState } from 'react'
import { HiOutlineCash } from 'react-icons/hi'
import { FaChevronRight } from 'react-icons/fa'


const AllExpenses =  () => {
  const [expenses, setExpenses] = useState([])
  
  useEffect(() => {
    const getExpenses = async () => {
      const data = await fetchExpenses()
      setExpenses(data)
    }

    getExpenses()
  }, [])

  const fetchExpenses = async () => {
    const response = await fetch('http://localhost:5000/expenses')
    const data = await response.json()
  
    return data
  }

  return (
    <div className='bg-white rounded-xl space-y-4 p-8'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>All Expenses</h1>
        <div className="dropdown inline-block relative">
          <button className="font-semibold py-2 px-4 border border-slate-200 rounded inline-flex items-center">
            <span className="mr-1">Filter</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden pt-1">
            <li className=""><a className="rounded-t bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">Weekly</a></li>
            <li className=""><a className="bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">Monthly</a></li>
            <li className=""><a className="rounded-b bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">Yearly</a></li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {expenses.map((item, id) => (
        <a key={id} href='#' className='bg-sky-400 rounded-lg border space-y-20 p-6'>
          <div className='flex justify-between items-center'>
            <div className='rounded-full p-4 bg-white/20'>
              <HiOutlineCash size={32} className='text-white' />
            </div>
            <FaChevronRight size={32} className='text-white' />
          </div>
          <div className='space-y-2'>
            <p className='font-semibold text-white'>{item.name}</p>
            <p className='font-light text-white'>{item.date}</p>
            <p className='font-semibold text-2xl text-white'>${item.nominal}</p>
          </div>
        </a>
        ))}
      </div>
    </div>
  )
}

export default AllExpenses