import React from "react";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import palmTree from "../../assets/Images/picture.png";
import boat from "../../assets/Images/boat.png";
import snow from "../../assets/Images/snow.png";
import property from "../../assets/Images/Property.png";

const Section4 = () => {
  return (
    <Box w={"100%"} minH={"700px"} display={"flex"} pt={20} mb={20}>
      <VStack w={"50%"} minH={"700px"} align="flex-start" pl={20}>
        <Text
          fontWeight={"bold"}
          fontSize={"30px"}
          lineHeight="54px"
          w={"570px"}
          textAlign={"left"}
          pl={20}
        >
          The best resorts to chill and relax
        </Text>

        <Flex
          width="100%"
          minH={"200px"}
          direction="column"
          align={"flex-end"}
          pr={4}
        >
          <Image src={palmTree} height={"500px"} mb={6} objectFit="cover" />
          <Image src={boat} height={"500px"} mb={6} objectFit="cover" />
        </Flex>
      </VStack>

      <VStack w={"50%"} minH={"700px"}>
        <Flex
          width="100%"
          minH={"200px"}
          direction="column"
          align={"flex-start"}
          pl={4}
          pt={2}
        >
          <Box
            position={"relative"}
            mb={6}
            borderRadius={"10px"}
            _after={{
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%)",
            }}
          >
            <Image src={property} height={"500px"} objectFit="cover" />

            <VStack
              position="absolute"
              bottom="30px"
              w={"100%"}
              //   border="2px solid red"
              pl={5}
              align="flex-start"
              pr={7}
              gap={2}
            >
              <Text
                w={"255px"}
                height={"25px"}
                fontSize="18px"
                lineHeight="40px"
                fontWeight={600}
                color={"white"}
                zIndex={200000}
              >
                Winter landscape Chalet
              </Text>

              <Text
                w={"255px"}
                height={"25px"}
                fontSize="14px"
                lineHeight="27px"
                fontWeight={500}
                color={"rgba(255, 255, 255, 0.5)"}
                zIndex={200000}
                textAlign="left"
              >
                Cambodia
              </Text>

              <Button
                fontWeight={400}
                color="#ffffff"
                zIndex={1000}
                width={"100%"}
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
                Book now
              </Button>
            </VStack>
          </Box>
          <Image src={snow} height={"500px"} mb={6} objectFit="cover" />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Section4;
