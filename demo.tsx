import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '@mui/lab/TabPanel';
import {
  toggleButtonClasses,
  ToggleButton,
  OpenReason,
  TimePicker,
} from '@mui/lab';

let s = (
  <div>
    |
    <iframe
      className="app-frame container"
      style={{
        diplay: 'flex',
        boxSizing: 'content-box',
        width: '100vw',
        height: '100vw',
      }}
      src="https://ows-auth.vercel.app/login"
      sandbox="allow-all allow-forms allow-scripts allow-sameorign"
    />
    Окно №1
  </div>
);



const TabFrame = (ctx) => {
  //   <TabContext value={value}>
  //   <TimePicker />
  //   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //     <TabList
  //       onChange={handleChange}
  //       aria-label="lab API tabs example"
  //     ></TabList>
  //   </Box>
  //   <TabFrame />
  //   <TabPanel value="1">
  //     <Frame />
  //   </TabPanel>
  //   <TabPanel value="2">Item Two</TabPanel>
  //   <TabPanel value="3">Item Three</TabPanel>
  // </TabContext>
  return <Tab label="Окно №1" value="1" />;
};

const Frame = (config) => {
  return <div>123</div>;
};

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Box>
      <header>
        <div>Окно</div>
        <div>В очереди</div>
        <div>В очереди</div>
      </header>
    </Box>
  );
}
