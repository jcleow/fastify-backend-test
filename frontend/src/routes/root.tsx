// import SideBar from "../components/SideBar"
import { PrimeReactProvider } from 'primereact/api';
import SideBar from "../components/SideBar"
export default function Root() {
    const value = {
      ripple: true,
    };
  return (
      <PrimeReactProvider value={value}>
        <SideBar/>
      </PrimeReactProvider>
    );
  }