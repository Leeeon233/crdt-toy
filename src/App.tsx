import { useEffect, useState } from 'react';
import { init, Document, Action } from './wasmEntry';
import { Box, Center, Text, Textarea, Container, HStack, VStack  } from '@chakra-ui/react';
import Client from './client';

let doc1: Document|null = null;
let doc2: Document|null = null;
let docAll: Document|null = null;

interface IAction {
  position: number;
  action: string;
  char: string;
}

function App() {
  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    (async () => {
      await init();
      doc1 = new Document(1);
      doc2 = new Document(2);
      docAll = new Document(3);
    })();
  }, []);

  const onSync = (clientId: number)=>{
    switch (clientId) {
      case 1: {
        doc1?.merge(doc2!);
        return doc1?.content();
      }
      case 2: {
        doc2?.merge(doc1!);
        return doc2?.content();
      }
    }
  };

  const onActions = async (clientId: number, actions: IAction[])=>{
    let doc;
    switch (clientId) {
        case 1: doc = doc1; break;
        case 2: doc = doc2; break;
    }
    actions.forEach((action)=>{doc?.add_action(new Action(action.position, action.action, action.char))})
    actions.forEach(action=>{ docAll?.add_action(new Action(action.position, action.action, action.char)) });
    setFinalText(docAll?.content() || '');
  }

  return (
    <div className="App">
      <Container w='100%' h="100vh">
        <Center>
          <VStack spacing='50'>
            <HStack spacing='200' pt='100'>
              <Client clientId={1} onSync={onSync} onActions={onActions}/>
              <Client clientId={2} onSync={onSync} onActions={onActions}/>
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
