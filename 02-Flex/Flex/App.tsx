import { SafeAreaView } from "react-native";
import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { CounterView } from "./src/screens/CounterView";
import { HelloWorld } from "./src/screens/HelloWorld";
import { FlexHomework } from "./src/screens/FlexHomeworkScreen";
import { DimensionsScreen } from "./src/screens/DimensionesScreen";
import { RelativePositionScreen } from "./src/screens/RelativePositionScreen";
import { AbsolutePositionScreen } from "./src/screens/AbsolutePositionScreen";
import { FlexScreen } from "./src/screens/FlexScreen";

export const App = () => {

/*
  Please uncomment the screen you want to preview.
*/

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#404985', }}>
    {/* <BoxObjectModelScreen /> */}
    {/* < DimensionsScreen /> */}
    {/* <RelativePositionScreen /> */}
    {/* <AbsolutePositionScreen /> */}
    {/* <FlexScreen /> */}
    <FlexHomework />
    </SafeAreaView>
  )
}

export default App;

