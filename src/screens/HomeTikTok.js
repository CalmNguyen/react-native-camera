import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Dimensions, AppRegistry, View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native';
import App from './App';
const widthButton = (Dimensions.get('window').width - 50) / 4;
const heightButton = widthButton / 2;
const sumHeightButton = heightButton * 5 + 60
export default function cacu() {
    function calculateExpression(expression) {
        const operators = ['+', '-', '*', '/'];
        const operatorStack = [];
        const numberStack = [];
        let currentNumber = '';

        for (const char of expression) {
            if (!isNaN(char) || char === '.') {
                currentNumber += char;
            } else if (operators.includes(char)) {
                numberStack.push(parseFloat(currentNumber));
                currentNumber = '';

                while (operatorStack.length > 0 && operators.indexOf(operatorStack[operatorStack.length - 1]) >= operators.indexOf(char)) {
                    const operator = operatorStack.pop();
                    const b = numberStack.pop();
                    const a = numberStack.pop();

                    switch (operator) {
                        case '+':
                            numberStack.push(a + b);
                            break;
                        case '-':
                            numberStack.push(a - b);
                            break;
                        case '*':
                            numberStack.push(a * b);
                            break;
                        case '/':
                            numberStack.push(a / b);
                            break;
                    }
                }

                operatorStack.push(char);
            }
        }

        numberStack.push(parseFloat(currentNumber));

        while (operatorStack.length > 0) {
            const operator = operatorStack.pop();
            const b = numberStack.pop();
            const a = numberStack.pop();

            switch (operator) {
                case '+':
                    numberStack.push(a + b);
                    break;
                case '-':
                    numberStack.push(a - b);
                    break;
                case '*':
                    numberStack.push(a * b);
                    break;
                case '/':
                    numberStack.push(a / b);
                    break;
            }
        }

        return numberStack[0];
    }
    const [x, set_x] = useState('')
    const listNumber = ['#', '#', 'x', '+', 1, 2, 3, '-', 4, 5, 6, '*', 7, 8, 9, '/', 0, '.', '=']
    return (
        <View style={{ margin: 10 }}>
            <View style={{ height: Dimensions.get('window').height, flexDirection: 'row' }}>
                <View style={{ height: '50%' }}>
                    <FlatList
                        scrollEnabled={true}
                        data={listIcon}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 17, color: 'white', fontWeight: 500 }}>
                                        {item.text}
                                    </Text>
                                    <View style={{ width: 50, color: 'white', fontWeight: 500, }}>

                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View style={{ height: '50%' }}></View>
            </View>
            <View style={{ height: Dimensions.get('window').height - sumHeightButton - 50, justifyContent: 'flex-end', marginBottom: 20 }}>
                <View style={{ alignItems: 'flex-end', margin: 20, marginBottom: 10, marginRight: 30 }}>
                    <Text style={styles.text}>{x} =</Text>
                </View>
                <View style={{ alignItems: 'flex-end', borderWidth: 1, borderColor: 'rgba(0,0,0,0.5)', minHeight: 50, }}>
                    <Text style={[styles.text, { padding: 10 }]}>{calculateExpression(x)}</Text>
                </View>
            </View>
            <View style={{ height: sumHeightButton, marginBottom: 10 }}>
                <FlatList
                    numColumns={4}
                    data={listNumber}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                item != 'x' ? set_x(x + String(item)) : set_x('')
                            }}
                                style={[{ width: widthButton, height: heightButton, backgroundColor: 'rgba(0,0,0,0.2)', margin: 5, borderRadius: 5 }, styles.center]}>
                                <Text style={styles.text}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'black',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});