import { useEffect, useRef, useState } from "react";

import { MyButton } from "components/my-button";

export const RefCheck: React.FC = () => {
    const [count, setCount] = useState(0);
    const myRef = useRef(null);

    // const check = { current: null };

    useEffect(() => {
        setTimeout(() => {
            console.log(`Ref: ${myRef.current}`, `Count: ${count}`);
        }, 3000);
    }, []);

    console.log("Ref:", myRef.current);

    return (
        <div>
            <MyButton
                text={`Current count: ${count}`}
                onClick={() => setCount(count + 1)}
            />
            <div ref={myRef}>My ref inside!</div>
        </div>
    );
};
