

const Header = () => {
    return (
      <div class="container">
        <div class="row py-0">
          <div class="col">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a href="" class="navbar-brand">
                yadav
              </a>
              <div class="collapse navbar-collapse" id="mynavbar">
                <ul class="navbar-nav">

                  <li class="nav-item">
                    <a href="/" class="nav-link">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      About Us
                    </a>
                  </li>
                  
                  <li class="nav-item dropdown">
                    <a
                      href=""
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Service
                    </a>
                    <ul class="dropdown-menu">
                      <a href="" class="dropdown-item">
                         One
                      </a>
                      <a href="" class="dropdown-item">
                        Two
                      </a>
                      <a href="" class="dropdown-item">
                        Three
                      </a>
                    </ul>
                  </li>
                  </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  };
 export default Header;