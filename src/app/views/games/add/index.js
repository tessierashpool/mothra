import React, { Component } from 'react';
import Page from '../../../components/Page';
import AddForm from '../../../components/Page/AddForm';
import {addGame} from '../../../services/games';

class Add extends Component {
    render() {
        const settings = {
            path:"games",
            elements:[
                {
                    attribute:"id",
                    name:"ID",
                    required:true
                },
                {
                    attribute:"name",
                    name:"Название игры",
                    required:true
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
                <AddForm settings={settings} />
            </Page>
        );
    }
}

export default Add;