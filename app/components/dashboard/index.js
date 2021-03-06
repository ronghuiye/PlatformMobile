import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TabBarIOS,
  TouchableOpacity
} from 'react-native';
import AddCertScreen from "../addCert/addCert";
import ListCertScreen from "../certList/certList";


export default class Dashboard extends Component {
  constructor(props) {
     super(props);
     this.state = {
       selectedTab: 'listCert'
     };
   }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'listCert'}
            title="List"
            icon={require('./list.png')}
            onPress={() => {
                  this.setState({
                      selectedTab: 'listCert',
                  });
            }}>
            <ListCertScreen navigator={this.props.navigator}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            selected={this.state.selectedTab === 'addCert'}
            title="Add"
            icon={require('./add.png')}
            onPress={() => {
                this.setState({
                    selectedTab: 'addCert',
                });
            }}>
              <AddCertScreen navigator={this.props.navigator}/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}
