import { useEffect, useState, FC } from "react";

import Button from "@mui/material/Button";
import axios from "axios";

import { Item } from "components/item";
import { ITodo } from "types/common";

export const StrictModeCheck: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [count, setCount] = useState(0);

    console.log("render");

    useEffect(() => {
        // throw new Error("Custom error!!!");
        const getTodos = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
            );

            setTodos([...response.data]);
        };
        getTodos();
    }, []);

    return (
        <div>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
                Button
            </Button>
            <div>{count}</div>
            {todos.length > 0 ? (
                <div>
                    {todos.map((todo) => {
                        return (
                            <Item
                                id={todo.id}
                                first_name={todo.title}
                                last_name={todo.title}
                                email={todo.title}
                                gender={todo.title}
                                ip_address={todo.id}
                                key={todo.id}
                            />
                        );
                    })}
                </div>
            ) : (
                <div>Empty</div>
            )}
        </div>
    );
};
