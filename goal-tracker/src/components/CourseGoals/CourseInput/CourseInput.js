import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import './CourseInput.css';
// import styled from 'styled-components';
// const FormControl = styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid?'red ':'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid?'red':'#ccc')};
//   background: ${props => (props.invalid?'#ffd7d7':'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// & p{
//   font-size: 0.6rem;
//   color: #d40808;
// }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]= useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    else{
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setEnteredValue('');
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* <FormControl invalid={!isValid}> */}
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />

      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
