import { toast } from "react-hot-toast";
import { updateTaskStatus } from "redux/actions/tasksActions";

const verifyTaskStatusUpdate = (taskUpdateData) => {
  return (dispatch, getState) => {
    const { tasksList } = getState().tasks;

    const currentStatus = tasksList.find(
      (task) => task.id === taskUpdateData.taskId
    ).status;

    //preventing invalid action dispatch
    if (
      currentStatus === taskUpdateData.status ||
      taskUpdateData.status === "Готово" ||
      currentStatus === "Сделать"
    ) {
      dispatch(updateTaskStatus(taskUpdateData));
    } else {
      toast.error("Эта операция недоступна.", { id: "not-allowed" });
    }
  };
};

export default verifyTaskStatusUpdate;
