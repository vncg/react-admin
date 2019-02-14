import { CoreAdminRouter } from 'vn-kooch-core';
import { Loading } from 'vn-kooch-ui-materialui';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
    loading: Loading,
};

export default AdminRouter;
