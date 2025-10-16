import { ListGroupItem } from "react-bootstrap";

const TodoItem = ({ todo = { done: true, title: 'Buy milk', status: 'COMPLETED' } }) => {
  return (
    <ListGroupItem>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <input 
        type="checkbox" 
        className="me-2" 
        defaultChecked={todo.done}
        aria-label={todo.title}
      />
      {todo.title} ({todo.status})
    </ListGroupItem>
  );
};

export default TodoItem;