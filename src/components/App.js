import React from 'react';
import { View,Text, FlatList,StyleSheet, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';
import api from '../api';

class App extends React.Component {
    state = {
        currencyData: [],
        refreshing: false,
    }
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const response = await api.fetchCryptoCurrencyDetails();
        this.setState({
            currencyData: response,
            refreshing: false,
        })
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.fetchData();
        });
    }
    render() {
        if(this.state.currencyData.length == 0){
            return (
                <View  style={styles.loader}>
                    <ActivityIndicator size="large"  color="#0000ff"/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <FlatList style={styles.list}
                    data={this.state.currencyData} 
                    renderItem={({item}) => <ListItem data={item} />} 
                    keyExtractor={(item, index) => index} 
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh} />
                </View>
            );
         }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 10,
        flex: 1,
    },
    list: {
        backgroundColor: 'white',
    },
    loader: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default App;