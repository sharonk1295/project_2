const React = require('react');
const Layout = require('./components/Layout.jsx');

class Home extends React.Component {
    render () {
        return(
            <Layout>
                <h1>Hello</h1>
                <a href="/items">Click Here to go to Index</a>
            </Layout>
        )
    }
}


module.exports = Home;