export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type Todos = { [key: string]: Todo; };
