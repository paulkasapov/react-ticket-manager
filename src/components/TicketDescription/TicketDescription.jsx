import React from 'react'
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import DescriptionField from "../DescriptionField/DescriptionField";
import Status from "../Status/Status";
import moment from "moment";
import styles from './TicketDescription.module.css'

const TicketDescription = (props) => {

    const {selectedTicket} = props;

    const renderText = (text) => {
        return <div>{text}</div>
    };

    const renderLocation = (locationFrom, locationTo) => {
        return <div>
            <div className={styles.location}>{locationFrom.toFixed(3)}</div>
            <div className={styles.location}>{locationTo.toFixed(3)}</div>
        </div>
    };

    return (
        <div className={styles.wrapper}>
            <DescriptionCard title='Owner'>
                <div className={styles.ownerField}>
                    <img src={selectedTicket.owner.avatar} alt={'avatar'} className={styles.ownerImg}/>
                    <div className={styles.ownerText}>
                        <div>{selectedTicket.owner.firstName} {selectedTicket.owner.lastName}</div>
                        <div
                            className={styles.ownerSpeciality}>{selectedTicket.owner.specialities.join(', ')}</div>
                    </div>
                </div>
            </DescriptionCard>
            <DescriptionCard title='Details'>
                <DescriptionField title='Reported'
                                  renderContent={() => {
                                      return moment(selectedTicket.reportedTime).format('DD/MM/YY hh:mm')
                                  }}/>
                <DescriptionField title='Status'
                                  renderContent={() => {
                                      return (<Status status={selectedTicket.status}/>)
                                  }}/>
                <DescriptionField title='Description'
                                  renderContent={() => renderText(selectedTicket.description)}/>
            </DescriptionCard>
            <DescriptionCard title='Asset'>
                <DescriptionField title='Name'
                                  renderContent={() => renderText(selectedTicket.asset.name)}/>
                <DescriptionField title='GeoCode'
                                  renderContent={() => renderText(selectedTicket.asset.geoCode)}/>
                <DescriptionField title='Location'
                                  renderContent={() => renderLocation(selectedTicket.asset.kmFrom, selectedTicket.asset.kmTo)}/>
            </DescriptionCard>
        </div>
    )
};

export default TicketDescription