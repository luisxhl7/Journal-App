import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const Sidebar = ({drawerWidth}) => {
    const { displayName } = useSelector( state => state.auth)
    return (
        <Box
            component='nav'
            sx={{width: { sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: {sx: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'> {displayName} </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {
                        ['enero','febreo','marzo', 'abril'].map((item, idx) => (
                            <ListItem key={idx} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={item}/>
                                    <ListItemText primary={'asdasdasdasd asd a sdasd asdas das das'}/>
                                </Grid>
                            </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

Sidebar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
};
