import { Navbar, ThemeSidebar } from '..';
import Styled from './styles';

const Header = () => {
  return (
    <Styled.Header>
      <Navbar />
      <ThemeSidebar />
    </Styled.Header>
  );
};

export default Header;
