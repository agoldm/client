import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

function ChatFab() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="large" color="primary" aria-label="chat" sx={{ position: 'absolute', bottom: 10, left: 10, flex: 1 }}>
        <ChatIcon />
      </Fab>
    </Box>
  );
}

export default ChatFab;
