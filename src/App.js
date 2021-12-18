import { AOS } from 'aos';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Header/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUP/Signup';
import AddTeamMember from './Admin/AddTeamMember/AddTeamMember';
import AddReview from './Admin/AddReview/AddReview';

function App() {
  /* Theme Name:  Kasy- Responsive Landing page template
  File Description: Main JS file of the template
*/



  //  Window scroll sticky class add
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }

  window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
  })

  // Swiper slider

  /* var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); */



  //
  /********************* scroll top js ************************/
  //



  // When the user scrolls down 20px from the top of the document, show the button



  // When the user clicks on the button, scroll to the top of the document
  /* function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } */


  // 
  // Typed Text animation (animation)
  // 

  /* try {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };
   
    window.onload(typewrite());
  } catch(err) {
  } */


  // particles

  /* particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
              "enable": false
            }
          },
      "color": {
        "value": "#1e304d"
      },
      "shape": {
        "type": ["circle","star","polygon"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
  
        "value": 3,  
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 150,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }); */


  // home3 swiper slider 

  /* var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  }
); */

  // Animaten js


  return (

    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/AddTeamMember" element={<AddTeamMember />}>
        </Route>
        <Route path="/AddReview" element={<AddReview />}>
        </Route>
        <Route path="/signup" element={<Signup />}>
        </Route>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />}>

        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
