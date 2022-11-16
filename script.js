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

// const arr = ['hello', 'hi', 'bye'];

const projectCard = [
  {
    projectTitle: 'Project #1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/Rectangle 21.png',
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  },

  {
    projectTitle: 'Project #2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "./img/22.png",
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  },

  {
    projectTitle: 'Project #3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "./img/23.png",
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  },

  {
    projectTitle: 'Project #4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "./img/24.png",
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  },

  {
    projectTitle: 'Project #5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: "./img/25.png",
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  },

  {
    projectTitle: 'Project #6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/26.png',
    images: ["img/Rectangle 21.png","img/22.png","img/23.png","img/24.png"],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman/',
  }];


  const modal = document.querySelector('#modal');
  
// function openModal (index=null){
//   if (index!=null){
//     const { technology} = projectCard[index];
//     let technologyList = "";
//     technology.map((listedItem) => {
//       console.log(listedItem)
//     technologyList += `<li>${listedItem}</li>`
//     } );

//     const {images} = projectCard[index];
//     let imagesList = '';
//     images.map((listedItem) => {
//       imagesList += `<img src="${listedItem}"</img>`;
//   });

  function openModal(num = null) {
    if (num != null) {
      const { technology } = projectCard[num];
      let technologyList = '';
      technology.forEach((listedItem) => {
        technologyList += `<li>${listedItem}</li>`;
      });
  
      const { images } = projectCard[num];
      let imagesList = '';
      images.forEach((listedImage) => {
        imagesList += `<img src="${listedImage}"></img>`;
      });



  document.getElementById('modal-project-name').innerHTML = projectCard[num].projectTitle;
  document.getElementById('modal-languages').innerHTML =  technologyList;
  // document.getElementById('picture').src = projectCard[index].mainImage;
  // document.querySelector('.modal-image-preview').innerHTML = imagesList;
  // document.querySelector('#modal-project-live').href = modal[index].linkToLiveVersion;
  // document.querySelector('#modal-project-source').href = modal[index].linkToSource;

  modal.classList.add('active');
}
}


function closeModal (index=null){
  if (index!=null){
    modal.classList.remove('active')
  }}

  openModal();
  closeModal();





















  

// Projects Info //
// const body = document.querySelector('body');
// const section = document.createElement('section');
// body.appendChild(section);
// section.innerHTML = `
// <h2>Project name goes here</h2>
//   <ul>
//     <li>Html/CSS</li>
//     <li>Ruby on Rails</li>
//     <li>JavaScript</li>
//   </ul>
//   <div class="swiper">
//     <!-- Additional required wrapper -->
//     <div class="swiper-wrapper">
//       <!-- Slides -->
//       <div class="swiper-slide"><img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver"></div>
//       <div class="swiper-slide"><img src="images/Rectangle 21 (1).svg" alt=""></div>
//       <div class="swiper-slide"><img src="images/Rectangle 21 (2).svg" alt=""></div>
//       <div class="swiper-slide"><img src="images/Rectangle 21 (3).svg" alt=""></div>
//     </div>
//     <!-- If we need pagination -->
//     <div class="swiper-pagination">
//       <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
//       <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
//       <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
//       <img src="images/Rectangle 34.svg" alt="Laptop wit pink screensaver">
//     </div>

//     <!-- If we need navigation buttons -->
//     <div class="swiper-button-prev"></div>
//     <div class="swiper-button-next"></div>
//   </div>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam quas voluptatum adipisci accusamus culpa
//     cum voluptatibus dicta mollitia, commodi minima quaerat aliquam esse, repudiandae vitae nihil corrupti animi
//     expedita!</p><br>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam quas voluptatum adipisci accusamus culpa
//       cum voluptatibus dicta mollitia, commodi minima quaerat aliquam esse, repudiandae vitae nihil corrupti animi
//       expedita!</p>
//       <i class="fa-light fa-arrow-up-right-from-square"></i>
//   <button type="button">See live <img src="images/Union_2.svg" alt=""></button> <br>
//   <button type="button">See Source <img src="images/Vector.svg" alt=""></button>
// `;


// // Creating an array
// const main_Project = document.querySelector ('desktop-container-grid')

// function createProjectCard(arg)
// {
//   const projectCard = document.createElement ('div')
//   projectCard.classList.add('projects')
//   main_Project.appendChild(projectCard)
// }


// const open = document.querySelector(".see-more");
// open.addEventListener('click',()=>{
//  const mainProject = document.createElement('div')
//  const popupCard = document.createElement ('div')
 
//  popupCard.innerHTML = `
//  for ( let i=0; i<projectInfo.length; i++)
//  {
//   createProjectCard(projectInfo[i])
//  }
//  `

// })