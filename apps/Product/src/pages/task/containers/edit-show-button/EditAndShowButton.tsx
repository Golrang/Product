import { Button, ICEdit } from "sharepoint-golrang-design-system";

export const EditAndShowButton = () => {
  return (
    <>
      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center ml-4"
        //   onClick={onEditHandler}
      >
        <ICEdit className="w-4" />
      </Button>

      <Button
        shape="circle"
        className="!inline-flex !justify-center !items-center"
        //   onClick={onEditHandler}
      >
        {/* <ICShow className="w-4" /> */}
      </Button>
    </>
  );
};
