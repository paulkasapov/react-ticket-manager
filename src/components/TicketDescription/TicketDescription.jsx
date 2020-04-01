import React from 'react'
import {DescriptionCard} from "../DescriptionCard/DescriptionCard";
import {DescriptionField} from "../DescriptionField/DescriptionField";
import moment from "moment";
import './TicketDescription.css'


const TicketDescription = props => {

    const renderText = (text) => {
        return <div>{text}</div>
    }

    const renderLocation = (locationFrom, locationTo) => {
        return <div>
            <div style={{
                padding: '3px 0',
                textAlign: 'center',
                width: '60px',
                border: '1px solid #212121',
                borderRadius: '3px',
                fontWeight: '500',
                display: 'inline-block',
                margin: '3px 3px 0 0'
            }}>{locationFrom.toFixed(3)}</div>
            <div style={{
                padding: '3px 0',
                textAlign: 'center',
                width: '60px',
                border: '1px solid #212121',
                borderRadius: '3px',
                fontWeight: '500',
                display: 'inline-block',
                margin: '3px 3px 0 0'
            }}>{locationTo.toFixed(3)}</div>
        </div>
    }
    return (
        <div style={{height: 'calc(100vh - 120px)', overflow: 'auto'}}>
            <DescriptionCard title='Owner'>
                <div style={{backgroundColor: '#323232', padding: '3px'}}>
                    <div style={{display: 'inline-block'}}>
                        <img src={props.selectedTicket.owner.avatar}
                             style={{width: '30px', height: '30px', borderRadius: '50%'}}/>
                    </div>
                    <div style={{display: 'inline-block', verticalAlign: 'top', padding: '2px 0 0 10px'}}>
                        <div>{props.selectedTicket.owner.firstName} {props.selectedTicket.owner.lastName}</div>
                        <div style={{
                            textTransform: 'uppercase',
                            fontSize: '8px'
                        }}>{props.selectedTicket.owner.specialities.join(', ')}</div>
                    </div>
                </div>
            </DescriptionCard>
            <DescriptionCard title='Details'>
                <DescriptionField title='Reported'
                                  renderContent={() => {
                                      return moment(props.selectedTicket.reportedTime).format('DD/MM/YY hh:mm')
                                  }}/>
                <DescriptionField title='Status'
                                  renderContent={() => props.renderStatus(props.selectedTicket.status)}/>
                <DescriptionField title='Description'
                                  renderContent={() => renderText(props.selectedTicket.description)}/>
            </DescriptionCard>
            <DescriptionCard title='Asset'>
                <DescriptionField title='Name'
                                  renderContent={() => renderText(props.selectedTicket.asset.name)}/>
                <DescriptionField title='GeoCode'
                                  renderContent={() => renderText(props.selectedTicket.asset.geoCode)}/>
                <DescriptionField title='Location'
                                  renderContent={() => renderLocation(props.selectedTicket.asset.kmFrom, props.selectedTicket.asset.kmTo)}/>
            </DescriptionCard>
        </div>
        )
}

export {TicketDescription};