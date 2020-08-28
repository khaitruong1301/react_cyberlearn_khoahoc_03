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
import DemoUseRef from './Hooks/DemoUseRef'
import DemoUseReducer from './Hooks/DemoUseReducer'
import DemoUseContext from './Hooks/DemoUseContext'
import ContextProvider from './Hooks/Context/ContextProvider'
import DemoReduxApp from './Hooks/DemoReduxApp'
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring'

export default class App extends Component {


  render() {
    return (
      <ContextProvider>
          {/* <UserProfile /> */}
          {/* <DemoJSS /> */}
          {/* <DemoTheme /> */}
          {/* <ToDoList /> */}
          {/* <LifeCycleReact /> */}
          {/* <DemoHookUseState /> */}
          {/* <DemoHookUseEffect /> */}
          {/* <DemoHookUseCallBack /> */}
          {/* <DemoHookUseMemo /> */}
          {/* <DemoUseRef /> */}
          {/* <DemoUseReducer /> */}
          {/* <DemoUseContext /> */}
          {/* <DemoReduxApp /> */}
          <DemoUseSpring />
      </ContextProvider>
    )
  }
}
