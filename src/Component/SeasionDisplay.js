// import React from 'react';

// function SeasionDisplay() {

//     window.navigator.geolocation.getCurrentPosition(
//         position=> console.log(position),
//         err => console.log(err)
//     )


//     return (
//         <div>
//             <p>{position}</p>
//         </div>
//     )
// }

// export default SeasionDisplay;


import React, { Component } from 'react'

export default class SeasionDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => this.setState({ errorMessage: err.message })

        )

    }


    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude :{this.state.lat}</div>
        }

return <div>Loading ...</div>
    }
}