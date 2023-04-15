import { Button, ICView } from "sharepoint-golrang-design-system";
import { useNavigate } from "react-router-dom";

export const ViewSuggestion = ({ id }: { id: number }) => {
  const navigate = useNavigate();

  const onEditHandler = () => {
    navigate("/view-Suggestion", { replace: true, state: { id } });
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
