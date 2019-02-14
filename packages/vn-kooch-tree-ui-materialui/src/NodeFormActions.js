import React from 'react';
import { SaveButton } from 'vn-kooch-ui-materialui';
import NodeActions from './NodeActions';

const NodeFormActions = props => (
    <NodeActions {...props}>
        <SaveButton variant="flat" />
    </NodeActions>
);

export default NodeFormActions;
