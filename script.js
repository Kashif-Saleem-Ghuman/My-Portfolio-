/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.desktop-navigation');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Projects Info //


const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML = `
<h2>Project name goes here</h2>
  <ul>
    <li>Html/CSS</li>
    <li>Ruby on Rails</li>
    <li>JavaScript</li>
  </ul>
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver"></div>
      <div class="swiper-slide"><img src="images/Rectangle 21 (1).svg" alt=""></div>
      <div class="swiper-slide"><img src="images/Rectangle 21 (2).svg" alt=""></div>
      <div class="swiper-slide"><img src="images/Rectangle 21 (3).svg" alt=""></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination">
      <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
      <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
      <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
      <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam quas voluptatum adipisci accusamus culpa
    cum voluptatibus dicta mollitia, commodi minima quaerat aliquam esse, repudiandae vitae nihil corrupti animi
    expedita!</p><br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam quas voluptatum adipisci accusamus culpa
      cum voluptatibus dicta mollitia, commodi minima quaerat aliquam esse, repudiandae vitae nihil corrupti animi
      expedita!</p>
      <i class="fa-light fa-arrow-up-right-from-square"></i>
  <button type="button">See live <img src="images/Union_2.svg" alt=""></button> <br>
  <button type="button">See Source <img src="images/Vector.svg" alt=""></button>
 
    


`;