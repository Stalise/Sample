export interface IItem {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}

export interface ITodo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}
