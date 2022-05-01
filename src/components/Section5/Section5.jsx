import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import snowboarder from "../../assets/Images/snowboader.avif";

const Section5 = () => {
  return (
    <Box
      w={"100%"}
      minHeight={"750px"}
      position={"relative"}
      px={20}
      pt={5}
      sx={{
        backgroundImage: `url(${snowboarder})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "60% 40%",
        position: "relative",
      }}
      _after={{
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      }}
    >
      <VStack
        width="100%"
        zIndex={1000}
        marginTop={"200px"}
        align="flex-start"
        minH={"30vh"}
        gap={10}
      >
        <Text
          fontWeight={600}
          fontSize={"56px"}
          lineHeight="73px"
          color="#ffffff"
          zIndex={1000}
          w={"1000px"}
        >
          View Passes We’ve Made Available For You
        </Text>

        <Button
          fontWeight={400}
          color="#ffffff"
          zIndex={1000}
          width={"285px"}
          height="72px"
          borderRadius="10px"
          padding="22px, 39px, 22px, 39px"
          backgroundColor="#3E86F5"
          fontSize={"14px"}
          lineHeight="21px"
          _active={{ border: "none" }}
          _focus={{ border: "none" }}
          border={"none"}
          sx={{
            _hover: {
              transform: "scale(.97)",
            },
          }}
        >
          View Passes
        </Button>
      </VStack>
    </Box>
  );
};

export default Section5;
