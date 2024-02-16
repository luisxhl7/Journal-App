import PropTypes from "prop-types";
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { startViewNote } from "../../store/thunks/startViewNote";


export const SidebarItem = ({id, title, body, date, imageUrls}) => {
    const dispatch = useDispatch()

    const newTitle = useMemo( () => {
        return title?.length > 17 
            ? title.substring(0,17) + '...'
            :   title
    }, [title])

    const handleViewNote = () => {
        dispatch(startViewNote({id, title, body, date, imageUrls}))
    }
    
    return (
        <ListItem disablePadding key={id} onClick={handleViewNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} title={newTitle}/>
                    <ListItemText primary={body}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

SidebarItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imageUrls: PropTypes.string,
};
