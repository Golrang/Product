import { Button, ICView } from "sharepoint-golrang-design-system";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { taskState } from "~/recoil-store/task";

export const ViewSuggestion = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const setTaskId = useSetRecoilState(taskState);

  const onViewHandler = () => {
    setTaskId({ id: id });
    navigate("/view-Suggestion", { replace: true });
  };

  return (
    <>
      <Button
        className="flex items-center ml-3 text-theme-16 border-none	shadow-none	"
        onClick={onViewHandler}
      >
        <ICView className="w-4 h-4 ml-2" />
        مشاهده
      </Button>
    </>
  );
};
