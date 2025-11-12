"use client"
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroupItem, Button } from "react-bootstrap";
import { FaTrash, FaPencil } from "react-icons/fa6";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  
  return (
    <ListGroupItem key={todo.id}>
      <Button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        variant="danger"
        size="sm"
        className="me-2"
      >
        <FaTrash />
      </Button>
      <Button 
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        variant="warning"
        size="sm"
        className="me-2"
      >
        <FaPencil />
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}