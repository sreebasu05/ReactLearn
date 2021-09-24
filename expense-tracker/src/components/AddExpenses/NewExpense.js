import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        closeForm();
    }
    const showForm = () => {
        setFilter(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeForm}/>)
    }
    const closeForm = () => {
        setFilter(<button onClick={showForm}>Add Expense</button>)
    }
    const [filter,setFilter] = useState(<button onClick={showForm} >Add Expense</button>);
    return (
        <div className="new-expense">
            {filter}
        </div>
    )
}

export default NewExpense;