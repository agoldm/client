import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

function ChatFab() {
  return (
    <Box >
      {/* sx={{position: 'absolute', bottom: 100, left: 100 }} */}
      <Fab size="large" color="primary" aria-label="chat" >
        <ChatIcon />
      </Fab>
    </Box>
  );
}

export default ChatFab;
