import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Alias ea necessitatibus atque quo nemo perferendis expedita,
    eligendi fugit? Facere ex possimus, fugiat at dolores eligendi
    molestiae nulla expedita eveniet officia.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
