import { useSelector } from "react-redux";
import { MTodoItem } from "./todoItem";
import { motion } from 'framer-motion';
import { textAnimation, listAnimation } from "../animation/animationList";
import { useEffect, useRef } from "react";

function TodoList() {

    const todo = useSelector(state => state.todo.todos);
    const text = useSelector(state => state.todo.text)
    const compliments = ['You have been productive today!', 'Nice work!', 'You did well!',
        'You have successfully completed all your tasks!', 'Now You can have a rest!']

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
    }); // помогает обозначить первый рендер и далее задать какую либо проверку как сделано ниже в анимации. 


    return (
        <div className="ul-div">
            <ul className="mt-3 p-0 mx-auto">
                {todo.map((item, index) =>
                (<MTodoItem
                    initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
                    custom={index + 1}
                    animate={firstRender.current ? 'firstRender' : 'nextRenders'}
                    variants={listAnimation}
                    key={item.id} text={item.text} id={item.id} checked={item.checked} />))}
            </ul>
            {todo.every(item => item.checked === true) === true && todo.length !== 0 && text === '' &&
                <motion.h2 initial="hidden"
                    whileInView="visible" variants={textAnimation} className="mt-5 text-center">{compliments[Math.floor(Math.random() * compliments.length)]}</motion.h2>}
        </div>
    )
}

export default TodoList;
