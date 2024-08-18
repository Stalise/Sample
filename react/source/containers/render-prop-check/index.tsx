import { FC, ReactElement } from "react";

interface IProps {
    render: (value: number) => ReactElement;
}

export const RenderPropCheck: FC<IProps> = ({ render }) => {
    const value = 7;

    return (
        <div>
            <p>Wrapper</p>
            {render(value)}
        </div>
    );
};
