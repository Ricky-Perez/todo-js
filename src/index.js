import { Todo, TodoList  } from './classes';
import { crearTodoHtml,  } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

const tarea = new Todo('Hacer una lección de Js');




// todoList.todos.forEach( todo => crearTodoHtml(todo)); <===  esta sería la sintaxis, pero como 'todo' es el único 
//argumento que tiene la función y es el que le quiero enviar para que se ejecute (hay funciones con más de 
//un argumento) no es necesario colocarlo dos veces ya que por defecto eñ 'todo' está incluido.
todoList.todos.forEach( crearTodoHtml );


todoList.todos[0].imprimirClase();

