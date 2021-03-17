import { Link }from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className= "navbar">
            <h1>My react blog</h1>
            <div className= "links">
                <Link to="/" style={{ 
                    color: 'white', 
                     backgroundColor: '#aaaaaa',
                     borderRadius: '8px' 
                    }}>Home</Link>
                <Link to="/create" style={{ 
                    color: 'white', 
                     backgroundColor: '#aaaaaa',
                     borderRadius: '8px' 
                    }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;