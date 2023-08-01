import { Button, Flex, Logo } from "components/core";
import { useState } from "react";
import { HiOutlineBars2, HiOutlineCog6Tooth } from "react-icons/hi2";
import { useTheme } from "styled-components";
import { useEventListener, useMediaQuery } from "usehooks-ts";
import { scrollTop } from "utils/navigation";
import { NavLink, NavWrapper, Wrapper } from "./styles";

type Props = {
  onClickCallback?: () => void;
};

const Navbar = ({ onClickCallback }: Props) => {
  const [isFixed, setIsFixed] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const theme = useTheme();

  const handleScroll = () => setIsFixed(window.scrollY > 200);

  const links: { url: string; label: string }[] = [
    { url: "#", label: "Home" },
    { url: "#about", label: "About" },
    { url: "#projects", label: "Projects" }
  ];

  useEventListener("scroll", handleScroll);

  return (
    <NavWrapper id="navbar">
      <Wrapper fixed={isFixed}>
        <button onClick={scrollTop}>
          <Logo
            style={{
              width: "40px",
              height: "40px",
              fill: theme.colors.primary
            }}
          />
        </button>
        <Flex
          css={{
            gap: theme.sizes.xxs,
            alignItems: "center",
            justifyContent: "center"
          }}>
          {isDesktop ? (
            links.map((link, index) => (
              <NavLink key={index} href={link.url} active={index === 0}>
                {link.label}
              </NavLink>
            ))
          ) : (
            <NavLink active>
              <HiOutlineBars2 size={28} />
            </NavLink>
          )}
          <Button onClick={onClickCallback}>
            <HiOutlineCog6Tooth size={24} />
          </Button>
        </Flex>
      </Wrapper>
    </NavWrapper>
  );
};

export default Navbar;
