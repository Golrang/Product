import { Button, ICView } from "sharepoint-golrang-design-system";

export const ViewSuggestion = () => {
  return (
    <>
      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center"
        //   onClick={onEditHandler}
      >
        <ICView className="w-4" />
      </Button>
    </>
  );
};
