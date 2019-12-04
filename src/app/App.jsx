import React from 'react';
import TodoList from './components/Todo/TodoList';
import Form from './components/AddTodo/Form';
import { Grid } from '@material-ui/core';

const App = () => {
    return (
        <Grid container alignItems="center" justify="center" xs={12}>
            <Grid direction="column"c container xs={6} spacing={2}>
                <Grid item>
                    <Form />
                </Grid>
                <Grid item>
                    <TodoList />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default App;
