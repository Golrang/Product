import { Col, Row } from "antd/es/grid";
import React from "react";
import AddSuggestionButton from "./containers/add-suggestion-button/AddSuggestionButton";
import { SuggestionTabs } from "./containers/suggestion-tabs";

export const Cartable = () => {
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
