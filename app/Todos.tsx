'use server';
import { Avatar, Card, CardContent, CardHeader, Icon, Stack, Typography } from "@mui/material";
import { getTodos } from "./Api";

export default async function Todos() {
    const todos: any[] = await getTodos();

    return (
        <Stack spacing={2} className='m-8'>
            {/* {todos?.map(x => <p key={x.id}>{x.title}</p>)} */}
            {todos?.map(x => <TodoCard key={x.id} todo={x} />)}
        </Stack>
    )
}

function TodoCard(props: any) {
    const { todo } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Icon>{todo.icon}</Icon>
                }
                title={todo.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {todo.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

interface Todo {
    title: string;
    content: string;
    icon: string;
    dueDate?: Date;
    isComplete: boolean;
    completedDate?: Date;
    isRecurring: boolean;
    recurDate?: Date;
    recurNumDays?: number;
    recurUntil?: Date;
    recurNumTimes: number;
    hasRecurredNumTimes: number;
    userId: string;
}