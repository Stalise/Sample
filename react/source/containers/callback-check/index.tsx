import { useEffect, useState } from "react";

import { MyButton } from "components/my-button";

export const CallbackCheck: React.FC = () => {
    const [state, setState] = useState(0);

    const handleClick = () => {
        console.log(state);
    };

    console.log("render");

    useEffect(() => {
        console.log("in effect");
        const element = document.getElementById("text")!;

        element.addEventListener("click", handleClick);

        return () => {
            console.log("return in effect");
            element.removeEventListener("click", handleClick);
        };
    }, [state]);

    return (
        <div>
            <p id="text">Callback check</p>
            <MyButton text="Update" onClick={() => setState(state + 1)} />
            <p>first {state}</p>
        </div>
    );
};
