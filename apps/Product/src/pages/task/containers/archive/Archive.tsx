import { useState, Suspense } from "react";
import {
  FormCheckBox,
  Form,
  TextArea,
  Uploader,
  Button,
} from "sharepoint-golrang-design-system";
import { Priority } from "../priority";

export default function Archive() {
  const [isCheckedPriority, setisCheckedPriority] = useState(false);

  const save = () => {};
  const returnBut = () => {};

  return (
    <>
      <Form onFinish={() => {}}>
        <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
          مرحله آرشیو شده
        </span>
        <FormCheckBox
          className="float-right"
          name="priority"
          label=""
          onClick={() => {
            isCheckedPriority == true
              ? setisCheckedPriority(false)
              : setisCheckedPriority(true);
          }}
        >
          بازگشت به مرحله اولویت بندی
        </FormCheckBox>
        <Suspense fallback={<h4>در حال بارگزاری</h4>}>
          {isCheckedPriority && <Priority ActionId={0} />}
          {/* //refactor */}
        </Suspense>
        <span className="float-right">توضیحات</span>
        <TextArea name="des" placeholder="توضیحات" />
        <div className="float-right">
          <span>بارگزاری فایل</span>
          <Uploader>
            <Button> choose File</Button>
          </Uploader>
        </div>
        <Button className="m-10 bg-green-300" onClick={save}>
          ذخیره
        </Button>
        <Button className="bg-red-300" onClick={returnBut}>
          بازگشت
        </Button>
      </Form>
    </>
  );
}
