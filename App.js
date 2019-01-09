// import React from 'react'
import {Home, Formentry, DataPropinsi, Formeditpropinsi} from './screens'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator(
  {
   
    Home:{
        screen:Home,
        navigationOptions: {
            header: null
        }
    },
    Formentry:{
        screen:Formentry,
        navigationOptions: {
            header: null
        }
    },
    DataPropinsi:{
        screen:DataPropinsi,
        navigationOptions: {
            header: null
        }
    },
    Formeditpropinsi:{
        screen:Formeditpropinsi,
        navigationOptions: {
            header: null
        }
    }
},
{
    initialRouteName: 'Home'
}
)
export default createAppContainer(AppNavigator);
// export default class App extends React.Component{
//   render(){
//     return(
//       <Home />
//     )
//   }
// }