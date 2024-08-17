import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [input,setInput] = useState('')
    const [amount,setAmount] = useState('')
    const [expenses,seteExpenses] = useState([])

    const addExpense = () => {
        if(!input || !amount) return;

        const newExpense ={
            id : expenses.length +1,
            title : input,
            amount : amount
        };
        seteExpenses([...expenses,newExpense])
        setInput('')
        setAmount('')
    }
    const deleteExpense = (id) => {
        seteExpenses(expenses.filter((expenses) =>expenses.id !==id))
    }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div className='input'>
        <input type='text '
        placeholder='Expense'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <div>
        <input type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        </div>
        <button className='btn' onClick={addExpense}>Add Expense</button>
      </div> 
      <div>
        <h2>Added Expenses are as follows:</h2>
      </div>
       <ul className='expense-list'>
    {
        expenses.map((expense)=>(
            <li key={expense.id}>
                <span>{expense.title}</span>
                <span>{expense.amount}</span>
            <button className='btn-1' onClick={()=>deleteExpense(expense.id)}>Delete</button>
            </li>
        ))
    }
       </ul>
    </div>
  )
}

export default ExpenseTracker
