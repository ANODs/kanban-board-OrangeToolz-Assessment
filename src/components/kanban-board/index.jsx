import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import TaskContainer from "components/task-container";
import classes from "./kanban-board.module.css";
import prepareTask from "redux/thunks/prepareTask";

const KanbanBoard = () => {
  const { taskStatus } = useSelector((state) => state.tasks);
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const handleTaskAdd = () => {
    if (taskTitle) {
      dispatch(prepareTask(taskTitle));
      setTaskTitle("");
    } else {
      toast.error("Введите описание.", { id: "name" });
    }
  };

  const handleEnterKeyDown = (key) => {
    if (key === "Enter") {
      handleTaskAdd();
    }
  };

  return (
    <>
      <div className={classes.addTask}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={(e) => handleEnterKeyDown(e.key)}
          placeholder="Опишите задание..."
        />
        <button onClick={handleTaskAdd}>Добавить</button>
      </div>
      <div className={classes.containers}>
        {taskStatus.map((status) => (
          <TaskContainer key={status} status={status} />
        ))}
      </div>
    </>
  );
};

export default KanbanBoard;
