import { Col, Row } from "antd/es/grid";
import React from "react";
import AddSuggestionButton from "./containers/add-suggestion-button/AddSuggestionButton";
import { SuggestionTabs } from "./containers/suggestion-tabs";
import {
  useGetDevExpertHeadGroup,
  useGetDevExpertGroup,
  useGetEvaluationStudiesGroup,
} from "./hooks/useGetDevExpertGroup";
import { useGetSuggestion } from "./hooks/useCartable";
import { useGetStep } from "./hooks/useGetStep";

export const Cartable = () => {
  useGetDevExpertHeadGroup();
  useGetDevExpertGroup();
  useGetEvaluationStudiesGroup();
  useGetSuggestion();
  useGetStep();
  return (
    <>
      <Row className="mb-2" dir="rtl">
        <Col flex={"auto"}>
          <AddSuggestionButton />
        </Col>
        <Col>{/* <SuggestionSearch /> */}</Col>
      </Row>
      <SuggestionTabs />
    </>
  );
};
