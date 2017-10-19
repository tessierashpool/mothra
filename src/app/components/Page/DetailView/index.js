import React, { Component } from 'react';
import Line from './Line';
import moment from 'moment';
import Loader from '../Loader';
import {db} from '../../../config/firebase';
class DetailView extends Component {
    constructor(props) {
        super(props);
        this.state ={
            item:{}
        };
    }

    componentWillMount () {
        db.ref(this.props.settings.ref).child(this.props.settings.id)
        .once("value",(snap)=>{
            let item = snap.val();

            var elementToView = {};
            this.props.settings.properties.map((element)=>{
                elementToView[element.attribute] = item[element.attribute];
            })

            this.setState({
                item: elementToView
            });

        }).then(()=>{
            Loader.enablePage();
        })
    }

    render() {
        const body = this.props.settings.properties.map((line) =>{
                return <Line key={line.attribute} settings={line} value={this.state.item[line.attribute]} />
            }
        )

        return (
            <table className="table">               
                <tbody>
                    {body}
                </tbody>
            </table>            
        );
    }
}

export default DetailView;
