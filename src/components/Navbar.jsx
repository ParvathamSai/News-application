
const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page" onClick={()=>setCategory("technology")}>Technology</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page" onClick={()=>setCategory("buisness")} >Buisness</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page"  onClick={()=>setCategory("entertainment")}>Entertainment</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page"  onClick={()=>setCategory("general")} >General</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page"  onClick={()=>setCategory("health")} >health</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page"  onClick={()=>setCategory("sports")} >Sports</div>
                </li>
                <li className="nav-item">
                    <div className="nav-link active" aria-current="page"  onClick={()=>setCategory("science")}>Science</div>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar