// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodo} = props
  const {title, id} = todosList
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-card">
      <p className="para">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
