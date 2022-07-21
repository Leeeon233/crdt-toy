import { useEffect, useState } from 'react';
import { sumOfSquares, init } from './wasmEntry';
import { Box, Center, Text, Textarea, Container, HStack, VStack  } from '@chakra-ui/react';
import Client from './client';

function App() {
  const [finalText, setFinalText] = useState('');
  useEffect(() => {
    (async () => {
      await init();
      console.log(sumOfSquares(1, 2));
    })();
  }, []);

  const onSync = (clientId: number|string)=>{
    return "hhh"
  };

  return (
    <div className="App">
      <Container w='100%' h="100vh">
        <Center>
          <VStack spacing='50'>
            <HStack spacing='200' pt='100'>
              <Client clientId={1} onSync={onSync}/>
              <Client clientId={2} onSync={onSync}/>
            </HStack>
            <Box w='100%'>
              <Center>
              <Text fontSize='3xl'>After Sync :</Text>
              </Center>
              <Textarea value={finalText} h='300' resize='none' isDisabled/>
            </Box>
          </VStack>
        </Center>
      </Container>
    </div>
  );
}

export default App;
