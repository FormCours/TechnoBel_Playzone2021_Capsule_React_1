import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TodoList = () => {

    const tasks = useSelector(state => state.todo.tasks)

    const taskJSX = tasks.map(t => (
        <ListItem key={t.id}>
            <ListItemText 
                primary={t.title}
                secondary={t.desc}
            />
        </ListItem>
    ))

    return (<>
        <h2>Liste de tache</h2>
        <NavLink to='form'>Ajouter</NavLink>

        <List>
            {taskJSX}
        </List>
    </>);
};

export default TodoList;