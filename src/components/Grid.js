import React, {Component} from 'react';
import Single from './Single';


class Grid extends Component {
    renderList() {
        return this.props.items.map((item,i) =>(<Single key={++i} item={item} deleteData={this.deleteData.bind(this)} />));
    }
    deleteData(docId) {
        this.props.deleteData(docId);
    }

    render() {
        return (
                <div>
                    <div className="row">
                        <ul className="">
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Grid;