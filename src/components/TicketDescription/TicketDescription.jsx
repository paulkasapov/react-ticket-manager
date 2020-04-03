import React from 'react'
import {DescriptionCard} from "../DescriptionCard/DescriptionCard";
import {DescriptionField} from "../DescriptionField/DescriptionField";
import moment from "moment";
import styles from './TicketDescription.module.css'


const TicketDescription = props => {

    const renderText = (text) => {
        return <div>{text}</div>
    }

    const renderLocation = (locationFrom, locationTo) => {
        return <div>
            <div className={styles.location}>{locationFrom.toFixed(3)}</div>
            <div className={styles.location}>{locationTo.toFixed(3)}</div>
        </div>
    }
    
    return (
        <div className={styles.wrapper}>
            <DescriptionCard title='Owner'>
                <div className={styles.ownerField}>
                    <img src={props.selectedTicket.owner.avatar} className={styles.ownerImg}/>
                    <div className={styles.ownerText}>
                        <div>{props.selectedTicket.owner.firstName} {props.selectedTicket.owner.lastName}</div>
                        <div className={styles.ownerSpeciality}>{props.selectedTicket.owner.specialities.join(', ')}</div>
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