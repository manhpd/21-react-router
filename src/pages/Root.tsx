import { Outlet } from 'react-router-dom';
import MainNavigator from '../components/MainNavigator';

export default function RootLayout() {
    return (
      <>
        <MainNavigator />
        <main>
            <Outlet />
        </main>
      </>
    );
}