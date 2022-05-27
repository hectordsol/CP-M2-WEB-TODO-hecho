import React from 'react';
import Todos from '../Todos/Todos';
export function Home() {
  return (
    <div>
        <Todos status="Todo" />
        <Todos status="InProgress" />
        <Todos status="Nada" />
    </div>
  )
};

export default Home;