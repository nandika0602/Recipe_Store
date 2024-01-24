import { Button, Stack } from "@mui/material";
// IconButton
//IconButton : only for icon without any text
//need to install a library to use icon [ npm install @mui/icons-material ]
//for icon => need to import the icon from material-ui
// import SendIcon from '@mui/icons-material/Send'

const ButtonUI = () => {
  return (
    //The Stack component allows you to easily organize your UI elements in a stack, either vertically or horizontally, without having to manually handle spacing and alignment. It helps in creating clean and consistent designs by abstracting away the styling details.
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Add
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
      <Stack direction={'row'} spacing={2} display={'block'}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </Stack>
    </Stack>
  );
};

export default ButtonUI;
