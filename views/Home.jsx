const React = require('react');
const Layout = require('./components/Layout.jsx');

class Home extends React.Component {
    render () {
        return(
            <Layout>
                <div className="home-bg-img">
                    <div className="home-text">
                        <h1>What's On Your Vanity?</h1>
                        <p>Can't remember if a skincare product worked for you? Need to keep track of which products you own or have tested?<br/><span>Click below to organize your skincare journey!</span></p>
                        <a href="/items"><button className="home-btn">Start Tracking Here</button></a>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Home;