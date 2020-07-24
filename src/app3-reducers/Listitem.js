import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    UIManager,
    LayoutAnimation,
    Platform,

} from 'react-native';
import {CardSection} from '../components'
import * as actions from '../actions'
import {connect} from 'react-redux'


const ShowTestItem = (choise, tech) => {
    if (choise) {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {tech.description}
                </Text>
            </CardSection>
        )
    }

};

class Listitem extends Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        const {titleStyle} = styles;
        console.log("Listitem--->", this);
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectTech(this.props.tech.title)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {this.props.tech.title}
                        </Text>
                    </CardSection>
                    {ShowTestItem(this.props.choise, this.props.tech)}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 38
    }
};

const mapStateToProps = (state, ownprops) => {
    console.log('-->', ownprops, state);
    if (state.selectTechId === ownprops.tech.title) {
        return {choise: true};
    }
};
// mapStateToProps,
// mapDispatchToProps

export default connect(mapStateToProps, actions)(Listitem);