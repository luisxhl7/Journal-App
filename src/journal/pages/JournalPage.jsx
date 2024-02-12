import { JournalLayout } from "../layout"
import { NothigSelectedView } from "../components/NothigSelectedView"
import { NoteView } from "../components/NoteView"

export const JournalPage = () => {
  const haveNote = true
  return (
    <JournalLayout>
      {haveNote ?
        <NoteView/>
        :
        <NothigSelectedView/>
      }
    </JournalLayout>
  )
}
