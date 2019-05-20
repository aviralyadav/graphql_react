import React, { Component } from 'react';

class NewComp extends Component {
    state = {  }
    render() {
        console.log(this.props);
        return (
            <div>New component</div>
        );
    }
}

export default NewComp;