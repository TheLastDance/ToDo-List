import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { motion } from 'framer-motion';
import { statisticsLeft, statisticsRight } from "../animation/animationList";



function Statistics() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.todo.counter)
    const todo = useSelector(state => state.todo.todos);

    useEffect(() => {
        dispatch(todoActions.counterReducer())
    }, [todo, dispatch])


    return (
        <div className='plans-div'>
            <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={statisticsLeft} className="my-4 p-2 bg-dark">Plans: {counter}</motion.h1>
            <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={statisticsRight} className='my-4 p-2 bg-dark'>Completed: {todo.filter(item => item.checked).length} </motion.h1>
        </div>
    )
}

export default Statistics;