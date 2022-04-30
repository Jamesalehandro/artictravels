import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import Tourist1 from "../../assets/Images/tourist.avif";
import Tourist2 from "../../assets/Images/tourist2.avif";
import Tourist3 from "../../assets/Images/tourist3.avif";

const Section3 = () => {
  return (
    <Box w={"100%"} minH={"900px"} display={"flex"}>
      <HStack
        w={"35%"}
        minH={"900px"}
        bgImage={Tourist1}
        position={"relative"}
        justify={"flex-start"}
        align={"flex-end"}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50% ",
        }}
        _after={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={"55px"}
          lineHeight="54px"
          w={"592px"}
          textAlign={"right"}
          className="transformText"
        >
          Mountain Resort
        </Text>
      </HStack>

      <HStack
        w={"35%"}
        minH={"900px"}
        bgImage={Tourist2}
        position={"relative"}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50% ",
        }}
        _after={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={"55px"}
          lineHeight="108px"
          w={"592px"}
          textAlign={"right"}
          className="transformText1"
        >
          Fuji Mountain
        </Text>
      </HStack>

      <HStack
        w={"35%"}
        minH={"900px"}
        bgImage={Tourist3}
        position={"relative"}
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "75% 25% ",
        }}
        _after={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
        }}
      >
        <Text
          zIndex={10000}
          fontWeight={600}
          fontSize={"55px"}
          lineHeight="108px"
          w={"592px"}
          textAlign={"right"}
          className="transformText2"
        >
          Freezing WinterLake
        </Text>
      </HStack>
    </Box>
  );
};

export default Section3;
