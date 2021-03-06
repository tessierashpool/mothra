import React, { Component } from 'react';
import Page from '../../../components/page';
import Form from '../../../components/page/form';

class Add extends Component {
    render() {
        const settings = {
            ref:"grouptest",
            id:this.props.match.params.id,
            action:"update",
            successMsg:"Group is updated",
            properties:[
                {
                    attribute:"id",
                    name:"ID",
                    required:true,
                    type:"string"
                },
                {
                    attribute:"name",
                    name:"Name",
                    required:true,
                    type:"string"
                },
                {
                    attribute:"description",
                    name:"Description",
                    type:"string"
                },             
                {
                    attribute:"sigil",
                    name:"Sigil",                   
                    type:"fireimg",
                    path:"games"
                },                                     
                {
                    attribute:"logo",
                    name:"Logo",                   
                    required:true,
                    type:"fireimg",
                    path:"games"
                }             
            ]
        }
        return (
            <Page>
                <h1 className="display-3">Update group</h1>
                <p className="lead text-muted">Update group "{this.props.match.params.id}"</p>              
                <Form settings={settings} />
            </Page>
        );
    }
}

export default Add;
