import { Link } from "react-router-dom"

const Navbar: React.FC = () => {

    // const handleClick = () => {
    //     console.log("Logout")
    // }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Lyrics Buddy</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar