import { Route, Routes } from "react-router-dom";
import EdwardDialog from "./EdwardDialog/EdwardDialog";
import JhonDialog from "./JhonDialog/JhonDialog";

const MessagesContent = (props) => {

    return (
        <div className="messages-content">
            <Routes>
                <Route path="/dialogs/jhon" element={<JhonDialog />} />
                <Route path="/dialogs/edward" element={<EdwardDialog />} />
            </Routes>
        </div>
    )
}

export default MessagesContent;