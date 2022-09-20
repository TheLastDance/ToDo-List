import './App.css';
import TodoForm from './components/todoForm'
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from './store/todoSlice';
import TodoList from './components/todoList';
import Footer from './components/footer';
import Statistics from './components/statistics';


function App() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.todo.text);

  function addTodo() {
    dispatch(todoActions.addTodo());
  }


  return (
    <div className="App">
      <TodoForm value={text} handleAction={addTodo} />
      <Statistics />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
