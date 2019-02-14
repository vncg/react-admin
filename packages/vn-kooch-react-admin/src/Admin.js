import { CoreAdmin } from 'vn-kooch-core';
import {
    Layout as DefaultLayout,
    Loading,
    Login,
    Logout,
    NotFound,
} from 'vn-kooch-ui-materialui';

const Admin = CoreAdmin;

Admin.defaultProps = {
    appLayout: DefaultLayout,
    catchAll: NotFound,
    loading: Loading,
    loginPage: Login,
    logoutButton: Logout,
};

export default Admin;
