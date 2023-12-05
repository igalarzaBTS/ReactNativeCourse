import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { BtnCalc } from '../components/BtnCalc';
import { Operators, UseCalculator } from '../hooks/UseCalculator';

export const CalculatorScreen = () => {

  const {
    number,
    previousNumber: previousNumber,
    resetAndClean: resetAndClean,
    deleteAction: deleteAction,
    invertPositiveAndNegative: invertPositiveAndNegative,
    buildNumber: buildNumber,
    calculate: calculate,
    performOperation: performOperation
  } = UseCalculator()

  return (
    <View style={styles.container}>
      <Text style={styles.previousResult}> {previousNumber} </Text>
      <Text
        style={styles.result}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.row}>
        <BtnCalc text='C' color='gray' action={resetAndClean} />
        <BtnCalc text='+/-' color='gray' action={invertPositiveAndNegative} />
        <BtnCalc text='del' color='gray' action={deleteAction} />
        <BtnCalc text='/' color='orange' action={() => performOperation(Operators.division)} />
      </View>

      <View style={styles.row}>
        <BtnCalc text='7' action={buildNumber} /> 
        <BtnCalc text='8' action={buildNumber} />
        <BtnCalc text='9' action={buildNumber} />
        <BtnCalc text='x' color='orange' action={() => performOperation(Operators.multiplication)} />
      </View>

      <View style={styles.row}>
        <BtnCalc text='4' action={buildNumber} />
        <BtnCalc text='5' action={buildNumber} />
        <BtnCalc text='6' action={buildNumber} />
        <BtnCalc text='-' color='orange' action={() => performOperation(Operators.subtraction)} />
      </View>

      <View style={styles.row}>
        <BtnCalc text='1' action={buildNumber} />
        <BtnCalc text='2' action={buildNumber} />
        <BtnCalc text='3' action={buildNumber} />
        <BtnCalc text='+' color='orange' action={() => performOperation(Operators.sum)} />
      </View>

      <View style={styles.row}>
        <BtnCalc text='0' width action={buildNumber} />
        <BtnCalc text='.' action={buildNumber} />
        <BtnCalc text='=' color='orange' action={calculate} />
      </View>
    </View>
  )
}