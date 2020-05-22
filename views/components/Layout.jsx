const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>What's On Your Vanity?</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>{this.props.children}</body>
            </html>
        )
    }
}


module.exports = Layout;