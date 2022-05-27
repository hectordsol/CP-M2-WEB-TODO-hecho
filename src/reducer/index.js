import { ADD_TODO, REMOVE_TODO, TO_DONE, TO_IN_PROGRESS } from "../actions";
const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, {type ,payload}) => {
  switch(type) {
          // Aca va tu codigo; 
  case ADD_TODO:
      return [
        ...state,
        payload,
      ];
  case REMOVE_TODO:
      return state.filter((obj) => obj.id !== payload);
  case TO_IN_PROGRESS:
      return state.map(function(todo){
         if(todo.id === payload){ todo.status = 'InProgress'; } return todo;
        }); 
  case TO_DONE:
      return state.map(function(todo){
             if(todo.id === payload){ todo.status = 'Done'; } return todo;
            }); 
      default: return state;
  }
}

export default todos;
