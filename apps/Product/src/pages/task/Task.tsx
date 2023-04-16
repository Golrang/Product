import { useRecoilValue } from "recoil";
import { taskState } from "~/recoil-store/task";
import TaskContainer from "./containers/task-container/TaskContainer";

export const Task = () => {
  const { id } = useRecoilValue(taskState);
  if (isNaN(id) === false) return <TaskContainer id={id} />;
  return null;
};
