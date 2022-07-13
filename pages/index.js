import 'tailwindcss/tailwind.css'
import { SideMenu } from '../components/SideMenu/SideMenu';
import Head from "next/head";
import { useSelector, useDispatch, Provider } from "react-redux";
import store from "../store/index";
import { HomeContent } from '/components/HomeContent'
import { SideBar } from '../components/SideMenu/SideBar';
import { DashBoard } from '../components/DashBoard';
import { Profile } from '../components/Profile';
import { Cart } from '../components/Cart';
import { Favourites } from '../components/Favourites';
import { Settings } from '../components/Settings';
import { TopBar } from '../components/TopBar/TopBar';


function Dashboard() {
    const { activeTab, isSideMenu } = useSelector((state) => state.sideMenu);

    const getActiveTabElement = () => {
        switch (activeTab) {
            case 1:
                return (
                    <DashBoard />
                );
                break;
            case 2:
                return (
                    <Profile />
                );
                break;
            case 3:
                return (
                  <Cart/>
                );
                break;
            case 4:
                return (
                  <Favourites/>
                );
                break;
            case 5:
                return (
                    <Settings/>
                );
                break;
            default:
                return <HomeContent />;
        }
    };
    return (
        <Provider store={store}>
            <>
            
                <div className='flex h-full w-full gap-x-5'>
                    {isSideMenu ?
                        <div className={`${isSideMenu ? "w-1/6" :"w-20" } bg-gray-800 min-h-screen shadow-md ease-in-out transition  duration-500 `}>
                            <SideMenu /></div>
                        : <div className='w-20 bg-gray-800 min-h-screen shadow-md ease-in-out   duration-100 '><SideBar /></div>}
                            <div className={`${isSideMenu ? "w-5/6" :"w-full" } h-full`}>
                <TopBar/>
            
                    <div className='w-full grid h-screen'>
                
                        <div className='place-self-center'>
                            {getActiveTabElement()}
                        </div>
                        </div>
                    </div>



                </div>
            </>
        </Provider>
    );
}
export default Dashboard;