import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/mushroom.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
      <a href="/" style={{ minWidth: "50px" }}>
        <Image src={logo} boxSize="50px" />
      </a>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
