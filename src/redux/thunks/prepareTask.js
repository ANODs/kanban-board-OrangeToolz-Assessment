import { toast } from "react-hot-toast";
import { addToTaskList } from "redux/actions/tasksActions";

const prepareTask = (taskTitle) => {
  return (dispatch, getState) => {
    const { tasksList } = getState().tasks;

    const titleExist = tasksList.find(
      (task) => task.title.toLowerCase() === taskTitle.toLowerCase()
    );

    //preventing action dispatch if task already exist
    if (!titleExist) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        status: "Сделать",
      };
      dispatch(addToTaskList(newTask));
    } else {
      toast.error("Такое задание уже есть.", { id: "exist" });
    }
  };
};

export default prepareTask;
