import React from "react";
import "animate.css";
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoMdAirplane } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiUser, BiChevronDown } from "react-icons/bi";
import { BsCalendar4 } from "react-icons/bs";
import mountain from "../../assets/Images/mountain.jpg";
import { useState } from "react";

const NavBar = () => {
  const [animae, setAnimae] = useState(false);
  const handleClick = (e) => {
    setAnimae((prev) => !prev);
    if (animae) {
      e.target.classList.add("animate__shakeX");
      e.target.classList.remove("animate__bounce");
    } else {
      e.target.classList.remove("animate__shakeX");
      e.target.classList.add("animate__bounce");
    }
  };
  return (
    <Box
      w={"100%"}
      minHeight={"780px"}
      position={"relative"}
      px={20}
      pt={5}
      sx={{
        backgroundImage: `url(${mountain})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
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
          "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.580838) 32.24%, rgba(0, 0, 0, 0.486293) 62.09%, rgba(0, 0, 0, 0) 98.06%)",
      }}
    >
      <HStack w={"100%"} zIndex={1000}>
        <Flex
          w={"50%"}
          minheight={"20px"}
          sx={{
            "@media (min-width:1280px) and (max-width:1439px)": {
              gap: 1,
              w: "65%",
            },
          }}
        >
          <Center
            mx={2}
            w={"35%"}
            display="flex"
            align="center"
            justifyContent={"flex-start"}
            minheight={"20px"}
          >
            <Circle
              border={"1px dashed gray"}
              zIndex={1000}
              p={1}
              mr={3}
              cursor={"pointer"}
            >
              <IoMdAirplane className="transform" size="20px " />
            </Circle>
            <Text
              color="white"
              zIndex={1000}
              fontWeight={700}
              fontSize={"20px"}
              lineHeight="30px"
              cursor={"pointer"}
            >
              Arctic Travels
            </Text>
          </Center>

          <Stack
            direction={"row"}
            zIndex={1000}
            w={"50%"}
            align="center"
            color={"white"}
            justify={"space-between"}
            fontWeight={400}
            fontSize={"12px"}
            lineHeight="21px"
          >
            <Text cursor={"pointer"}>About us</Text>
            <Text cursor={"pointer"}>Support</Text>
            <Text cursor={"pointer"}>Language</Text>
          </Stack>
        </Flex>
        <Spacer />
        <Button
          width={"151px"}
          height="48px"
          padding={"14px 30px 14px 30px"}
          borderRadius={"10px"}
          backgroundColor={"white"}
          zIndex={1000}
          fontWeight={600}
          fontSize={"14px"}
          lineHeight="21px"
          color="#3E86F5"
          _active={{ border: "none" }}
          _focus={{ border: "none" }}
          className={"animate__animated"}
          border={"none"}
          onClick={handleClick}
          sx={{
            _hover: {
              transform: "scale(.97)",
            },
          }}
        >
          Sign in
        </Button>
      </HStack>

      <VStack
        width="100%"
        zIndex={1000}
        mt={20}
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
          className={"animate__animated animate__backInDown"}
          mb={-10}
        >
          Plan the perfect winter trip
        </Text>

        <Text
          fontWeight={400}
          fontSize={"22px"}
          lineHeight="33px"
          color="#ffffff"
          zIndex={1000}
          width={"529px"}
          className={"animate__animated animate__lightSpeedInRight"}
          height="69px"
        >
          Easily plan your ideal ski trip from home with the help of
          professionals
        </Text>

        <Button
          fontWeight={400}
          color="#ffffff"
          zIndex={1000}
          width={"183px"}
          height="64px"
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
          onClick={handleClick}
          className={"animate__animated"}
        >
          Book Here
        </Button>
      </VStack>

      {/* Absolute */}

      <HStack
        position="absolute"
        zIndex={2000}
        w={"1200px"}
        minH={"140px"}
        left={"120px"}
        top={"514px"}
        bgColor={"white"}
        boxShadow="0px 134px 193px rgba(183, 183, 183, 0.07), 0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035)"
        borderRadius={"10px"}
        pl={5}
        pr={3}
        sx={{
          "@media (min-width:1280px) and (max-width:1439px)": {
            left: "100px",
            top: "700px",
            w: "1100px",
          },
          "@media (min-width:1440px) and (max-width:1980px)": {
            left: "140px",
            top: "700px",
          },
          "@media (min-width:1920px)": {
            left: "200px",
            top: "700px",
            w: "1500px",
          },
        }}
      >
        <VStack zIndex={2000} w={"20%"} align="flex-start">
          <Flex align={"center"} gap={3}>
            <HiOutlineLocationMarker color={"#3E86F5"} size={"20px"} />
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              Location
            </Text>
          </Flex>

          <Flex align={"center"}>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              Iceland
            </Text>
            <BiChevronDown size={"20px"} />
          </Flex>
        </VStack>

        <VStack zIndex={2000} w={"20%"} align="flex-start">
          <Flex align={"center"} gap={3}>
            <BiUser color={"#00C07B"} size={"20px"} />
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
              textTransform={"capitalize"}
            >
              persons
            </Text>
          </Flex>

          <Flex align={"center"}>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              4 Persons
            </Text>
            <BiChevronDown size={"20px"} />
          </Flex>
        </VStack>

        <VStack zIndex={2000} w={"20%"} align="flex-start">
          <Flex align={"center"} gap={3}>
            <BsCalendar4 color={"#CC0024"} size={"20px"} />
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              CHECK IN
            </Text>
          </Flex>

          <Flex align={"center"}>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              12 January 2022
            </Text>
            <BiChevronDown />
          </Flex>
        </VStack>

        <VStack zIndex={2000} w={"20%"} align="flex-start">
          <Flex align={"center"} gap={3}>
            <BsCalendar4 color={"#CC0024"} size={"20px"} />
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#929191"
              zIndex={1000}
            >
              CHECK OUT
            </Text>
          </Flex>

          <Flex align={"center"}>
            <Text
              fontWeight={500}
              fontSize={"16px"}
              lineHeight="24px"
              color="#000"
              zIndex={1000}
            >
              18 January 2022
            </Text>
            <BiChevronDown size={"20px"} />
          </Flex>
        </VStack>

        <Button
          fontWeight={400}
          color="#ffffff"
          zIndex={1000}
          width={"183px"}
          height="64px"
          rightIcon={<IoMdAirplane className="transform2" size={"20px"} />}
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
          Book Trip
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;
