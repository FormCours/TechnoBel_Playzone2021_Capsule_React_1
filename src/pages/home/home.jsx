import { useState } from "react";
import Title from "../../components/title/title";

const Home = () => {
    const [count, setCount] = useState(0);

    const handleAction = (e) => {
        console.log(e);
        setCount(c => c + 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <main>
            <Title text='Home' />

            <div>
                <p>Compteur : {count}</p>
                <button onClick={handleAction}>Click Here</button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </main>
    )
}

export default Home;