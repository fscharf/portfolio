import { HiOutlineX } from 'react-icons/hi';
import Styled from './styles';

const Sidebar = ({ children, id, title }) => {
  return (
    <Styled.Aside id={id}>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        <Styled.CloseButton>
          <HiOutlineX
            size={24}
            color={`#fff`}
            onClick={() => toggleSidebar(id)}
          />
        </Styled.CloseButton>
      </Styled.Header>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Aside>
  );
};

const toggleSidebar = (id) => {
  const sidebar = document.getElementById(id);

  sidebar.classList.toggle('open');
};

export { Sidebar, toggleSidebar };
