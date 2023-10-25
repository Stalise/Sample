import { FC } from "react";

import { useMyContext } from "context/use-my-context";

export const ContextCheck: FC = () => {
    const context = useMyContext();

    return (
        <div>
            <span>{`${context.value} - context value`}</span>
            <button
                className="button"
                onClick={() => context.setValue(context?.value + 1)}
            >
                Click Me
            </button>
        </div>
    );
};
