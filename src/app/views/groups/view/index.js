import React, { Component } from 'react';
import Page from '../../../components/Page';
import DetailView from '../../../components/Page/DetailView';
import {Link} from 'react-router-dom';

class View extends Component {
    render() {
        const settings = {
            ref:'games/'+this.props.match.params.id,
            properties:[
                {
                    attribute:"id",
                    name:"ID"
                },
                {
                    attribute:"name",
                    name:"Name"
                },
                {
                    attribute:"createdAt",
                    name:"Created at",
                    type:"date"
                },
                {
                    attribute:"icon",
                    name:"Icon",
                    type:"fireimg"
                }
            ]
        }

        return (
            <Page>
                <h1 className="display-3">{"Game " + this.props.match.params.id}</h1>
                <p className="lead text-muted">View {"game " + this.props.match.params.id}</p>     
                <Link to={"/groups/update/" + this.props.match.params.id} className="btn btn-primary mb-4">Update</Link>       
                <DetailView settings={settings} />
            </Page>
        );
    }
}

export default View;
