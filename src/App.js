import React, { Component } from 'react'
import UserProfile from './FormValidation/UserProfile/UserProfile'
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS'
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme'
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList'
import LifeCycleReact from './LifeCycleReact/LifeCycleReact'
import DemoHookUseState from './Hooks/DemoHookUseState'
import DemoHookUseEffect from './Hooks/DemoHookUseEffect'
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack'
import DemoHookUseMemo from './Hooks/DemoHookUseMemo'

export default class App extends Component {


  render() {
    return (
      <div>
          {/* <UserProfile /> */}
          {/* <DemoJSS /> */}
          {/* <DemoTheme /> */}
          {/* <ToDoList /> */}
          {/* <LifeCycleReact /> */}
          {/* <DemoHookUseState /> */}
          {/* <DemoHookUseEffect /> */}
          {/* <DemoHookUseCallBack /> */}
          <DemoHookUseMemo />
      </div>
    )
  }
}
