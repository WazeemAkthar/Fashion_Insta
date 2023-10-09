import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,

  Typography,
} from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#320001",
        marginTop: "80px",
      }}
    >
      <Container sx={{}}>
        <Box sx={{ width: "100%", padding: "80px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={4} container>
              <Typography variant="h6" sx={{ color: "white" }}>
                Have Something to talk about with our professionals?
              </Typography>
              <Box
                component="form"
                sx={{
                 p: "0px 2px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                  height:"50px",
                  borderRadius: "50px",
                  border:"2px solid",
                  color:"white",
                  marginLeft:"-10px"
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, color:"white" }}
                  placeholder="Type your mail here"
                  inputProps={{ "aria-label": "Type your mail here" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px", borderRadius:"100px", backgroundColor:"orange", "&:hover":{backgroundColor:"orange"} }}
                  aria-label="search"
                >
                  <ArrowOutwardIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid xs={2}> </Grid>

            <Grid xs={6} container>
              <Grid xs={4}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Manu
                </Typography>
                <List sx={{ marginLeft: "-15px", color: "white" }}>
                  <ListItem>About Us</ListItem>
                  <ListItem>Newsroom</ListItem>
                  <ListItem>Careers</ListItem>
                  <ListItem>Partnerships</ListItem>
                </List>
              </Grid>
              <Grid xs={4}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Get Help
                </Typography>
                <List sx={{ marginLeft: "-15px", color: "white" }}>
                  <ListItem>Support Center</ListItem>
                  <ListItem>24h Service</ListItem>
                  <ListItem>Quick Chat</ListItem>
                </List>
              </Grid>
              <Grid xs={4}>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Support
                </Typography>
                <List sx={{ marginLeft: "-15px", color: "white" }}>
                  <ListItem>FAQ</ListItem>
                  <ListItem>Policy</ListItem>
                  <ListItem>Business</ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
