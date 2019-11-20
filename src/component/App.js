import React, {Component} from 'react';
import Grid from './Grid';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
      return(
        <div className="header">
          <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <a className="navbar-brand" href="#"> <img className="logo" src={require('../logo/logo.png')} /> </a>
              <button className="navbar toggler" type="button" data tonggler="collape" data target="navbarSupportedContent" aria controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar toogle-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m1-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"  data-toggle="dropdown" aria-haspopup="true" aria expanded="false">PROMO</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">PROMO</a>
                      <a class="dropdown-item" href="#">Partnership</a>
                    </div>
                  </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PAKET & ADD ON</a>
                        <div classname="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <div className="dropdown divider"></div>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>

                      </li>
                      <li className="nav-item">
                        <a className="nav-link">PUSAT BANTUAN</a>
                      </li>
                </ul>

              </div>
             </nav>
          </div>
          <div className ="">
          <Grid/>
          </div>
        </div>
      );
    }
}


export default App;
