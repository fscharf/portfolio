import { useContext } from 'react';
import { ThemeContext, Sidebar, toggleSidebar } from '../..';
import Styled from './ThemeSidebar.styles';

const ThemeSidebar = () => {
  const colors = [
    '#1847E2',
    '#f20727',
    '#970ce8',
    '#1fcf3c',
    '#545454',
    '#dbbf1f',
    '#cc29b3',
    '#d65504',
  ];
  const { state, setState } = useContext(ThemeContext);

  return (
    <Sidebar title={`choose your theme`} id={`colorSidebar`}>
      <Styled.Wrapper>
        {colors.map((color, index) => (
          <Styled.Input
            type={`radio`}
            name={`colors`}
            value={color}
            bgColor={color}
            checked={state.colorPrimary === color && true}
            key={index}
            onChange={() => {
              setState({ colorPrimary: color });
              window.innerWidth < 768 && toggleSidebar('colorSidebar')
            }}
          />
        ))}
      </Styled.Wrapper>
    </Sidebar>
  );
};

export default ThemeSidebar;
