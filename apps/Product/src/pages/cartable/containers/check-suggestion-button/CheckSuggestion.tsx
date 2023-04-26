import { Button, ICEdit } from "sharepoint-golrang-design-system";
import { useSetRecoilState } from "recoil";
import { taskState } from "~/recoil-store/task/taskState";
import { useNavigate } from "react-router-dom";

export const CheckSuggestion = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const setTaskId = useSetRecoilState(taskState);
  const onEditHandler = () => {
    setTaskId({ id: id });
    navigate("/task", { replace: true });
  };

  return (
    <>
      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center"
        onClick={onEditHandler}
      >
        <ICEdit className="w-4" />
      </Button>
    </>
  );
};
