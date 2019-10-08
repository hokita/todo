import { configure } from '@storybook/react';

configure(require.context('../app/javascript/javascripts', true, /\.stories\.js$/), module);
