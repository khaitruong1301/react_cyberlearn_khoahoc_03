import React, { Component } from 'react'
import UserProfile from './FormValidation/UserProfile/UserProfile'
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS'
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme'
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList'
import LifeCycleReact from './LifeCycleReact/LifeCycleReact'
import DemoHookUseState from './Hooks/DemoHookUseState'

export default class App extends Component {


  render() {
    return (
      <div>
          {/* <UserProfile /> */}
          {/* <DemoJSS /> */}
          {/* <DemoTheme /> */}
          {/* <ToDoList /> */}
          {/* <LifeCycleReact /> */}
          <DemoHookUseState />
      </div>
    )
  }
}
