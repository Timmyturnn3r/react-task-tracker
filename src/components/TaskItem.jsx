function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          marginRight: '10px'
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  )
}

export default TaskItem
