import React from 'react';
import { Form } from 'sharepoint-golrang-design-system';
import { Recommender } from './containers/recommender'

export const AddSuggestion = () => {
  const submit = () => {
  }
  return <>
    <Form name='recommenderForm' onSubmit={submit}>
      <Recommender />
    </Form>
  </>;
}

