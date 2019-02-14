import React, { Component } from 'react';
import { Admin, Resource } from 'vn-kooch-react-admin';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';

import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout, Menu } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import persianMessages from './i18n/fa';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

import dataProviderFactory from './dataProvider';
import fakeServerFactory from './fakeServer';

const i18nProvider = locale => {
    if (locale === 'en') {
        return import('./i18n/en').then(messages => messages.default);
    }

    // Always fallback on english
    return persianMessages;
};

const theme = createMuiTheme({
    direction: 'rtl',
  });

class App extends Component {
    state = { dataProvider: null };

    async componentWillMount() {
        this.restoreFetch = await fakeServerFactory(
            process.env.REACT_APP_DATA_PROVIDER
        );

        const dataProvider = await dataProviderFactory(
            process.env.REACT_APP_DATA_PROVIDER
        );

        this.setState({ dataProvider });
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
            <Admin
                title=""
                dataProvider={dataProvider}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authProvider={authProvider}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                locale="fa"
                i18nProvider={i18nProvider}
                theme={theme}
            >
                <Resource name="customers" {...visitors} />
                <Resource
                    name="commands"
                    {...orders}
                    options={{ label: 'Orders' }}
                />
                <Resource name="invoices" {...invoices} />
                <Resource name="products" {...products} />
                <Resource name="categories" {...categories} />
                <Resource name="reviews" {...reviews} />
            </Admin>
        );
    }
}

export default App;
