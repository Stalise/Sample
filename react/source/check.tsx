//@ts-nocheck
import { useEffect, useState } from "react";

const ChildComponent = ({ value = "check" }) => {
    return <span>Child: {value}</span>;
};

export const CheckError = () => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Update value</button>
            <span>{`Value: ${value}`}</span>
            <ChildComponent value={undefined} />
        </div>
    );
};
