import React, { Component } from 'react';
import Page from '../../../components/Page';
import Form from '../../../components/Page/Form';
import {addGame} from '../../../services/games';

class Add extends Component {
    render() {
        const settings = {
            ref:"games",
            action:"create",
            properties:[
                {
                    attribute:"id",
                    name:"ID",
                    required:true,
                    type:"string"
                },
                {
                    attribute:"name",
                    name:"Название игры",
                    required:true,
                    type:"string"
                },
                {
                    attribute:"icon",
                    name:"Иконка",
                    type:"img",
                    required:true,
                    path:"games"
                }
            ]
        }

        return (
            <Page loader={false}  title="Добавить новую игру" location="games" addBtn="false">
                <Form settings={settings} />
            </Page>
        );
    }
}

export default Add;
