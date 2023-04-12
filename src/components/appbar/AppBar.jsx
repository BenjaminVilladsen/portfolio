import DesktopAppBar from "./DesktopAppBar";
import MobileAppBar from "./MobileAppBar";

const AppBar = ({refs}) => {
    return ( <div>
            <div className="lg:hidden block">
            <MobileAppBar refs={refs}/>
            </div>
            <div className="hidden lg:block">
            <DesktopAppBar refs={refs}/>
            </div>

    </div> );
}
 
export default AppBar;