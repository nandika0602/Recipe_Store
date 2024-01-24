// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
import { Typography, Button, Card, CardContent, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    //The sx prop is used to apply inline styles
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Card
        sx={{
          backgroundColor: "#f5f5f5",
          width: '50%',
          height: "60%",
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
            color: "#0000FF",
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            padding: "10%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            LOGIN
          </Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{}}
          />
          <br />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br />
          <Link to="/">
            <Button variant="contained" sx={{ height: "50px", width: "100%" }}>
              Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Login;
