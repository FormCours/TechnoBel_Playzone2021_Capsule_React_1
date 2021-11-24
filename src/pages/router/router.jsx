import { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { NavLink, useSearchParams } from "react-router-dom";
import Title from "../../components/title/title";

export const RouteInitial = () => {
    return (
        <div>
            <h2>Route Initial</h2>
        </div>
    )
}

export const Route1 = () => {
    return (
        <div>
            <h2>Route 1</h2>
        </div>
    )
}

export const Route2 = () => {
    return (
        <div>
            <h2>Route 2</h2>
        </div>
    )
}

export const RouteParam = () => {
    const {id} = useParams();

    useEffect(() => {
        console.log(`Activation du useEffect -> Param ${id}`);

        return () => {
            console.log(`Netoyage du useEffect -> Param ${id}`);
        }
    }, [id]);

    return (
        <div>
            <h2>Route Param</h2>
            <p>Le parametre ID est {id}</p>
        </div>
    )
}

export const RouteSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const firstname = searchParams.get('firstname');
    const lastname = searchParams.get('lastname');

    return (
        <div>
            <h2>Route Search</h2>
            <p>{firstname} {lastname}</p>
        </div>
    )
}

const DemoRouter = () => {
    return (
        <main>
            <Title text={'Exemple d\'un router'} />

            <ul>
                <li><NavLink to=''>Initial</NavLink></li>
                <li><NavLink to='route1'>Route1</NavLink></li>
                <li><NavLink to='route2'>Route2</NavLink></li>
                <li><NavLink to='param/42'>param/42</NavLink></li>
                <li><NavLink to='param/2.718'>param/2.718</NavLink></li>
                <li><NavLink to='search?firstname=Zaza&lastname=Vanderquack'>search?firstname=Zaza&lastname=Vanderquack</NavLink></li>
                <li><NavLink to='search?firstname=Khun&lastname=Ly'>search?firstname=Khun&lastname=Ly</NavLink></li>

            </ul>

            <Outlet />
        </main>
    );
};

export default DemoRouter;