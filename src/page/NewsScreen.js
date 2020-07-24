import React, {Fragment, Component} from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ActivityIndicator
} from 'react-native';

const NewsBox = (props) => {
    console.log('props', props.data);
    return (
        <View>
            <Text>NewsBox</Text>
            <FlatList
                data={props.data}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                            <View style={{flexDirection: 'row',}}>
                                <Image source={{uri: item.thumbnail_pic_s}} style={{width: 80, height: 80, margin: 8}}/>
                                <Image source={{uri: item.thumbnail_pic_s02}}
                                       style={{width: 80, height: 80, margin: 8}}/>
                                <Image source={{uri: item.thumbnail_pic_s03}}
                                       style={{width: 80, height: 80, margin: 8}}/>
                            </View>
                        </View>
                    )

                }
                }
            />
        </View>
    )
};
const MyApp = (props) => {
    console.log('Myapp', props);
    return (
        <Fragment>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                style={{margin:8}}>
                    <NewsBox data={props.data}/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

class NewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: 0,
            isAnimating: 1,
            news: '11111',
            title: '',
            data: ''

        };
    }

    render() {
        if (!this.state.loaded) {
            return this._renderLoading();
        } else {
            console.log('data', this.state);
            return <MyApp data={this.state.data}/>;
        }

    }

    _renderLoading = () => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, backgroundColor: '#FFF'}}>
                <Text>加载中</Text>
                <Text>{this.state.title}</Text>
            </View>
        );
    };

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        this.setState({isRefreshing: true});
        fetch(`http://v.juhe.cn/toutiao/index?type=&key=cf9eb7dc6b6bb55c8c05c7a5f3ea5ae3`, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then(rdata => {
                console.log(rdata.result.data[0]);
                console.log(rdata.result.data);
                this.setState({'title': rdata.result.data[0].title, 'loaded': 1, 'data': rdata.result.data})
            })
    }

}

export default NewsScreen;
