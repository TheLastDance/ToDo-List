import { useDispatch } from "react-redux";
import { todoActions } from '../store/todoSlice';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';


const TodoItem = forwardRef(({ checked, id, text }, ref) => { //пропсы обязательно писать в обьекте (!!!)
    const dispatch = useDispatch();

    function toggleCheckbox() {
        dispatch(todoActions.toggleCheckbox({ id }))
    }

    function deleteTodo() {
        dispatch(todoActions.deleteTodo({ id }))
    }


    return (
        <li ref={ref} className="mt-2 text-center">
            <input className="form-check-input mt-0 col-2 ms-2" aria-label="Checkbox for following text input" type='checkbox' checked={checked} onChange={toggleCheckbox} ></input>
            <p className="m-0">{text}</p>
            <span className="p-0 me-2" onClick={deleteTodo}>&times;</span>
        </li>
    )
})


export default TodoItem;
export const MTodoItem = motion(TodoItem);