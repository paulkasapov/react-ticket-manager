import React from 'react'
import moment from "moment";


class Ticket extends React.Component {

    render() {
        return (
            <>
                <div onClick={() => this.props.setSelected(this.props.ticket)}
                     style={this.props.selectedTicket.ticketId === this.props.ticket.ticketId ? styles.containerSelected : styles.container}>
                    <div style={{flex: 2, borderBottom: '1px solid #212121'}}><img src={this.props.ticket.owner.avatar}
                                                                                   style={{height: '30px', width: '30px', borderRadius: '50%', padding: '5px 0'}}/></div>
                    <div style={{...styles.headerField, ...{flex: 5}}}>{moment(this.props.ticket.reportedTime).format('DD/MM/YY hh:mm')}</div>
                    <div style={{...styles.headerField, ...{flex: 6, overflow: 'hidden', whiteSpace: 'nowrap'}}}>{this.props.ticket.asset.name}</div>
                    <div style={{...styles.headerField, ...{flex: 2,padding: '6px 0 0'}}}>{this.props.renderStatus(this.props.ticket.status)}</div>
                </div>
                {/*<div style={{margin: '0 20px', borderTop: '1px solid #212121', height: '1px'}}/>*/}
            </>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        padding: '0 23px',
        height: '40px',
        color: '#adadaa'
    },
    containerSelected: {
        display: 'flex',
        // padding: '5px',
        backgroundColor: '#414141',
        height: '40px',
        padding: '0 23px',
        color: '#e6e6e6'
    },
    headerField: {
        padding: '11px 0',
        borderBottom: '1px solid #212121',

    },
}

export {Ticket};