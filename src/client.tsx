import { useState } from 'react';
import { Button, Textarea, Text, Flex } from '@chakra-ui/react';

interface IClientProps {
  clientId: number|string;
  onSync: (clientId: number|string)=>string;
};

const Client = ({clientId, onSync}:IClientProps)=> {
  const [isSync, setIsSync] = useState(false);
  const [text, setText] = useState('');

  const onClick = ()=>{
    setIsSync(true);
    setText(onSync(clientId)); // TODO: call wasm function
    setIsSync(false);
  }

  const onChange = (e:any)=> {
    if(!isSync) {
      const t = e.target.value;
      setText(t)
      // TODO call wasm function
    }
  }

  return (
      <Flex w='300px' h="300px" direction='column'>
        <Text m='8px'> Client: {clientId}</Text>
        <Textarea value={text} onChange={onChange} flex='1' placeholder='Here is a sample placeholder' resize='none'/>
        <Button onClick={onClick}>获取同步</Button>
      </Flex>
  );
}

export default Client;
