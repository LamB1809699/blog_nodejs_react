import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
    return (
        <div className="d-flex row">
            <div className="col-9"><SinglePost /></div>
            <div className="col-3"><Sidebar /></div>
        </div>
    )
}
