import io from "socket.io-client";
import React from "react";
import { Box, TextField, Dialog, DialogTitle, DialogContent, IconButton, DialogActions, Typography, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

function Chat({ open, setOpen }) {

    const socket = React.useMemo(() => {
        let s = io.connect("http://localhost:8080", {
            query: { token: localStorage.getItem('token') || "" }
        });
        s.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
        return s;
    }, [])

    const [currentMessage, setCurrentMessage] = React.useState("");
    const [messageList, setMessageList] = React.useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                message: currentMessage,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            // setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <Dialog fullWidth maxWidth='sm' open={open}>
            <DialogTitle>צאט</DialogTitle>
            <IconButton onClick={() => setOpen(false)} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Box sx={{ width: 1, height: '60vh' }}>
                    {messageList.map(m => {
                        return (
                            <Paper elevation={0} sx={{ mb: 3 }} >
                                <Typography variant="subtitle2">{m.name}</Typography>
                                <Typography variant="h6">{m.message}</Typography>
                            </Paper>
                        )
                    })}
                </Box>
            </DialogContent>
            <DialogActions>
                <TextField
                    variant="standard"
                    fullWidth
                    label="הקש את הודעתך כאן"
                    size="small"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <IconButton onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </DialogActions>
        </Dialog>
    );
}
export default Chat;