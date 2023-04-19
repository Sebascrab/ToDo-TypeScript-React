import React, { useRef } from 'react'
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        // blur is to take the css focus off when you press enter on the input box for todo
        inputRef.current?.blur();
        }}>
        <input 
        ref={inputRef}
        value={todo}
        onChange={
            (e) => setTodo(e.target.value)
        }
        type='input' placeholder='Enter A To-Do'className='input__box' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField