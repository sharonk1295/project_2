const React = require('react');
const Layout = require('./components/Layout.jsx')

class Edit extends React.Component {
    render() {
        const {item} = this.props;
        return(
            <Layout>
                <div className="edit-bg-img">
                    <div className="link">
                        <a href='/items'>Back to Main Page</a>
                    </div>
                    <div className="edit-info">
                        <h1>Edit: {item.name}</h1>
                        <form action={`/items/edit/${item._id}?_method=PUT`} method="POST">
                            Name: <input type="text" name="name" value={item.name}/><br/>
                            Brand: <input type="text" name="brand" value={item.brand}/><br/>
                            Type: <input type="text" name="type" value={item.type}/><br/>
                            Image Link: <input type="text" name="img" value={item.img}/><br/>
                            Date Opened: <input type="text" name="dateOpened" value={item.dateOpened}/><br/>
                            Expires In: <input type="number" name="expiresIn" value={item.expiresIn}/> months<br/>
                            Notes: <textarea name="notes" value={item.notes}></textarea><br/>
                            <input className="edit-btn" type="submit" name="" value="Accept Changes"/>
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}


module.exports = Edit;