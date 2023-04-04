import { useState } from "react";
import { Col, Row } from "antd";
import { Form, FormTextArea, Button } from "sharepoint-golrang-design-system";
import { ViewProductSuggestion } from "../view-product-suggestion";
import { HistoryOfActions } from "../history-of-actions";
import { FileUpload } from "../file-upload";
import { PostponementDate } from "../postponement-date";
import { Priority } from "../priority";
// import {CheckBox} from "~/../../../packages/design-system/src/components/checkbox/CheckBox";

export const Prioritize = () => {
  const [checked] = useState(false);

  return (
    <>
      <div className="max w-full rounded overflow-hidden shadow-lg p-5">
        <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
          مرحله الویت بندی
        </span>
        <Row gutter={24} className="mb-5">
          {/* <Col>
            <CheckBox
              name="showProductCheckbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Col> */}
        </Row>
        <Form onFinish={() => {}}>
          <Row gutter={24} className="mb-5">
            <Col
              md={24}
              className={`${
                checked ? "opacity-100" : "opacity-0"
              } transition-opacity ease-in-out duration-500 `}
            >
              {checked && <ViewProductSuggestion />}
            </Col>
          </Row>
          <Row gutter={24} className="mb-5">
            <Col md={24}></Col>
          </Row>
          <Row gutter={24} className="mb-5">
            <Col md={12}>
              <Priority />
            </Col>
            <Col md={12}>
              <PostponementDate />
            </Col>
          </Row>
          <Row gutter={24} className="mb-5">
            <Col md={24}>
              <FormTextArea
                label="توضیحات"
                name=""
                placeholder="توضیحات"
                autoSize={{ minRows: 4 }}
              />
            </Col>
          </Row>
          <Row gutter={24} className="mb-5">
            <Col md={24}>
              <FileUpload />
            </Col>
          </Row>
          <Row gutter={24} className="mb-5 flex justify-center items-center">
            <Button className="bg-green-500 hover:bg-green-700 text-white font-bold w-40 rounded">
              ذخیره
            </Button>
            <Button className="bg-gray-500 hover:bg-gray-700 text-white font-bold w-40 rounded">
              بازگشت
            </Button>
          </Row>
          <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
            تاریخچه اقدامات
          </span>
          <Row gutter={24} className="mb-5">
            <Col md={24}>
              <HistoryOfActions />
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
