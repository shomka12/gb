import {useState, useEffect} from 'react';
import {Container, Paper, Button, TextField } from '@mui/material';

export const Message = () => {
    const [messageList, setMessageList] = useState([])
    const [value, setValue] = useState()

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList]
        const newMessage = {
            author,
            text,
        }
        newMessageList.push(newMessage)
        setMessageList(newMessageList)
    }

const resetForm = () => {
    setValue()
}

const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage('user', value)
    resetForm()
}

const onChangeMessageInput = (event) => {
    setValue(event.target.value)
}

useEffect(() => {
    if (messageList.length === 0) {
        return
    }

    const tail = messageList[messageList.length-1]
    if (tail.author === 'bot') {
        return
    }

    sendMessage('bot', 'hello')


}, [messageList])

return (
    <Container sx={{
        display:'flex',
        alignItems:'center',
        height: '100vh'
      }}
      maxWidth='sm'>
        <Paper 
          sx={{
            margin:2,
            padding:3,
            height: '80vh',
            width: '67%',
            boxShadow: 2,
          }}>
        <form onSubmit={onSubmitMessage}>
            <TextField 
            onChange={onChangeMessageInput}
            placeholder='type message'
            value={value}
            type='text'
            size="small"
            />
            <Button 
                type='submit' 
                variant='contained'>send
            </Button>
        </form>
        <ul>
            {
                messageList.map((item, index) => (
                    <li key={index}>
                        {item.author} - {item.text}
                    </li>
                ))
            }
        </ul>
    </Paper>
    </Container>

)
}