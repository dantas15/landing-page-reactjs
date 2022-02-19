import { GridTwoColumns } from '.';

import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
    title: { type: 'string' },
    text: { type: 'string' },
    background: { type: 'boolean' },
    srcImg: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
