import React from 'react'
import {DescriptionCard} from "./DescriptionCard";
import {DescriptionField} from "./DescriptionField";
import moment from "moment";


class TicketDescription extends React.Component {


    renderText = (text) => {
        return <div>{text}</div>
    }

    renderLocation = (locationFrom, locationTo) => {
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

    render() {
        return (
            <div style={{height: 'calc(100vh - 120px)', overflow: 'auto'}}>

                <DescriptionCard title='Owner'>
                    <div style={{backgroundColor: '#323232', padding: '3px'}}>
                        <div style={{display: 'inline-block'}}>
                            <img src={this.props.selectedTicket.owner.avatar}
                                 style={{width: '30px', height: '30px', borderRadius: '50%'}}/>
                        </div>
                        <div style={{display: 'inline-block', verticalAlign: 'top', padding: '2px 0 0 10px'}}>
                            <div>{this.props.selectedTicket.owner.firstName} {this.props.selectedTicket.owner.lastName}</div>
                            <div style={{
                                textTransform: 'uppercase',
                                fontSize: '8px'
                            }}>{this.props.selectedTicket.owner.specialities.join(', ')}</div>
                        </div>
                    </div>
                </DescriptionCard>
                <DescriptionCard title='Details'>
                    <DescriptionField title='Reported'
                                      renderContent={() => {
                                          return moment(this.props.selectedTicket.reportedTime).format('DD/MM/YY hh:mm')
                                      }}/>
                    <DescriptionField title='Status'
                                      renderContent={() => this.props.renderStatus(this.props.selectedTicket.status)}/>
                    <DescriptionField title='Description'
                                      renderContent={() => this.renderText(this.props.selectedTicket.description)}/>
                </DescriptionCard>
                <DescriptionCard title='Asset'>
                    <DescriptionField title='Name'
                                      renderContent={() => this.renderText(this.props.selectedTicket.asset.name)}/>
                    <DescriptionField title='GeoCode'
                                      renderContent={() => this.renderText(this.props.selectedTicket.asset.geoCode)}/>
                    <DescriptionField title='Location'
                                      renderContent={() => this.renderLocation(this.props.selectedTicket.asset.kmFrom, this.props.selectedTicket.asset.kmTo)}/>
                </DescriptionCard>
            </div>


        )
    }
}

export {TicketDescription};