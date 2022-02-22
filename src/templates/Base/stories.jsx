import { Base } from '.';
import { mockBase } from './mock';

export default {
  title: 'Template/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
