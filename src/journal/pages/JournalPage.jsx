import { JournalLayout } from "../layout"
import { NothigSelectedView } from "../components/NothigSelectedView"
import { NoteView } from "../components/NoteView"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  const haveNote = false
  return (
    <JournalLayout>
      {haveNote ?
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
      >
        <AddOutlined sx={{fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
