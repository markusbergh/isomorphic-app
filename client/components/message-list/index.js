import React, { Component } from 'react';

class MessageList extends Component {
    render() {
        return (
            <ol className='message-list'>
                {this.props.messages.map((message, index) => {
                    return (
                        <li key={`message-${index}`}>
                            {message.text}
                        </li>
                    );
                })}
            </ol>
        );
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array
};

export default MessageList;
