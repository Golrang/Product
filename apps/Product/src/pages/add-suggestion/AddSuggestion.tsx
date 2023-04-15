import { Button, Col, Divider, Row } from "antd";
import { Material } from "./containers/material";
import { OfferReason } from "./containers/offer-reason";
import { OtherPharmaceuticalForms } from "./containers/other-pharmaceutical-forms";
import { PharmaceuticalForms } from "./containers/pharmaceutical-forms";
import { Questions } from "./containers/questions/Questions";
import { Recommender } from "./containers/recommender";
import { TherapeuticField } from "./containers/therapeutic-field";
import { TherapeuticFieldComment } from "./containers/therapeutic-field-comment";
import { TKeyOfForm } from "types/suggestion/suggestion.types";
import { UploadFile } from "./containers/upload-file";
import { useSubmitSuggestion } from "./hooks/useSubmitSuggestion";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import {
  Form,
  FormInput,
  FormTextArea,
} from "sharepoint-golrang-design-system";
import { submitLoadingState } from "~/recoil-store/general/submitLoading";
import * as yup from "yup";
import { TFormSchema } from "sharepoint-golrang-design-system/src/components/form";
import { TSuggestionForm } from "../../types/suggestion/suggestion.types";
import { addSuggestionTemporaryState } from "~/recoil-store/add-suggestion/addSuggestionTemporaryState";

yup.addMethod(yup.object, "uniqueProperty", function (propertyName, message) {
  return this.test("unique", message, function (value) {
    if (!value || !value[propertyName]) {
      return true;
    }

    const { path } = this;
    const options = [...this.parent];
    const currentIndex = options.indexOf(value);

    const subOptions = options.slice(0, currentIndex);

    if (
      subOptions.some((option) => {
        const optionPropertyFood = option[propertyName].split("*")[0];
        const optionPropertyIsFood = !isNaN(Number(optionPropertyFood));
        const valuePropertyFood = value[propertyName].split("*")[0];
        const valuePropertyIsFood = !isNaN(Number(valuePropertyFood));

        if (optionPropertyIsFood && valuePropertyIsFood) {
          return optionPropertyFood === valuePropertyFood;
        } else {
          return false;
        }
      })
    ) {
      throw this.createError({
        path: `${path}.${propertyName}`,
        message,
      });
    }

    return true;
  });
});

const schema = yup.object<
  TFormSchema<
    Omit<
      TSuggestionForm,
      | "CompanyId"
      | "EmployeeId"
      | "Title"
      | "OtherPharmaceuticalForm_Other"
      | "PharmaceuticalForm_Other"
    >
  >
>({
  BrandName: yup.string().required("نام برند الزامی است"),
  Comment: yup.string().required("توضیحات الزامی است"),
  Material: yup.string().required("ماده موثره الزامی است"),
  Consumable: yup.string().required("مورد مصرف الزامی است"),
  ManufacturerCompanyName: yup.string().required("شرکت سازنده الزامی است"),
  OfferReasonComment: yup.string().required("توضیحات علت پیشنهاد الزامی است"),
  ProductAdvatage: yup.string().required("مزیت محصول  الزامی است"),
  ProductWeaknesses: yup.string().required("نقاط ضعف محصول الزامی است"),
  TherapeuticFieldComment: yup
    .string()
    .required("توضیحات حوزه درمانی الزامی است"),

  Materials: yup.array().of(
    yup
      .object()
      // .uniqueProperty("Food", "این اجزای ثانویه قبلا وارده شده است")
      .shape({
        Title: yup
          .string()
          .typeError("باید مقدار از نوع متن باشد")
          .required("فیلد اجزای ثانویه الزامی است"),
      })
  ),
  PharmaceuticalFormId: yup.number().required("شکل دارویی الزامی است"),
  OtherPharmaceuticalFormId: yup
    .number()
    .required("سایر اشکال دارویی الزامی است"),
  SimilarConsumable: yup.boolean().required("سوال مورد مصرف الزامی است"),
  SimilarPharmaceuticalForm: yup.boolean().required("سوال فرم الزامی است"),
  SimilarTherapeuticField: yup
    .boolean()
    .required("سوال حوزه درمانی الزامی است"),
  TherapeuticFieldId: yup.number().required("حوزه درمانی الزامی است"),
  OfferReasonId: yup
    .array()
    .of(yup.number())
    .required("دلیل پیشنهاد الزامی است"),
  File: yup.object().required("فایل الزامی است"),
});

const schemaTemporary = yup.object<any>({}); //ثبت موقت

export const AddSuggestion = () => {
  const { onSubmit } = useSubmitSuggestion();
  const [isLoading, setLoading] = useRecoilState(submitLoadingState);
  const [isTemporary, setIsTemporary] = useRecoilState(
    addSuggestionTemporaryState
  );
  const onCancelHandler = () => {
    return;
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, [setLoading]);
  return (
    <>
      <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
        پیشنهاد دهنده
      </span>
      <Row gutter={24}>
        <Col md={24} sm={24}>
          <Recommender />
        </Col>
      </Row>
      <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 mt-5 rounded-lg p-1 text-white bg-indigo-300">
        مشخصات محصول
      </span>
      <Form
        name="AddSuggestionForm"
        onFinish={onSubmit}
        schema={isTemporary ? schemaTemporary : schema}
      >
        <Row gutter={24} className="mb-5">
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              name="Material"
              type="text"
              label="نام ماده یا مواد موثره"
              placeholder="ماده موثره اصلی"
            />
          </Col>

          <Col md={24} sm={24}>
            <Material />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <PharmaceuticalForms />
          </Col>
          <Col md={12} sm={24}>
            <OtherPharmaceuticalForms />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              label="نام برند اصلی"
              name="BrandName"
              placeholder="نام برند اصلی"
            />
          </Col>
          <Col md={12} sm={24}>
            <FormInput<TKeyOfForm>
              label="نام شرکت سازنده"
              name="ManufacturerCompanyName"
              placeholder="نام شرکت سازنده"
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="مورد مصرف"
              name="Consumable"
              placeholder="مورد مصرف"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={12} sm={24}>
            <TherapeuticField />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <TherapeuticFieldComment />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <OfferReason />
          </Col>

          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="OfferReasonComment"
              placeholder="توضیحات علت پیشنهاد"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={24} sm={24}>
            <FormTextArea<TKeyOfForm>
              label="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار"
              name="ProductAdvatage"
              placeholder="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <FormTextArea<TKeyOfForm>
              label="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار"
              name="ProductWeaknesses"
              placeholder="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24}>
            <Questions />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col sm={24}>
            <FormTextArea<TKeyOfForm>
              label="توضیحات"
              name="Comment"
              placeholder="توضیحات"
              autoSize={{ minRows: 4 }}
            />
          </Col>
        </Row>
        <Divider />
        <Row gutter={24}>
          <Col md={4}>
            <UploadFile />
          </Col>
        </Row>
        <Button
          className="!inline-flex !items-center btn-ghost-danger btn"
          key="cancel"
          onClick={onCancelHandler}
          disabled={isLoading}
        >
          انصراف
        </Button>

        <Button
          className="!inline-flex !items-center "
          key="submit"
          htmlType="submit"
          disabled={isLoading}
          onClick={() => {
            setIsTemporary(false);
          }}
        >
          ثبت نهایی
        </Button>

        <Button
          className="!inline-flex !items-center "
          key="submit"
          htmlType="submit"
          disabled={isLoading}
          onClick={() => {
            setIsTemporary(true);
          }}
        >
          ثبت موقت
        </Button>
      </Form>
    </>
  );
};
