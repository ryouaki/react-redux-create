import React from 'react';
import { connect } from 'react-redux';

import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';

import { actionMain } from '../actions/actionMain';

class MainView extends React.Component {

    componentDidMount() {
        this.props.actionMain();
    }

    render() {
        return(
            <div>
                <HeaderBar/>
                {
                    this.props.message 
                }
                <FooterBar/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.main.message,
    }
}

export default connect(mapStateToProps, { actionMain })(MainView);