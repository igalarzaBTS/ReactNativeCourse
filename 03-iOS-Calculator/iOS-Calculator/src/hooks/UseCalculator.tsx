import { useRef, useState } from "react"

export enum Operators {
    sum, 
    subtraction, 
    multiplication, 
    division
}

export const UseCalculator = () => {
  const [num, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')
    
    const refOperation = useRef<Operators>()

    const resetAndClean = () => {
        setNumber('0')
        setPreviousNumber('')
    }

    const invertPositiveAndNegative = () => {
        if (num.includes('-')) {
            setNumber(num.replace('-', ''));
        } else {
            setNumber('-' + num);
        }
    }

    const deleteAction = () => {
        let negative = '';
        let tempNumber = num;

        if (num.includes('-')) {
            negative = '-';
            tempNumber = num.substring(1);
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1));
        } else {
            setNumber('0');
        }
    }

    const changeNumberForPreviousOne = () => {
        if (num.endsWith('.')) {
            setPreviousNumber(num.slice(0, -1));
        } else {
            setPreviousNumber(num);
        }

        setNumber('0');
    }

    const buildNumber = (numberAsText: string) => {
        // no acpetar doble punto
        if (num.includes('.') && numberAsText === '.') return;

        if (num.startsWith('0') || num.startsWith('-0')) {
            if (numberAsText === '.') {
                setNumber(num + numberAsText);
            } else if (numberAsText === '0' && num.includes('.')) {
                setNumber(num + numberAsText);
            } else if (numberAsText !== '0 ' && !num.includes('.')) {
                setNumber(numberAsText);
            } else if (numberAsText === '0' && !num.includes('.')) {
                setNumber(num);
            } else {
                setNumber(num + numberAsText);
            }
        } else {
            setNumber(num + numberAsText);
        }
    }

    const performOperation = (operation: Operators) => {
        changeNumberForPreviousOne();
        refOperation.current = operation;
    }

    const calculate = () => {
        const num1 = Number(num)
        const num2 = Number(previousNumber)

        switch (refOperation.current) {
            case Operators.sum:
                setNumber(`${num2 + num1}`);
                break;

            case Operators.subtraction:
                setNumber(`${num2 - num1}`);
                break;

            case Operators.multiplication:
                setNumber(`${num2 * num1}`);
                break;

            case Operators.division:
                setNumber(`${num2 / num1}`);
                break;

            default:
                break;
        }

        setPreviousNumber('')
    }

    // Expose to implement
    return {
        number: num,
        previousNumber: previousNumber,
        resetAndClean: resetAndClean,
        invertPositiveAndNegative: invertPositiveAndNegative,
        deleteAction: deleteAction,
        buildNumber: buildNumber,
        calculate: calculate,
        performOperation: performOperation
    }
}
