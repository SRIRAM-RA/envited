import React, {Component} from "react";

class LandingBox1 extends Component{
    render(){
        return(
            <div className="box1">
                <div className="inner-box1">
                    <div className="box1-image-box">
                        <img src="/images/image1.png" className="sample-image" alt="sampleimage"></img>
                    </div>
                    <div className="box1-text-box">
                        <h1>
                            Imagine if <span className="highlight hover-underline-animation">Snapchat</span> had events.
                        </h1>
                        <p>
                            Easily host and share events with your friends across any social media
                        </p>
                        <a href="/create_event"><button type="submit" className="create-event">🎉 Create my event</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingBox1;