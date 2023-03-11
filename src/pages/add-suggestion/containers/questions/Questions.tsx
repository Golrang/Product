import React from 'react';
import { ConsumableQuestion } from './ConsumableQuestion';
import { PharmaceuticalFormsQuestion } from './PharmaceuticalFormsQuestion';
import { TherapeuticFieldQuestion } from './TherapeuticFieldQuestion';

function Questions() {
  return (
    <>
      <PharmaceuticalFormsQuestion />
      <TherapeuticFieldQuestion />
      <ConsumableQuestion />
    </>
  );
}

export default Questions;
