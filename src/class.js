


 export const getTodos = () => {
return JSON.parse(localStorage.getItem('todos'))
}
 export const setTodo = (todoItem) => {
return localStorage.setItem ('todos', JSON.stringify(todoItem)) 


 }


