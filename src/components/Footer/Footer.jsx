import { Box, Circle, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMdAirplane } from "react-icons/io";

const Footer = () => {
  return (
    <Box width="100%" minH={"30vh"} border={"2px solid black"}>
      <VStack>
        <Circle
          border={"1px dashed gray"}
          zIndex={1000}
          p={1}
          mr={3}
          cursor={"pointer"}
        >
          <IoMdAirplane className="transform" size="20px " />
        </Circle>
      </VStack>
    </Box>
  );
};

export default Footer;
