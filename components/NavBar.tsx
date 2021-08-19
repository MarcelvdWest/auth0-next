import { LogoutOptions, User, RedirectLoginOptions } from "@auth0/auth0-spa-js";

export interface NavBarProps {
    logout: (options?: LogoutOptions | undefined) => void,
    login: (options?: RedirectLoginOptions | undefined) => Promise<any>,
    user: User | undefined
}
 
const NavBar: React.FC<NavBarProps> = ({logout, login, user}) => {
    const handleLogout = () => {
        logout()
    }

    const handleLogin = () => {
        login()
    }

    return ( 
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-grey-800">
                My Todos
            </p>
            <div className="flex">
                {user && (
                    <button 
                        onClick={handleLogout}
                        className="rounded bg-blue-500 hover:bg-blue-600 text-white
                        py-2 px-4"
                    >
                        Logout
                    </button>

                )}
                {!user && (
                    <button 
                        onClick={handleLogin}
                        className="rounded bg-blue-500 hover:bg-blue-600 text-white
                        py-2 px-4"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
 
export default NavBar;