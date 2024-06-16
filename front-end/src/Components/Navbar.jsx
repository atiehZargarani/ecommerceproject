import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/Slices/AuthSlice';
import { Link } from 'react-router-dom';


export default function MenuAppBar() {
  const { token } = useSelector((state) => state.auth)

  const basketLength = useSelector((state) => state.basket.list).length
  const khodeBasket = useSelector((state) => state.basket.list)
  const dispath = useDispatch()
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const pages = [{
    title: 'خانه',
    path: '/'
  },
  {
    title: 'درباره ما',
    path: '/about'
  },
  {
    title: 'محصولات',
    path: '/products'
  },

  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static" className='rounded-5 mx-auto mt-3' sx={{ bgcolor: `navbar`, width: { lg: '60%', md: '75%', sm: "70%", xs: "90%" } }}>
          <Toolbar sx={{ padding: { xs: '0px', sm: "0px" }, }}>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: "flex", md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}

              >
                <MenuIcon sx={{ color: "#76523de8", fontSize: "2rem" }} />
              </IconButton>
              <Menu

                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                
                  display: { xs: 'block', md: 'none' },
                }}
              >

                {pages.map((page) => (
                  <MenuItem onClick={handleCloseNavMenu} >
                    <Link to={page.path} style={{ color: "#442e21" ,textAlign:"center"}}>
                      {page.title}</Link>

                  </MenuItem>

                ))}
                <MenuItem>
                  <Link style={{ color: "#442e21" }} to='/basket'>
                    سبد خرید
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/login' onClick={() => token ? dispath(logout()) : null} style={{ color: "#442e21" }}>
                    {token ? "خروج" : "ورود به حساب"}

                  </Link>
                </MenuItem>


              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", gap: "2rem" }}>
              {pages.map((page,index) => (
                <Link
                key={index}
                  style={{ color: '#cb9765' }}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
            
            <Box >
              <img

                style={{ width: '100px', height: '70px', borderRadius: '50%' }}
                src="Assets/Images/Coffee-Shop.png"

              />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: "none", md: 'flex' }, justifyContent: "center", alignItems: 'center', gap: "2rem" }}>

              <Link to='/basket' style={{ color: '#cb9765' }}>
                <Badge color='error' showZero={false} badgeContent={basketLength > 0 ? basketLength : 0} >
                  سبد خرید
                  <ShoppingCartIcon fontSize='medium' />

                </Badge>
              </Link>
              <Link to='/login' onClick={() => token ? dispath(logout()) : null} style={{ color: '#cb9765' }}>
              {token ? "خروج" : "ورود به حساب"}
                {token ? <LogoutIcon fontSize='medium' /> : <PersonIcon fontSize='medium' />}

              </Link>
             


            </Box>

          </Toolbar>
        </AppBar>
      </Box>
 
  );
}