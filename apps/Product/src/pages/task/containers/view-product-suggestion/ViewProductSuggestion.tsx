import { useViewProductSuggestion } from "../../hooks/useViewProductSuggestion";
import { Descriptions, Row, Col } from "antd";
import { Form } from "sharepoint-golrang-design-system";
import { ICPeople } from "sharepoint-golrang-design-system/src/icons/PeopleIcon";
import { ICPlus } from "sharepoint-golrang-design-system/src/icons/PlusIcon";
import { ICClose } from "sharepoint-golrang-design-system/src/icons/CloseIcon";

export const ViewProductSuggestion = () => {
  const { defaultValues } = useViewProductSuggestion();
  const onSubmit = () => {};
  const onFinish = () => {};
  return (
    <div className="border p-4 shadow shadow-indigo-500/40 hover:shadow-indigo-500/40 rounded-lg">
      <Form
        name="ViewSuggestionForm"
        {...{ onSubmit, defaultValues, onFinish }}
      >
        <Row gutter={24}>
          <Col md={8} sm={24}>
            <div className="Recommender ">
              <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5  rounded-lg p-1 text-white bg-indigo-300">
                پیشنهاد دهنده
              </span>
              <Row gutter={24}>
                <Col md={8} sm={24}>
                  <ICPeople className="border rounded-full w-3/4 mt-10 shadow shadow-indigo-500/40 text-gray-500" />
                </Col>

                <Col md={16} sm={24}>
                  <div className="mt-6">
                    <Descriptions column={1}>
                      <Descriptions.Item label="نام و نام خانوادگی">
                        زهرا شرین پور
                      </Descriptions.Item>
                      <Descriptions.Item label="سمت">
                        توسعه دهنده فرانت
                      </Descriptions.Item>
                      <Descriptions.Item label="واحد سازمانی">
                        شیرپوینت
                      </Descriptions.Item>
                      <Descriptions.Item label="نام شرکت">
                        گلرنگ سیستم
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={16} sm={24}>
            <div className="ProductInformation">
              <span className="w-[100%] border-t-2 border-solid border-indigo-200 inline-block mb-5 rounded-lg p-1 text-white bg-indigo-300">
                مشخصات محصول
              </span>
              <Descriptions column={3}>
                <Descriptions.Item label="نام ماده یا مواد موثره">
                  {defaultValues?.Material}
                </Descriptions.Item>
                <Descriptions.Item label="اجزا ثانویه">
                  {defaultValues?.Material}
                </Descriptions.Item>
                <Descriptions.Item label="شکل دارویی">
                  {defaultValues?.PharmaceuticalForm_Other}
                </Descriptions.Item>
                <Descriptions.Item label="سایر اشکال دارویی">
                  {defaultValues?.PharmaceuticalForm?.Title}
                </Descriptions.Item>
                <Descriptions.Item label="نام برند اصلی">
                  {defaultValues?.BrandName}
                </Descriptions.Item>
                <Descriptions.Item label="نام شرکت سازنده">
                  {defaultValues?.ManufacturerCompanyName}
                </Descriptions.Item>
              </Descriptions>
            </div>
            <Descriptions column={1}>
              <Descriptions.Item label="مورد مصرف">
                {defaultValues?.Consumable}
              </Descriptions.Item>
              <Descriptions.Item label="حوزه درمانی">
                {defaultValues?.TherapeuticField?.Title}
              </Descriptions.Item>
              <Descriptions.Item label="توضیحات">
                {defaultValues?.TherapeuticFieldComment}
              </Descriptions.Item>
              <Descriptions.Item label="علت پیشنهادی">
                {defaultValues?.OfferReason?.Title}
              </Descriptions.Item>
              <Descriptions.Item label="توضیحات">
                {defaultValues?.OfferReasonComment}
              </Descriptions.Item>
              <Descriptions.Item label="مزیت محصول پیشنهادی نسبت به محصول موجود در بازار">
                {defaultValues?.ProductAdvatage}
              </Descriptions.Item>
              <Descriptions.Item label="نقاط ضعف احتمالی محصول پیشنهادی نسبت به محصول موجود در بازار">
                {defaultValues?.ProductWeaknesses}
              </Descriptions.Item>
              <Descriptions.Item label="آیا محصول با فرم دارویی مشابه توسط شرکت تولید شده است">
                {defaultValues?.SimilarPharmaceuticalForm ? (
                  <ICPlus className="w-6 text-green-600" />
                ) : (
                  <ICClose className="w-6 text-red-600" />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="آیا محصول با حوزه درمانی مشابه توسط شرکت تولید شده است">
                {defaultValues?.SimilarTherapeuticField ? (
                  <ICPlus className="w-6 text-green-600" />
                ) : (
                  <ICClose className="w-6 text-red-600" />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="آیا محصول با مورد مصرف مشابه توسط شرکت تولید شده است">
                {defaultValues?.SimilarConsumable ? (
                  <ICPlus className="w-6 text-green-600" />
                ) : (
                  <ICClose className="w-6 text-red-600" />
                )}
              </Descriptions.Item>
              <Descriptions.Item label="توضیحات">
                {defaultValues?.Comment}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
