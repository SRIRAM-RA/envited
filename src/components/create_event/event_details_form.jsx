import React, {Component} from "react";
import TextField from '@mui/material/TextField';


// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

class EventDetailsForm extends Component{

    constructor(){
        super()
        this.state={
            value: '',
        }
        this.handleChange.bind(this)
    }

    handleChange = (newValue) => {
        // setValue(newValue);
        this.setState({value:newValue})
        console.log(this.state.value)
      };

    settime = (value1) => {
        this.setState({value1:value1})
        console.log(this.state.value1)
    }

    render(){
        return(
            <div className="create-event-box1">
                <div className="create-event-innerbox">
                    <h1 className="hover-underline-animation">Event Details</h1><br/><br/>
                    <h2> Event Title</h2>
                    <TextField id="standard-basic" placeholder="Enter the event title" variant="standard" className="input"/>
                    <h2> Event Host Name</h2>
                    <TextField id="standard-basic" placeholder="Enter the Host name" variant="standard" className="input"/>
                    <h2> Event Venue</h2>
                    <TextField id="standard-basic" placeholder="Enter the Venue details" variant="standard" className="input"/>
                    <h2>Event Date</h2>
                    <input type="date"></input><br/><br/>
                    <h2>Event Time</h2>
                    <TextField id="standard-basic" placeholder="Enter the start time" variant="standard" className="input"/>

                    {/* MUI DATE AND TIME PICKER*/}

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    disableFuture
                    // label="Responsive"
                    className="date"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                    <br/><br/><br/>
                    <h2>Event Start Time</h2>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                    value={this.state.value}
                    onChange={this.settime.bind(this)}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider> */}



                    <br/><br/>
                    <a href="/event_details"><button type="submit" className="proceed-btn">NEXT</button></a>
                </div>
            </div>
        )
    }
}

export default EventDetailsForm;