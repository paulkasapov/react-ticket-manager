import React from 'react';
import './App.css';
import {Sidebar} from './components/Sidebar/Sidebar'
import {Content} from './components/Content/Content'

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
        selectedTicket: ''
    }

    componentDidMount() {
        this.getData();
    }

    setSelected = (selectedTicket) => {
        this.setState({selectedTicket: selectedTicket})
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

    getData = async () => {
        try {
            const res = await fetch("https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json");
            // const res = await fetch('http://127.0.0.1:3030/api/tickets');
            const data = await res.json();
            this.setState({data: data})
        } catch (e) {
            console.error('Ошибка:', e)
        }
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={{
                    fontSize: '14px',
                    height: '20px',
                    fontWeight: 'bold',
                    borderBottom: '3px solid #723ae8',
                    padding: '5px',
                    margin: '5px'
                }}>Tickets
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
