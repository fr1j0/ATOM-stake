import { useEffect } from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import MainLayout from 'components/layout/main';
import Staking from 'components/routes/staking';
import useStyles from './styles';
import './app.css';

// App entry point

const App = () => {
  const classes = useStyles();
  const { steps, setIsOpen, isOpen, currentStep, setCurrentStep } = useTour();

  useEffect(() => {
    const delay = 3000;
    let timer: NodeJS.Timeout;
    if (isOpen) {
      if (currentStep > steps.length) {
        setIsOpen(false);
      } else {
        timer = setTimeout(() => setCurrentStep((s) => s + 1), delay);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, currentStep, setCurrentStep, steps.length, setIsOpen]);

  useEffect(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Staking />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
