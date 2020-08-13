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
import { addTaskAction, changeThemeAction, doneTaskAction, deleteTaskAction, editTaskAction, updateTask } from '../../../redux/actions/ToDoListActions'
import { arrTheme } from '../../../JSS_StyledComponent/Themes/ThemeManager'

class ToDoList extends Component {

    state = {
        taskName: ''
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(editTaskAction(task))
                    }} className="ml-1"><i className="fa fa-edit"></i></Button>


                    <Button onClick={() => {
                        this.props.dispatch(doneTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-check"></i></Button>


                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>

        })
    }
    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                <Th style={{ verticalAlign: 'middle' }}>{task.taskName}</Th>
                <Th className="text-right">
                    <Button onClick={() => {
                        this.props.dispatch(deleteTaskAction(task.id))
                    }} className="ml-1"><i className="fa fa-trash"></i></Button>

                </Th>
            </Tr>
        })
    }

    // handleChange = (e) => {
    //     let {name,value} = e.target.value;
    //     this.setState({
    //         [name]:value
    //     })
    // }


    //Viết hàm render theme import ThemeManger
    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

    //Life cycle bảng 16 nhận vào props mới được thực thi trước render
    // componentWillReceiveProps(newProps) {
    //     console.log('this.props',this.props);
    //     console.log('newProps',newProps);
    //     this.setState({
    //         taskName:newProps.taskEdit.taskName
    //     })
    // }

    // //Lifecycle tĩnh không truy xuất được trỏ this
    // static getDerivedStateFromProps(newProps,currentState){
    //     //newProps: là props mới, props cũ là this.props (không truy xuất được)
    //     //currentState: ứng với state hiện tại this.state

    //     //hoặc trả về state mới (this.state)
    //     let newState = {...currentState,taskName: newProps.taskEdit.taskName}
    //     return newState;

    //     //trả về null state giữ nguyên
    //     // return null;

    // } 



    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className="w-50">
                    <Dropdown onChange={(e) => {
                        let { value } = e.target;
                        //Dispatch value lên reducer

                        this.props.dispatch(changeThemeAction(value))


                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3>To do list</Heading3>
                    <TextField value={this.state.taskName} onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        }, () => {
                            console.log(this.state)
                        })
                    }} name="taskName" label="Task name" className="w-50" />

                    <Button onClick={() => {
                        //Lấy thông tin người dùng nhập vào từ input
                        let { taskName } = this.state;
                        //Tạo ra 1 task object
                        let newTask = {
                            id: Date.now(),
                            taskName: taskName,
                            done: false
                        }
                        // console.log(newTask)
                        //Đưa task object lên redux thông qua phương thức dispatch

                        this.props.dispatch(addTaskAction(newTask))



                    }} className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                    <Button onClick={()=>{
                        this.props.dispatch(updateTask(this.state.taskName))
                    }} className="ml-2"><i className="fa fa-upload"></i> Update task</Button>
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



    //Đây là lifecycle trả về props cũ và state cũ của component trước khi render (lifecycle này chạy sau render)
    componentDidUpdate(prevProps, prevState) {

        //So sánh nếu như props trước đó (taskEdit trước mà khác taskEdit hiện tại thì mình mới setState)
        if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
            this.setState({
                taskName: this.props.taskEdit.taskName
            })

        }



    }



}


const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}


export default connect(mapStateToProps)(ToDoList)




