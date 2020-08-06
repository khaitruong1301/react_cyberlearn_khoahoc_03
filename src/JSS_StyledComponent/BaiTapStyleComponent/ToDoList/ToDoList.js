import React, { Component } from 'react'
import { Container } from '../../ComponentsToDoList/Container'
import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../../ComponentsToDoList/Heading';
import { TextField, Label, Input } from '../../ComponentsToDoList/TextField';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Tr, Td, Th, Thead, Tbody } from '../../ComponentsToDoList/Table';
import { connect } from 'react-redux';
class ToDoList extends Component {


    renderTaskToDo = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                    <Button className="ml-1"><i className="fa fa-check"></i></Button>
                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>

        })
    }
    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">

                    <Button className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>
        })
    }

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className="w-50">
                    <Dropdown>
                        <option>Dark theme</option>
                        <option>Light theme</option>
                        <option>Primary theme</option>
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField label="Task name" className="w-50" />
                    <Button className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                    <Button className="ml-2"><i className="fa fa-upload"></i> Update task</Button>
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task completed</Heading3>
                    <Table>
                        <Thead>
                            {this.renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>

            </ThemeProvider>
        )
    }
}


const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList
    }
}


export default connect(mapStateToProps)(ToDoList)