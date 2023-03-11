import React from 'react';
import { ConsumableQuestion } from './ConsumableQuestion';
import { PharmaceuticalFormsQuestion } from './PharmaceuticalFormsQuestion';
import { TherapeuticFieldQuestion } from './TherapeuticFieldQuestion';

export const Questions = () => {
  return (
    <>
      <PharmaceuticalFormsQuestion />
      <TherapeuticFieldQuestion />
      <ConsumableQuestion />
    </>
  );
};
