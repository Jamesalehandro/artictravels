import React from 'react';
import {
  Box,
  Circle,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoMdAirplane } from 'react-icons/io';
import { RiFacebookFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      width="100%"
      minH={'500px'}
      display={'flex'}
      align={'center'}
      justify={'center'}
      flexDirection={['column', 'column', 'column', 'row', 'row']}
    >
      <VStack
        w={'50%'}
        minH={'200px'}
        align={'flex-start'}
        ml={20}
        mt={10}
        mb={3}
      >
        <Circle
          zIndex={1000}
          p={2}
          cursor={'pointer'}
          background={'#fff'}
          border="0.1px solid #C1C0C0"
          mb={4}
        >
          <IoMdAirplane className="transform" size="20px" />
        </Circle>

        <Text
          width="122px"
          minHeight="26px"
          fontSize="16px"
          fontWeight={600}
          textAlign="left"
          lineHeight="35px"
          mb={2}
        >
          Artic Travels
        </Text>

        <Text
          width="217px"
          minHeight="26px"
          fontSize="12px"
          fontWeight={500}
          textAlign="left"
          lineHeight="20px"
        >
          Book your trip in minutes, get full control for much longer.
        </Text>

        <HStack
          width={'100%'}
          gap={4}
          pt={6}
          display={['none', 'none', 'none', 'none', 'flex']}
        >
          <Circle
            zIndex={1000}
            p={2}
            cursor={'pointer'}
            background={'#fff'}
            border="0.3px solid #C1C0C0"
          >
            <RiFacebookFill color={' rgba(62, 134, 245, 1)'} size="20px " />
          </Circle>

          <Circle
            zIndex={1000}
            p={2}
            cursor={'pointer'}
            background={'#fff'}
            border="0.3px solid #C1C0C0"
          >
            <AiFillInstagram size="20px" color={' rgba(62, 134, 245, 1)'} />
          </Circle>

          <Circle
            zIndex={1000}
            p={2}
            cursor={'pointer'}
            background={'#fff'}
            border="0.3px solid #C1C0C0"
          >
            <FaTwitter size="20px" color={' rgba(62, 134, 245, 1)'} />
          </Circle>
        </HStack>

        <Spacer />

        <Text
          width="326px"
          minHeight="26px"
          fontSize="13px"
          fontWeight={400}
          textAlign="left"
          lineHeight="35px"
          pb={2}
          cursor={'pointer'}
          display={['none', 'none', 'none', 'none', 'flex']}
        >
          &copy;2022 Arctic Travels - All right reserved.
        </Text>
      </VStack>

      <HStack
        w={['100%', '100%', '100%', '100%', '30%']}
        align="flex-start"
        flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}
        mt={10}
        mb={3}
        gap={5}
        pl={10}
      >
        <VStack
          w={['40%', '40%', '40%', '50%', '30%']}
          minH={'100%'}
          align="flex-start"
        >
          <Text
            width="80px"
            minHeight="21px"
            fontSize="14px"
            fontWeight={500}
            textAlign="left"
            lineHeight="21px"
            color="#3E86F5"
            mb={5}
            cursor={'pointer'}
          >
            COMPANY
          </Text>

          <Stack
            minHeight="21px"
            fontSize="12px"
            fontWeight={400}
            textAlign="left"
            lineHeight="21px"
            color="#031530"
            fontStyle={'normal'}
            gap={3}
          >
            <Text cursor={'pointer'}>About</Text>
            <Text cursor={'pointer'}>Careers</Text>
            <Text cursor={'pointer'}>Mobile</Text>
          </Stack>

          <Spacer />
          <Text
            width="326px"
            minHeight="26px"
            fontSize="13px"
            fontWeight={400}
            textAlign="left"
            lineHeight="35px"
            pb={2}
            cursor={'pointer'}
          >
            Privacy Policy
          </Text>
        </VStack>

        <VStack
          w={['40%', '40%', '40%', '50%', '30%']}
          minH={'100%'}
          align="flex-start"
        >
          <Text
            width="80px"
            minHeight="21px"
            fontSize="14px"
            fontWeight={500}
            textAlign="left"
            lineHeight="21px"
            color="#3E86F5"
            mb={5}
            cursor={'pointer'}
          >
            Contact
          </Text>

          <Stack
            minHeight="21px"
            fontSize="12px"
            fontWeight={400}
            textAlign="left"
            lineHeight="21px"
            color="#031530"
            fontStyle={'normal'}
            gap={3}
          >
            <Text cursor={'pointer'}>FAQ</Text>
            <Text cursor={'pointer'}>Press</Text>
            <Text cursor={'pointer'}>Affiliates</Text>
          </Stack>

          <Spacer />

          <Text
            width="326px"
            minHeight="26px"
            fontSize="13px"
            fontWeight={400}
            textAlign="left"
            lineHeight="35px"
            pb={2}
          >
            Terms of Use
          </Text>
        </VStack>

        <VStack
          w={['40%', '40%', '40%', '50%', '30%']}
          minH={'100%'}
          align="flex-start"
        >
          <Text
            width="80px"
            minHeight="21px"
            fontSize="14px"
            fontWeight={500}
            textAlign="left"
            lineHeight="21px"
            color="#3E86F5"
            mb={5}
            cursor={'pointer'}
          >
            MORE
          </Text>

          <Stack
            minHeight="21px"
            fontSize="12px"
            fontWeight={400}
            textAlign="left"
            lineHeight="21px"
            color="#031530"
            fontStyle={'normal'}
            gap={3}
          >
            <Text cursor={'pointer'}>Airlines</Text>
            <Text cursor={'pointer'}>Airfees</Text>
            <Text cursor={'pointer'}>Lowfare Tips</Text>
          </Stack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;
