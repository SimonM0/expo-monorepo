export { ExampleComponent } from './src/components/ExampleComponent';

const messages = [
  'I said don\'t tap me!\n\nOr maybe I wanted you to tap me and by exploiting your curiosity I got what I wanted. 😈\n\nSeriously don\t tap me again!',
  'You fell for it again! Keep tapping 😌',
  'Tap me harder 😌',
  'Oh yeah, I said TAP me harder 😏',
  'You know at this point you\'re actually letting an emoji dictate your life 😂',
  'Go build something cool! 😎 Stop tapping me!'
];

export const exampleFunction = tapCount => {
  if (tapCount < messages.length) {
    alert(messages[tapCount]);
    return;
  }

  alert(messages[5]);
};
