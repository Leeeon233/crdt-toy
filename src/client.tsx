import { useState } from 'react';
import { Button, Textarea, Text, Flex } from '@chakra-ui/react';
import {diff} from "./utils";
import {Action} from "../wasm_dist";

interface IClientProps {
  clientId: number;
  onSync: (clientId: number)=>string;
  onActions: (clientId: number, actions: Action[])=>void;
}

const Client = ({clientId, onSync, onActions}:IClientProps)=> {
  const [isSync, setIsSync] = useState(false);
  const [text, setText] = useState('');

  const onClick = ()=>{
    setIsSync(true);
    setText(onSync(clientId)); // TODO: call wasm function
    setIsSync(false);
  }

  const onChange = async (e:any)=> {
    if(!isSync) {
      const t = e.target.value;
      const actions = diff(text, t);
      onActions(clientId, actions);
      setText(t)
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
