import 'tailwindcss/tailwind.css'
import { SideMenu } from '../components/SideMenu/SideMenu';
import Head from "next/head";
import { useSelector, useDispatch, Provider } from "react-redux";
import store from "../store/index";
import "../styles/globals.css";
import Dashboard from './index';


function MyApp() {
    return (
        <Provider store={store}>
            <>
                <Dashboard />
            </>
        </Provider>
    );
}
export default MyApp