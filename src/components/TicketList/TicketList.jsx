import React from 'react'
import {Ticket} from '../Ticket/Ticket'
import './TicketList.css'

const TicketList = props => {

    const renderTickets = () => {
        return (
            props.data.map((item) => <Ticket key={item.ticketId}
                                                  ticket={item}
                                                  selectedTicket={props.selectedTicket}
                                                  setSelected={props.setSelected}
                                                  renderStatus={props.renderStatus}/>)
        )
    }

    return (
        <div style={{backgroundColor: '#323232'}}>
            <div style={{...styles.container, ...{height: '40px'}}}>
                <div style={{...styles.headerField, ...{flex: 2, borderBottom: '1px solid #212121'}}}>OWNER</div>
                <div style={{...styles.headerField, ...{flex: 5, borderBottom: '1px solid #212121'}}}>REPORTED</div>
                <div style={{...styles.headerField, ...{flex: 6, borderBottom: '1px solid #212121'}}}>ASSET</div>
                <div style={{...styles.headerField, ...{flex: 2, borderBottom: '1px solid #212121'}}}>STATUS</div>
            </div>
            <div className={'scrollable'} style={{
                overflowY: 'scroll',
                height: 'calc(100vh - 160px)',
                padding: '40px 0 10px'
            }}>
                {renderTickets()}
            </div>
        </div>
    )
}

const styles = {

    container: {
        display: 'flex',
        marginBottom: '-40px',
        width: 'calc(100% - 58px)',
        padding: '0 23px',
        backgroundColor: '#323232',
        position: 'relative',
        fontSize: '10px',
        color: '#707070',
    },
    headerField: {
        padding: '14px 0'
    },

}

export {TicketList};