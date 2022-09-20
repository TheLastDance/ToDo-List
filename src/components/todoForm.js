import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todoSlice';

const TodoForm = ({ value, handleAction }) => {

    const dispatch = useDispatch();

    return (
        <div className='label'>
            <div><input className='todoForm-input' maxLength="100" placeholder="new todo" value={value}
                onKeyDown={(e) => dispatch(todoActions.keyUp(e))}
                onChange={(e) => dispatch(todoActions.setInput(e.target.value))} /></div>
            <div><button type='submit' onClick={handleAction}>Add todo</button></div>
        </div>
    )
}

export default TodoForm;