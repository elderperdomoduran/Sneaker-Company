import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar, Container, Grid, Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import thumbnail from "./images/image-product-1-thumbnail.jpg";

export default function ProductPage() {
  return (
    <Container>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            sneakers
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit">Collections</Button>
            <Button color="inherit">Men</Button>
            <Button color="inherit">Women</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Box>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box>
            <img src={thumbnail} alt="Product" style={{ width: '100%', borderRadius: '8px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {/* Thumbnails */}
              {[thumbnail, thumbnail, thumbnail, thumbnail].map((img, index) => (
                <img key={index} src={img} alt={`Thumbnail ${index + 1}`} style={{ width: '80px', height: '80px', borderRadius: '8px', margin: '0 8px', border: '2px solid transparent' }} />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#FF7D1B' }}>
              SNEAKER COMPANY
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
              Fall Limited Edition Sneakers
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                $125.00
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, backgroundColor: '#FF7D1B', color: 'white', borderRadius: '4px', px: 1 }}>
                50%
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary', mt: 1 }}>
              $250.00
            </Typography>

            {/* Add to Cart Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '8px', mr: 2 }}>
                <Button>-</Button>
                <Typography sx={{ mx: 2 }}>0</Typography>
                <Button>+</Button>
              </Box>
              <Button variant="contained" sx={{ flexGrow: 1, backgroundColor: '#FF7D1B', '&:hover': { backgroundColor: '#FFAC6A' }, color: 'white', borderRadius: '8px', textTransform: 'none' }}>
                <ShoppingCartIcon sx={{ mr: 1 }} /> Add to cart
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
