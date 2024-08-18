import React, { useEffect, useState } from "react";

interface IItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const FetchCheck: React.FC = () => {
    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/?_limit=10")
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div>
            {items.map(({ id, title }) => (
                <div key={id}>{title}</div>
            ))}
        </div>
    );
};
