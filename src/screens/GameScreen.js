import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ochki: 0,
            life: 2,
            currentNumber: 0,
            timer: 60,
            sum: 0,
            firstNum:0,
            secondNum: 0,
            thirdNum: 0,
            fourthNum: 0,
            fifthNum: 0
        }
    }

    static navigationOptions = () => ({
        header: null
    })

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: width, marginTop: StatusBar.currentHeight+20 }}>
                    <View style={styles.infoContainer}>
                        <Text style={{ color: '#b9b7f4', fontSize: 12, fontWeight: '100' }}>ОЧКИ</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{this.state.ochki}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={{ color: '#b9b7f4', fontSize: 12, fontWeight: '100' }}>ВРЕМЯ</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{this.state.timer} сек</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={{ color: '#b9b7f4', fontSize: 12, fontWeight: '100' }}>ЖИЗНЬ</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='heart'
                                size={20}
                                style={{ color: '#EF6950' }}
                            />
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', marginLeft: 5 }}>{this.state.life}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.midContainer}>
                    <Text style={{ color: '#fff', fontSize: 48, fontWeight: '900' }}>{this.state.currentNumber}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ flexDirection: 'row', width: width, justifyContent: 'space-around', alignItems: 'center'}}>
                        <TouchableOpacity>
                        <Icon
                            name='home'
                            size={30}
                            style={{ color: '#b9b7f4' }}
                        />
                        </TouchableOpacity>
                        <View style={styles.infoContainer}>
                            <Text style={{ color: '#b9b7f4', fontSize: 12, fontWeight: '100' }}>СУММА</Text>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{this.state.sum}</Text>
                        </View>
                        <TouchableOpacity>
                        <Icon
                            name='refresh'
                            size={30}
                            style={{ color: '#b9b7f4' }}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style ={{marginTop:30, width: width, justifyContent: 'space-around', flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.numberContainer}><Text style = {{color: '#fff', fontSize: 20, fontWeight: '700'}}>{this.state.firstNum}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberContainer}><Text style = {{color: '#fff', fontSize: 20, fontWeight: '700'}}>{this.state.secondNum}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberContainer}><Text style = {{color: '#fff', fontSize: 20, fontWeight: '700'}}>{this.state.thirdNum}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberContainer}><Text style = {{color: '#fff', fontSize: 20, fontWeight: '700'}}>{this.state.fourthNum}</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.numberContainer}><Text style = {{color: '#fff', fontSize: 20, fontWeight: '700'}}>{this.state.fifthNum}</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8E8CD8',
        justifyContent: 'space-between',
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    midContainer: {
        backgroundColor: '#6B69D6',
        height: 100,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#6B69D6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        marginBottom: 80
    }
});