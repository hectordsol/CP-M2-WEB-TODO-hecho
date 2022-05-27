// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0;

export const ADD_TODO = "AddTodo";

export const REMOVE_TODO = "RemoveTodo"

export const TO_IN_PROGRESS = "ToInProgress";

export const TO_DONE = "ToDone";

export function addTodo(payload) {
    return { type: ADD_TODO,
          payload: { status: "Todo", id: todoId+=1, ...payload }}
  } 
export function removeTodo(id) {
    return {type: REMOVE_TODO, payload: id,  };
  }
export function toInProgress(id) {
    return {type: TO_IN_PROGRESS, payload:id,  };
  }
export function toDone(id) {
    return {type: TO_DONE, payload: id , };
  }
