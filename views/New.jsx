const React = require('react');
const Layout = require('./components/Layout.jsx')

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div className="link">
                    <a href='/items'>Back to Main Page</a>
                </div>
                <div className="add-item">
                    <h1>What Did You Buy Now?</h1>
                    <form action="/items" method="POST">
                        Name: <input type="text" name="name"/><br/>
                        Brand: <input type="text" name="brand"/><br/>
                        Type: <input type="text" name="type"/><br/>
                        Image Link: <input type="text" name="img"/><br/>
                        Date Opened: <input type="text" name="dateOpened"/><br/>
                        Expires In: <input type="number" name="expiresIn"/> months<br/>
                        Notes: <textarea name="notes" placeholder="Enter any first thoughts or opinions here"></textarea><br/>
                        <input className="add-btn" type="submit" name="" value="Add Item"/>
                    </form>
                </div>
            </Layout>
        )
    }
}


module.exports = New;