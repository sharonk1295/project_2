const React = require('react');
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render() {
        return(
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container header-text">
                        <h1>What's On Your Vanity?</h1>
                        <p>~ Maintain a healthy skincare routine by organizing and keeping track of your skincare products ~</p>
                        <a className="btn btn-primary btn-lg" href={`/items/add`} role="button">Add An Item</a>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Index;