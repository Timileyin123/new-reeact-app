
class TodoActions{

    getTodos() {
       return this.JSON.parse(localStorage.getItem('todos')) 
    }
    setTodo(todoItem){
        return this.localStorage.setItem ('todos', JSON.stringify(todoItem)) 

    }
}
export default TodoActions;