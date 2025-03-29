import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/mushroom.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <a href="/">
        <Image src={logo} boxSize="50px" />
      </a>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
