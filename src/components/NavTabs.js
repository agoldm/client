import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Link to={props.href}>
      {/* Define text decoration */}
      <Tab
        label={props.label}
        sx={{ color: "secondary.main", textDecoration: "none", mx: 2 }}
      />
    </Link>
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" textColor='secondary'>
        <LinkTab label="תמיכה ומידע " href="/information" />
        <LinkTab label="חוגים" href="/courses" />
        <LinkTab label="מורים" href="/teachers" />
        <LinkTab label="צאט" href="/chat-web-socket" />
      </Tabs>
    </Box>
  );
}
