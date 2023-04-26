import { Button, ICView } from "sharepoint-golrang-design-system";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { taskState } from "~/recoil-store/task";

export const ViewSuggestion = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const setTaskId = useSetRecoilState(taskState);

  const onEditHandler = () => {
    setTaskId({ id: id });
    navigate("/view-Suggestion", { replace: true });
  };

  return (
    <>
      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center"
        onClick={onEditHandler}
      >
        <ICView className="w-4" />
      </Button>
    </>
  );
};
