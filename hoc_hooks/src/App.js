import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const data = {
  tasks: {
    task1: {
      id: "task1",
      content: "Sam Sung"
    },
    task2: {
      id: "task2",
      content: "I Phone"
    },
    task3: {
      id: "task3",
      content: "Oppo"
    }
  },
  columns: {
    col1: {
      id: "col1",
      title: "Vị Trí để lôi đi",
      taskIds: ["task1", "task2", "task3"]
    },
    col2: {
      id: "col2",
      title: "Progress",
      taskIds: []
    }
  },
  columnOrder: ["col1", "col2"]
};
const TaskContainer = < { isDragging: true } > `
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "red" : "white")};
  transition: background 0.1s;
`;

const Task = memo(({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
});
function App() {
  return (
    <div>
      abc
    </div>
  )
}

export default App
