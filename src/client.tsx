import { useEffect, useState } from 'react';
import { Box, Center,Button, Textarea, Text, Circle,Flex , Container, Stack, HStack, VStack  } from '@chakra-ui/react';

interface IClientProps {
  clientId: number|string;
};

const Client = ({clientId}:IClientProps)=> {

  return (
      <Flex w='300px' h="300px" direction='column'>
        <Text m='8px'> Client: {clientId}</Text>
        <Textarea flex='1' placeholder='Here is a sample placeholder' resize='none'/>
        <Button>获取同步</Button>
      </Flex>
  );
}

export default Client;
