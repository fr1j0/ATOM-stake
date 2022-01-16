import { TourProvider } from '@reactour/tour';
import { render } from 'react-dom';
import App from './App';

// Guided tour steps

const steps = [
  {
    selector: '.from-input',
    content: 'Type the amount you want to stake',
  },
  {
    selector: '.to-input',
    content: 'This is your balance in a year',
  },
  {
    selector: '.cta-button',
    content: 'Confirm the transaction',
  },
];

// App render

render(
  <TourProvider
    steps={steps}
    scrollSmooth
    styles={{
      popover: (base) => ({
        ...base,
        '--reactour-accent': '#010101',
        borderRadius: 10,
        padding: 15,
        color: 'black',
      }),
      maskArea: (base) => ({ ...base, rx: 10 }),
      maskWrapper: (base) => ({ ...base, color: '#010101' }),
      badge: (base) => ({ display: 'none' }),
      controls: (base) => ({ display: 'none' }),
      close: (base) => ({ display: 'none' }),
    }}
  >
    <App />
  </TourProvider>,
  document.getElementById('root')
);
