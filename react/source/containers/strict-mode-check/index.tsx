import { useEffect, useState, FC } from "react";

import axios from "axios";

import { MyButton } from "components/my-button";
import { Item } from "components/item";
import type { ITodo } from "types/common";

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
            <MyButton text="Button" onClick={() => setCount(count + 1)} />
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
