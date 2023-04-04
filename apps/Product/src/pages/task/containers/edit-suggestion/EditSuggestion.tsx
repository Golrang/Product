import { Button, ICEdit } from "sharepoint-golrang-design-system";

export const EditSuggestion = () => {
  return (
    <>
      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center"
        //   onClick={onEditHandler}
      >
        <ICEdit className="w-4" />
      </Button>
    </>
  );
};
