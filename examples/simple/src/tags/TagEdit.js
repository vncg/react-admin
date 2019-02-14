/* eslint react/jsx-key: off */
import React from 'react';
import { Edit, SimpleForm, TextField, TextInput, required } from 'vn-kooch-react-admin';

const TagEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" validate={[required()]} />
        </SimpleForm>
    </Edit>
);

export default TagEdit;
