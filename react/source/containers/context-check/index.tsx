import { FC, useState } from "react";

import { MyButton } from "components/my-button";
import { useMyContext } from "context/my-context/use-my-context";

export const ContextCheck: FC = () => {
    const [count, setCount] = useState(0);
    const context = useMyContext();

    const updateContextValue = () => {
        console.log(context.value);
        context.setValue(context?.value + 1);
    };

    const updateCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>
                <span>{`${context.value} - context value`}</span>
                <span>{`${count} - count value`}</span>
            </div>
            <MyButton text="Update context" onClick={updateContextValue} />
            <MyButton text="Update count" onClick={updateCount} />
        </div>
    );
};
