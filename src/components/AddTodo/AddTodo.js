import React from 'react';
//import * as actionsCreator from '../../actions' NO FUNCIONA
import { addTodo } from '../../actions';
import { connect } from "react-redux";
//import { bindActionCreators } from 'redux'; NO FUNCIONO

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.
export function AddTodo(props) {
  const [input, setInput] = React.useState({
    title: "",
    description: "",
    place: "",
    date: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e){
    e.preventDefault();
    props.addTodo(input);
    setInput({
      title: "",
      description: "",
      place: "",
      date: "",
      });
  }

  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
      <label>Title</label>
      <input name="title" onChange={handleInputChange} value={input.title} />
      <label>Description</label>
      <textarea
        name="description"
        onChange={handleInputChange}
        value={input.description}
        />
      <label>Place</label>
      <input name="place" onChange={handleInputChange} value={input.place} />
      <label>Date</label>
      <input name="date" onChange={handleInputChange} value={input.date} />
      <button type="submit" >
        Submit
      </button>
    </form>
  );
}

// function mapDispatchToProps(dispatch) { NO FUNCIONO
//   return { actionsCreator: bindActionCreators(actionsCreator, dispatch) }
// }

function mapDispatchToProps(dispatch){
  return{
    addTodo: (input) => dispatch(addTodo(input))
  }
}

function mapStateToProps(state) {
  return { todos: state.todos }
}
// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo); NO FUNCIONO
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

// export default connect(null, {addTodo})(AddTodo); // CON ESTO NO ES NECESARIO mapDispatchToProps