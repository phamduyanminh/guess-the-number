import {TextInput, Button, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';

function StartGameScreen(){
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                "Invalid input number!", 
                "Number has to ba a number between 1-99",
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
                )
            return;
        }

        console.log("Valid number")
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler} confirmOnPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;
