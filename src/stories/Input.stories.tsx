import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/Input';
import { LOGIN_INPUT_STYLE } from '../pages/login/Input';

const meta = {
  title: 'Input/DefaultInput',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileInput: Story = {
  args: {
    name: 'name',
    placeholder: '이름',
    outline: true,
    onChange: () => {},
  },
};

export const LoginInput: Story = {
  args: {
    label: 'Student ID',
    name: 'studentId',
    maxLength: 8,
    shadow: true,
    placeholder: '32xxxxxx',
    style: LOGIN_INPUT_STYLE,
    inputContent: <span className="text-[#999]">@dankook.ac.kr</span>,
  },
};
