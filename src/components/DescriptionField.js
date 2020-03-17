import React from 'react';

class DescriptionField extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#323232', padding: '7px'}}>
                <div style={{color: '#626262'}}>{this.props.title}</div>
                {this.props.renderContent()}
            </div>
        )
    }
}

export {DescriptionField};