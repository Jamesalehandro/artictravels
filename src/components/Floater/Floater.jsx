import React from 'react';
import { Circle, Flex, HStack, Image, Stack } from '@chakra-ui/react';
import nike from '../../assets/Images/nike.png';
import pay from '../../assets/Images/pay.png';
import apple from '../../assets/Images/apple.png';
import star from '../../assets/Images/star.png';
import intra from '../../assets/Images/intra.png';
import mastercard2 from '../../assets/Images/mastercard2.png';

const Floater = () => {
  return (
    <HStack
      w={'100%'}
      minH={'27vh'}
      align={'flex-end'}
      justify={'center'}
      bgColor={'#F7F8FB'}
      pb={[2, 2, 2, 10, 10]}
    >
      <Stack
        position="relative"
        direction="row"
        width={['100%', '100%', '70%']}
        border={'1px solid black'}
        minH={'5vh'}
        align="center"
        justify="space-between"
        px={[0, 10]}
      >
        <Flex
          direction="column"
          cursor="pointer"
          display={['none', 'none', 'none', 'flex']}
        >
          <Image src={nike} boxSize={'65px'} />
        </Flex>

        <Flex
          align="center"
          justify="center"
          cursor="pointer"
          display={['none', 'none', 'none', 'flex']}
        >
          <Image src={apple} pb={3} mr={2} />
          <Image src={pay} />
        </Flex>

        <Flex align="center" justify="center" cursor="pointer">
          <Image src={star} />
        </Flex>

        <Flex align="center" justify="center" cursor="pointer">
          <Image src={intra} />
        </Flex>

        <Flex
          align="center"
          justify="center"
          direction="column"
          cursor="pointer"
        >
          <Image src={mastercard2} boxSize={'65px'} />
        </Flex>
      </Stack>
    </HStack>
  );
};

export default Floater;
