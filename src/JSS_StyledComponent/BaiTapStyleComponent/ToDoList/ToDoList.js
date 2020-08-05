import React, { Component } from 'react'
import { Container } from '../../Containers/Container'
import {ThemeProvider} from 'styled-components'
import {ToDoListDarkTheme} from '../../Themes/ToDoListDarkTheme'
import {ToDoListLightTheme} from '../../Themes/ToDoListLightTheme';
import {ToDoListPrimaryTheme} from '../../Themes/ToDoListPrimaryTheme';
export default class ToDoList extends Component {
    render() {
        return (
            <ThemeProvider theme={ToDoListDarkTheme}>
                <Container> 

                    dsads
                </Container>

            </ThemeProvider>
        )
    }
}
