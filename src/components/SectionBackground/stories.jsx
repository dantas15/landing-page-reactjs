import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          libero eius, ipsam molestias eveniet temporibus nam iusto provident,
          vitae maxime, alias ea suscipit minima itaque corporis beatae!
          Explicabo, consectetur aliquam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
