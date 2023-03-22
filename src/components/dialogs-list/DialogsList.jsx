import { NavLink } from "react-router-dom";

const DialogsList = (props) => {
    return (
        <div className="dialogs-list">
            <div className="dialogs">
                Список диалогов
            </div>
            <NavLink to="/dialogs/jhon" className="dialogNav">
                <div className="dialog">
                    <div><img src="https://img.freepik.com/premium-vector/man-hair-style-mascot-logo-barbershop_96853-423.jpg" /></div>
                    <div>Jhon</div>
                </div>
            </NavLink>
            <NavLink to="/dialogs/edward" className="dialogNav">
                <div className="dialog">
                    <div><img src="https://img.freepik.com/free-vector/cool-beard-man-barber-head-with-glasses-cartoon-vector-icon-illustration-people-barber-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3960.jpg" /></div>
                    <div>Edward</div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogsList;