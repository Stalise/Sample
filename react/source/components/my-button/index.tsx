import { FC } from "react";
import { Button } from "@mui/material";

interface IProps {
    text: string;
    onClick: VoidFunction;
}

export const MyButton: FC<IProps> = ({ text, onClick }) => (
    <Button variant="contained" sx={{ margin: "10px" }} onClick={onClick}>
        {text}
    </Button>
);
