import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, confirmOnPress}){
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed 
                ? [styles.pressed, styles.buttonInnerContainer] 
                : styles.buttonInnerContainer} 
                onPress={confirmOnPress} 
                android_ripple={{color: '#640233'}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerContainer:{
        backgroundColor:'#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton;