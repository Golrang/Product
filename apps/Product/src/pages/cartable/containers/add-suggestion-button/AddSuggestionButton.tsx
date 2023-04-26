import { Button } from "sharepoint-golrang-design-system";
import { ICPlus } from "sharepoint-golrang-design-system";
import { useNavigate } from "react-router-dom";

export default function AddSuggestionButton() {
  const navigate = useNavigate();
  const onAddHandler = () => navigate("/add-Suggestion", { replace: true });

  return (
    <Button
      icon={<ICPlus className="w-6" />}
      className="btn-primary-suggestion"
      onClick={onAddHandler}
    >
      افزودن پیشنهاد جدید
    </Button>
  );
}
