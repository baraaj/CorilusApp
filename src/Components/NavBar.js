import  logo  from  '../assets/images/logo.PNG';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top">
    <div className="container">
        <a href="" className="navbar-brand"><img src={logo} alt="easylo logo"/></a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#easylo" type="button">
            <span className="bi bi-list"></span>
        </button>

        <div className="collapse navbar-collapse" id="easylo">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"> <a className="nav-link text-dark" href="/">Home</a> </li>
                <li className="nav-item"> <a className="nav-link text-dark" href="">About</a> </li>
                <li className="nav-item"> <a className="nav-link text-dark" href="">Services</a></li>
                <li className="nav-item"> <a className="nav-link text-dark" href="/list">EFACT</a></li>
              
                <li className="nav-item"> <a className="nav-link btn border-0 btn-primary" href="">Contact</a></li>
            </ul>
            
        </div>
    </div>

</nav>
  );
}

export default NavBar