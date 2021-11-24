import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/actions/todo-action";
import { useNavigate } from "react-router";

const schema = yup.object({
    title: yup.string().required()
}).required();

const TodoForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: '',
            desc: ''
        },
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const nav = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data));
        nav('../');
        reset();
    }

    return (<>
        <h2>Ajouter une tache</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Titre : </label>
                <input id='title' type="text" {...register('title')} />
                {errors.title && (
                    <span>Le titre !</span>
                )}
            </div>
            <div>
                <label htmlFor="desc">Description : </label>
                <input id='desc' type="text" {...register('desc')} />
            </div>
            <button type='submit'>Ajouter</button>
        </form>
    </>);
};

export default TodoForm;