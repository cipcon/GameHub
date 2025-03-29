import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/mushroom.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <a href="/" style={{ minWidth: "50px" }}>
        <Image src={logo} boxSize="50px" />
      </a>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
