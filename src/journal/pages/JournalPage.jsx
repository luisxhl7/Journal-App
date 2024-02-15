import { JournalLayout } from "../layout"
import { NothigSelectedView } from "../components/NothigSelectedView"
import { NoteView } from "../components/NoteView"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/thunks/startNewNote"

export const JournalPage = () => {
  const dispatch = useDispatch()  
  const {isSaving, active} = useSelector( state => state.journal)

  const handleAddNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {!!active ? // eslint-disable-line no-extra-boolean-cast
        <NoteView/>
        :
        <NothigSelectedView/>
      }
      <IconButton
        size="large"
        sx={{
          color: 'white', 
          backgroundColor:'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,

        }}
        disabled={isSaving}
        onClick={handleAddNote}
      >
        <AddOutlined sx={{fontSize: 30 }}/>
        </IconButton>
    </JournalLayout>
  )
}
