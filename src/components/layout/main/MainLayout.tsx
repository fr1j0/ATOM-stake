import Navbar from 'components/shared/navbar';

type Props = {
  children: JSX.Element;
};

// Main layout

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
