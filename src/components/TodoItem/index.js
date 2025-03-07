import './index.css'

const TodoItem = props => {
  const {eachUserDetails, onDeleteTitle} = props
  const {id, title} = eachUserDetails
  const onDelete = () => {
    onDeleteTitle(id)
  }
  return (
    <li>
      <p className="paragraph"> {title} </p>
      <button type="button" className="btn-design" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
