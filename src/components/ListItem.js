import React from 'react';
import { View,Text,StyleSheet, Image} from 'react-native';

class ListItem extends React.Component {
    IMAGES = {
        BTC: require('../img/BTC.png'),
        ADA: require('../img/ADA.png'),
        BCH: require('../img/BCH.png'),
        DASH: require('../img/DASH.png'),
        ETH: require('../img/ETH.png'),
        LTC: require('../img/LTC.png'),
        MIOTA: require('../img/MIOTA.png'),
        XEM: require('../img/XEM.png'),
        XRP: require('../img/XRP.png'),
        XMR: require('../img/XMR.png'),
    };
    getImage = (id) => {
        return this.IMAGES[id];
    }
    render() {
        return (
            <View style={styles.listContainer}>
                <View style={styles.top}>
                    <Image style={styles.image} source={this.getImage(this.props.data.symbol)}
                    resizeMode="contain" />
                    <View style={styles.topContent}>
                        <Text style={styles.name}>{this.props.data.symbol} | {this.props.data.name}</Text>
                        <Text style={styles.value}>&#8377; {this.props.data.price_inr}</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentage}>24h: </Text>
                        <Text style={[this.checkPostive(this.props.data.percent_change_24h),styles.percentage]}>{this.props.data.percent_change_24h} %</Text>
                    </View>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentage}>7d: </Text>
                        <Text style={[this.checkPostive(this.props.data.percent_change_24h),styles.percentage]}>{this.props.data.percent_change_7d} %</Text>
                    </View>
                </View>
            </View>
        );
    }

    checkPostive = (percentage) => {
        if(parseInt(percentage) < 0) {
            console.log(false);
            return { color: '#DB2E17'};
        } else {
            console.log(true);
            return { color: '#1EBEA5'};
        } 
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        height: 100,
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: '#E5E5E5',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        justifyContent: 'space-around',
    },
    top: {
        flexDirection: 'row',
        borderColor: '#FAFAFA',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginHorizontal: 20,
        alignItems: 'center',
        height: '50%',
    },
    bottom: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    image: {
        height: '90%',
        width: 50,
    },
    topContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    name: {
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    value: {
        paddingRight: 10,
        fontWeight: 'bold',
    },
    percentage: {
        fontSize: 15,
    },
    percentageContainer: {
        flexDirection: 'row',
    }
});

export default ListItem;