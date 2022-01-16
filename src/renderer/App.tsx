import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import MainLayout from 'components/layout/main';
import Staking from 'components/routes/staking';
import './app.css';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      overflowX: 'hidden',
      fontFamily: 'Roboto',
      color: '#fff',
      backgroundColor: '#27292b',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    input: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
});

// App entry point

const App = () => {
  const classes = useStyles();

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
