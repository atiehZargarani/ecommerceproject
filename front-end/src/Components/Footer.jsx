import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{backgroundColor:"bg1",marginTop:"5rem"}}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text1" gutterBottom>
             درباره ما
            </Typography>
            <Typography variant="body2" color="text.secondary">
         اولین و جامع ترین دایرکتوری قهوه ، کافی شاپ ، کافه ، کافه قنادی ، تجهیزات ، لوازم و مواد اولیه کافی شاپ و همچنین تمامی مشاغل و خدمات مرتبط با قهوه و کافی شاپ در ایران می باشد......    <Link className="my-5" style={{color:"#cc955f"}} to={'/about'}>بیشتر</Link>
            </Typography>
        
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text1" gutterBottom>
             تماس باما
            </Typography>
            <Typography variant="body2" color="text.secondary">
              مشهد,بلوار دانششجو,دانشجو ۱۷
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: atiehzargarani@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: 09017542799
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text1" gutterBottom>
             شبکه های اجتماعی 
            </Typography>
            <Link href="https://www.facebook.com/" style={{color:"#cc955f"}} className="mx-2">
              <Facebook />
            </Link>
            <Link
             className="mx-2"
              href="https://www.instagram.com/"
              style={{color:"#cc955f"}}
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link  className="mx-2" href="https://www.twitter.com/" style={{color:"#cc955f"}}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography  variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link style={{color:"#cc955f"}} href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}