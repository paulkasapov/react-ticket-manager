import React from 'react'
import {TicketDescription} from '../TicketDescription/TicketDescription'
import moment from "moment";
import Cross from '../../assets/cross.png'
import './Content.css'

const Content = props => {

    const showDescription = (ticket) => {
        if (ticket) {
            return (
                <div style={styles.content}>
                    <div style={{...styles.container, ...{fontSize: '10px'}}}>
                        <div>
                            <div style={{display: 'inline-block', color: '#707070'}}>TICKET NO.</div>
                            <div style={{display: 'inline-block', marginLeft: '3px'}}>{props.selectedTicket.number}</div>
                        </div>
                        <div style={{color: '#707070'}}>LAST
                            UPDATED: {moment(props.selectedTicket.lastUpdatedTime).format('DD/MM/YY hh:mm')}</div>
                    </div>

                    <TicketDescription selectedTicket={props.selectedTicket}
                                       renderStatus={props.renderStatus}/>
                </div>)
        }
        return <div style={{...styles.content, ...{display: 'flex', alignItems: 'center', justifyContent: 'center'}}}>
            <div style={{width: '100px', textAlign: 'center'}}>
                <img src={Cross} style={{width: '10px', display: 'inline-block'}}/>
                <div style={{fontSize: '10px',}}>No ticket selected</div>
            </div>
        </div>
    }

    return (
        showDescription(props.selectedTicket)
    )

}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#323232',
        padding: '5px 10px',
    },
    content: {
        flex: '2',
        backgroundColor: '#323232',
        padding: '5px',
        margin: '5px',
    }
}

export {Content};