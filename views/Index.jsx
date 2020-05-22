const React = require('react');
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render() {
        const {items} = this.props;
        return(
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container header-text">
                        <h1>What's On Your Vanity?</h1>
                        <p>~ Maintain a healthy skincare routine by organizing and keeping track of your skincare products ~</p>
                        <a className="btn btn-primary btn-lg" id="header-btn" href={`/items/add`} role="button">Add An Item</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        {items.map((item, index) => {
                            return (
                                <div className="thumbnail">
                                    <img className="thumb-img" src={item.img}/>
                                    <div className="caption">
                                        <h3>{item.name}</h3>
                                        <p>Brand: {item.brand}</p>
                                        <p>Type: {item.type}</p>
                                        <p><a href={`/items/${item._id}`} className="btn btn-outline-info" role="button">See More Info</a></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Index;