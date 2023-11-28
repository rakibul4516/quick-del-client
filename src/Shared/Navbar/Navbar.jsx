import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
const pages = ['Home', 'DashBoard', 'Login'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { users, signoutUser } = useAuth()
    console.log(users)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    //Handle logout
    const handleLogout = () => {
        signoutUser()
            .then(res => {
                console.log(res)
            })
    }
    return (
        <AppBar sx={{ maxWidth: 1240, backgroundColor: "#e9ece3" }} position="static">
            <Container >
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        QuickDel
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        QuickDel
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', justifyItems: 'center', marginRight: "20px" } }}>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            DashBoard
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Contact
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            <NotificationsIcon />
                        </Button>
                    </Box>

                    {
                        users ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={users?.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: 1 }} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{users.displayName}</Typography>
                                    <Link to='/dashboard'>
                                        <Typography textAlign="center" >DashBoard</Typography>
                                    </Link>
                                    <Typography onClick={handleLogout} textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box> : <Link to="login"><Button variant="contained">Login</Button></Link>

                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;