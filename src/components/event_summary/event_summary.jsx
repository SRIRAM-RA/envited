import React, {Component} from "react";


class EventSummary extends Component{
    render(){
        return(
            <div className="event-summary-box">
                <div className="event-summary-innerbox">
                    <div className="event-summary-details-box">
                        <h1 className="hover-underline-animation">Event Summary Details</h1>
                        <h2>Birthday Bash</h2>
                        <h3>by SOMEONE</h3>

                        <div className="details">
                            <img src="/images/locaiton.gif" c alt="loc"/>
                            <h3>London, Europe</h3>
                        </div>
                        <div className="time">
                            <img src="/images/time.gif"  alt="time"/>
                            <h3>08/02/2021</h3>
                            <h3>10:00 UTC</h3>
                        </div>
                    </div>
                    <div className="event-summary-image-box">
                        <img src="/images/event image.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventSummary;