import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  setPickedTodo: (pickedTodo: Todo | null) => void,
  pickedTodo: Todo | null,
};

export const TodoList: React.FC<Props> = ({
  todos,
  setPickedTodo,
  pickedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setPickedTodo={setPickedTodo}
          pickedTodo={pickedTodo}
        />
      ))}
    </tbody>
  </table>
);