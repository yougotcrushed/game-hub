import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
