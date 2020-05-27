const React = require('react');
const Layout = require('./components/Layout.jsx')

class Index extends React.Component {
    render() {
        const {items} = this.props;
        return(
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container header-text col-md-12">
                        <h1>What's On Your <span>Vanity?</span></h1>
                        <p>~ Maintain a healthy skincare routine by organizing and keeping track of your skincare products ~</p>
                        <a className="btn btn-primary btn-lg" id="header-btn" href={`/items/add`} role="button">Add An Item</a>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-deck justify-content-center">
                            {items.map((item, index) => {
                                return (
                                    <div className="card mb-5 text-truncate" style={{minWidth:"18rem", maxWidth:"18rem"}}>
                                        <div className="card-body">
                                            <img className="card-img-top" src={item.img}/>
                                            <h3 className="card-title">{item.name}</h3>
                                            <p className="card-text">Brand: {item.brand}</p>
                                            <p className="card-text">Type: {item.type}</p>
                                            <a href={`/items/${item._id}`} className="btn btn-outline-info" role="button">See More Info</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>    
                    </div>
                </div>  
            </Layout>
        )
    }
}


module.exports = Index;