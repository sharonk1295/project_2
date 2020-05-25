const React = require('react');
const Layout = require('./components/Layout.jsx')

class Show extends React.Component {
    render() {
        const {item} = this.props;
        return(
            <Layout>
                <div className="show-bg-img">
                    <div className="link"><a href='/items'>Back to Main Page</a></div>
                    <div className="outer-polgyon">
                        <div className="item-info">
                            <h1>{item.name}</h1>
                            <h3>Brand: {item.brand}</h3>
                            <h3>Type: {item.type}</h3>
                            <h3>Date Opened: {item.dateOpened}</h3>
                            <h3>Expires in {item.expiresIn} months from opening date</h3>
                            <p><span>Notes:</span> {item.notes}</p>
                        </div>
                    </div>
                    <div className="btn-options">
                        <a href={`/items/edit/${item._id}`}><button>Edit Item</button></a>
                        <form action={`/items/${item._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete Item"/>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Show;