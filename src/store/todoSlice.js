import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        text: '',
        counter: 0,
    },
    reducers: {
        setInput(state, action) {
            state.text = action.payload;
        },
        addTodo(state) {

            function ids() {
                let a = state.todos.length + 1;
                while (state.todos.map(item => item.id).includes(a) === true) {
                    a++
                }
                return a;
            }

            state.text !== '' && state.todos.push({
                id: ids(),
                text: state.text,
                checked: false
            });
            state.text = '';
        },
        keyUp(state, action) {
            if (action.payload.key === 'Enter') {

                function ids() {
                    let a = state.todos.length + 1;
                    while (state.todos.map(item => item.id).includes(a) === true) {
                        a++
                    }
                    return a;
                }

                state.text !== '' && state.todos.push({
                    id: ids(),
                    text: state.text,
                    checked: false
                });
                state.text = '';
            }
        },
        toggleCheckbox(state, action) {
            const toggleId = state.todos.find(item => item.id === action.payload.id);
            toggleId.checked = !toggleId.checked;
        },
        deleteTodo(state, action) {
            const toggleId = state.todos.find(item => item.id === action.payload.id);
            const index = state.todos.indexOf(toggleId, 0);
            state.todos.splice(index, 1)
        },
        counterReducer(state) {
            state.counter = state.todos.length;
        }
    },
});


export const todoActions = todoSlice.actions;
export default todoSlice;
