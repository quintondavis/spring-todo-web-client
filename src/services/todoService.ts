import axios from 'axios';

import Todo from "./Todo";

const base_url = 'https://dsldjdfljsdf-spring-todo.herokuapp.com/api/todos'

export let getTodos = async () => {
    try{
    let response = await axios.get(base_url);
    console.log("Response", response);
    console.log("Data", response.data);
    return response.data;
    }
    catch(error) {
        return error;
    }

};
export const getTodoById = (is: number) => {

}
export const postTodo = (todo: Todo) => {

}
export const updateTodoById = (todo: Todo) => {

}
export const deleteTodoById = (id:number) => {

}