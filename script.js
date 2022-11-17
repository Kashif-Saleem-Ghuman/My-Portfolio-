/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.desktop-navigation');
const body = document.querySelector('body');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
  body.classList.toggle('no-scroll');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('full-screen');
  body.classList.remove('no-scroll');
}));

// const arr = ['hello', 'hi', 'bye'];

const projectCard = [
  {
    projectTitle: 'Project #1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'img/Rectangle 21.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://www.linkedin.com/in/kashif-saleem-45ba95215/',
  },

  {
    projectTitle: 'Project #2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'img/22.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/23.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/24.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },
  {
    projectTitle: 'Project #5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/25.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://kashif-saleem-ghuman.github.io/My-Portfolio',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/26.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://www.javascripttutorial.net/javascript-objects/',
  }];

const modal = document.querySelector('#modal');

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
    document.getElementById('modal-languages').innerHTML = technologyList;
    document.getElementById('Picture').src = projectCard[num].mainImage;
    document.querySelector('.modal-image-preview').innerHTML = imagesList;
    document.getElementById('project-live').href = projectCard[num].linkToLiveVersion;
    document.getElementById('modal-project-source').href = projectCard[num].linkToSource;

    modal.classList.add('active');
  }
}

function closeModal(index = null) {
  if (index != null) {
    modal.classList.remove('active');
  }
}

openModal();
closeModal();
