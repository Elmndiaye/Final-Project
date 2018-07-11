import Layout from './src/components/layout';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';
import { Component } from 'react';
    

    class Dashboard  extends Component {
        static getInitialProps({ store })
        // console.log(store)
    }

        render () {
    return {
        <Layout >
        <p> welcome</p>
        <p>{JSON.stringify(this.props)}</p>
        </layout>
        }
    }
          
export default withRedux(makeStore, state => ({ foo: state.foo}))(dashboard)