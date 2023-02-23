import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "./src/screens/Dashboard";

const app = createStackNavigator({
  Dashboard
},
 {
  initialRouteName: "Dashboard",
    defaultNavigationOptions: {
      title: "Mobile NFC Reader",
    },
 })


export default createAppContainer(app);
