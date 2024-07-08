import React from 'react';

class HTMLRenderer extends React.Component {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
    }
}

export default HTMLRenderer;
