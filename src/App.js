import React from 'react';
import './App.css';
import {Sidebar} from './components/Sidebar/Sidebar'
import {Content} from './components/Content/Content'
import {Modal} from "./components/Modal/Modal";
import {AddTicketForm} from "./components/AddTicketForm/AddTicketForm";

const shortedStatus = {
    assigned: {
        text: 'ASD',
        color: '#ffc11a'
    },
    unassigned: {
        text: 'UNA',
        color: '#707070'
    },
    completed: {
        text: 'COM',
        color: '#0bb141'
    }
}

class App extends React.Component {

    state = {
        data: [],
        selectedTicket: '',
        isModalOpen: false,
        modalContent: '',
        lastTicketId: 1,
        currentUser:  {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '../assets/default-avatar.png',
            specialities: ['Programmer']
        }
    }

    componentDidMount() {
        this.getData();
    }

    setSelected = (selectedTicket) => {
        this.setState({selectedTicket: selectedTicket})
    }

    handleOpenAddTicketModal = (content) => {
        this.setState({isModalOpen: true, modalContent: content})
    }

    handleCloseModal = () => {
        this.setState({isModalOpen: false})
    }

    showModal = () => {
        if (this.state.isModalOpen) {
            return (
                <Modal handleCloseModal={this.handleCloseModal} isModalOpen={this.state.isModalOpen}>
                    {this.state.modalContent}
                </Modal>
            )
        }
        return true
    }

    renderStatus = (status) => {
        return <div style={{
            padding: '3px 0',
            textAlign: 'center',
            width: '40px',
            border: '1px solid #212121',
            borderRadius: '3px',
            fontWeight: '500',
            display: 'inline-block',
            marginTop: '3px',
            fontSize: '10px',
            color: shortedStatus[status].color
        }}>{shortedStatus[status].text}</div>
    }

    handleAddTicket = (ticket) => {
        this.setState(state => {
            state.data.push(ticket)
            state.lastTicketId++
        })
        console.log(this.state.lastTicketId)
    }

    getData = async () => {
        try {
            const res = await fetch("https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json");
            // const res = await fetch('http://127.0.0.1:3030/api/tickets');
            const data = await res.json();
            console.log(data);
            this.setState({data: data, lastTicketId: data[data.length - 1].ticketId})
        } catch (e) {
            console.error('Ошибка:', e)
        }
    }

    render() {
        console.log('Общий рендер')
        console.log(this.state.data);
        return (
            <div style={styles.wrapper}>
                <div style={{
                    fontSize: '14px',
                    height: '20px',
                    fontWeight: 'bold',
                    borderBottom: '3px solid #723ae8',
                    padding: '5px',
                    margin: '5px',
                    position: 'relative',
                }}>
                    <div>Tickets</div>
                    <button onClick={() => this.handleOpenAddTicketModal(<AddTicketForm lastTicketId={this.state.lastTicketId} currentUser={this.state.currentUser} handleAddTicket={this.handleAddTicket}/>)}
                            style={{
                        border: '1px solid rgb(33, 33, 33)',
                        borderRadius: '3px',
                        backgroundColor: 'rgb(114, 58, 232)',
                        color: 'inherit',
                        position: 'absolute',
                        right: '5px',
                        top: '5px',
                        width: '20px',
                        height: '20px',
                        padding: 0,
                        fontSize:'18px'}}>+</button>
                </div>
                <div style={styles.container}>
                    <Sidebar data={this.state.data}
                             selectedTicket={this.state.selectedTicket}
                             setSelected={this.setSelected}
                             renderStatus={this.renderStatus}/>

                    <Content data={this.state.data}
                             selectedTicket={this.state.selectedTicket}
                             renderStatus={this.renderStatus}/>
                </div>
                {this.showModal()}
            </div>

        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: '#252525',
        padding: '5px',
        color: '#adadad',
        height: 'calc(100vh - 10px)',
        fontSize: '12px',

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }
}

export default App;
