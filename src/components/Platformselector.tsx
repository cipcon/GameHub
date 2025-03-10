import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const Platformselector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (error) {
    return null;
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default Platformselector;
