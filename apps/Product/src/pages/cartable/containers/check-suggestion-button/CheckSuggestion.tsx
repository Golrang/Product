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
        className="flex items-center ml-3 text-theme-9 border-none	shadow-none"
        onClick={onEditHandler}
      >
        <ICEdit className="w-3 h-3 ml-1" />
        ویرایش
      </Button>
    </>
  );
};
