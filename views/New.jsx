const React = require('react');
const Layout = require('./components/Layout.jsx')

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div>
                    <h1>What Did You Buy Now?</h1>
                    <form action="/items" method="POST">
                        Name: <input type="text" name="name"/><br/>
                        Brand: <input type="text" name="brand"/><br/>
                        Type: <input type="text" name="type"/><br/>
                        Image Link: <input type="text" name="img"/><br/>
                        Date Opened: <input type="text" name="dateOpened"/><br/>
                        Expires In: <input type="number" name="expiresIn"/> months<br/>
                        Notes: <textarea name="notes" placeholder="Enter any first thoughts or opinions here"></textarea><br/>
                        <input type="submit" name="" value="Add Item"/>
                    </form>
                </div>
                <a href="/items"><button>Back To Main Page</button></a>
            </Layout>
        )
    }
}


module.exports = New;