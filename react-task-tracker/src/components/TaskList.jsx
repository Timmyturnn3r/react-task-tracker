import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  )
}

export default TaskList
