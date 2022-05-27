import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Todo from '../Todo/Todo';

export function Todos({status,todos}) {
  return (
  <div>
          <span>{status}</span>
          {todos && todos.map(todo => 
            todo.status===status?
            <div key={todo.id}>
              <Link to={`/edit/${todo.id}`}>
                <Todo  title={todo.title}/>
              </Link>
            </div>
            :null
            )
          }  
  </div>
  )
}
function mapStateToProps(state) {
    return { todos: state,
    }
  }
export default connect(mapStateToProps, null)(Todos);  
