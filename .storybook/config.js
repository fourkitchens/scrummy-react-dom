import { configure } from '@kadira/storybook';
import '../src/scss/main.scss';
// Get all stories from components.
const req = require.context('../src/components', true, /stories.js/);
configure(() => req.keys().forEach((filename) => req(filename)), module);
