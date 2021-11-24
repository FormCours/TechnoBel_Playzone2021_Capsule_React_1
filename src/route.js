import About from "./pages/about/about";
import NotFound from "./pages/error/not-found";
import Home from "./pages/home/home";
import DemoRouter, { Route1, Route2, RouteInitial, RouteParam, RouteSearch } from "./pages/router/router";
import TodoForm from "./pages/todo-app/sub-pages/todo-form";
import TodoList from "./pages/todo-app/sub-pages/todo-list";
import TodoApp from "./pages/todo-app/todo-app";

export const appRoute = [
    { path: '', element: <Home /> },
    { path: 'about', element: <About /> },
    {
        path: 'router', element: <DemoRouter />,
        children: [
            { index: true, element: <RouteInitial />},
            { path: 'route1', element: <Route1 /> },
            { path: 'route2', element: <Route2 /> },
            { path: 'param/:id', element: <RouteParam /> },
            { path: 'search', element: <RouteSearch /> },
        ]
    },
    {
        path: 'todo', element: <TodoApp />,
        children: [
            {index: true, element: <TodoList />},
            {path: 'form', element: <TodoForm />}
        ]
    },
    { path: '*', element: <NotFound />},
];