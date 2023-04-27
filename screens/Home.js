import { View, Text, StyleSheet} from 'react-native';

export default function Home(){
    return (
        <View style={styles.rootContainer}>
            <Text>Hello, Welcomes To Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})