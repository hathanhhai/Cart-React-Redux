import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as Notify from '../../constants/message';
import Message from '../../conponents/pages/message';

 class MessageContainer extends Component {
    render() {
       
        return (
            <Message message={this.props.message}>
         
         
            </Message>
        );
    }



}

const mapStateToProps = (state, ownProps) => {
    return {
        message:state.message
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);

