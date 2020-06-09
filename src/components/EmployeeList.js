import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';


class EmployeeList extends Component {
  componentWillUnmount() {
    this.props.employeesFetch();
  }

  render() {
   return (
     <View>
       <Text> Employee List </Text>
     </View>
   );
 }
}

export default connect(null, {employeesFetch})(EmployeeList);