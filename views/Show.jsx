const React = require('react');
const Layout = require('./components/Layout.jsx')

class Show extends React.Component {
    render() {
        const {item} = this.props;
        return(
            <Layout>
                <div className="show-bg-img">
                    <a href='/items'>Back to Main Page</a>
                    <h1>{item.name}</h1>
                </div>
            </Layout>
        )
    }
}


module.exports = Show;