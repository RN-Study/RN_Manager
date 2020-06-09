import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router >
      <Scene key={'root'} hideNavBar>
        <Scene key={'auth'}>
          <Scene key="login" title="Please Login" component={LoginForm} initial />
        </Scene>
        <Scene key={'main'}>
        <Scene
          initial
          key="employeeList"
          title="Employee List"
          component={EmployeeList}
          rightTitle={'Add'}
          onRight={() => Actions.employeeCreate()}
        />
        <Scene key={'employeeCreate'} component={EmployeeCreate} title={'Create Employee'}/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

