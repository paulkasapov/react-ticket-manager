import React from 'react';

class DescriptionCard extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#2c2c2c', margin: '10px 10px 0', padding: '2px'}}>
                <div style={{padding: '5px 10px', fontWeight: '600'}}>{this.props.title}</div>
                <div style={{backgroundColor: '#323232', padding: '8px'}}>{this.props.children}</div>
            </div>
        )
    }
}

export {DescriptionCard};