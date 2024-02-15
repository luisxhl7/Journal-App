import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({drawerWidth}) => {
    const { notes } = useSelector(state => state.journal)
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
                        notes?.map( item => (
                            <SidebarItem 
                                id={item?.id} 
                                key={item?.id} 
                                title={item?.title} 
                                body={item?.body} 
                                date={item?.date}
                                imageUrls={item?.imageUrls}
                            />
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
