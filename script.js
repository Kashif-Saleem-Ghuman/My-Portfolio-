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

const projectCard = [
  {
    projectTitle: 'Project #1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'img/Rectangle 21.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://www.linkedin.com/in/kashif-saleem-45ba95215/',
  },

  {
    projectTitle: 'Project #2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: 'img/22.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/23.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/24.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },
  {
    projectTitle: 'Project #5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/25.png',
    images: ['img/24.png', 'img/23.png', 'img/22.png', 'img/Rectangle 21.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: 'https://kashif-saleem-ghuman.github.io/My-Portfolio',
    linkToSource: 'https://github.com/Kashif-Saleem-Ghuman',
  },

  {
    projectTitle: 'Project #6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    mainImage: './img/26.png',
    images: ['img/Rectangle 21.png', 'img/22.png', 'img/23.png', 'img/24.png'],
    technology: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkToLiveVersion: '#',
    linkToSource: 'https://www.javascripttutorial.net/javascript-objects/',
  },
];

const modal = document.querySelector('#modal');

// eslint-disable-next-line no-return-assign
projectCard.map((card, index) => document
  .getElementById('desktop-portfolio').innerHTML += `
    <article class="container2 desktop-project-1" id='card-${index}'>

        <img class="images img-${index}" src="${card.mainImage}" alt="A deccorative laptop background">
        <div class="description-container desc-container-${index}">
          <h3 class="project-name project-name-${index}">${card.projectTitle}</h3>
            <div id="language-container" class="language-container-${index}">
            ${card.technology.map((tech) => `
            <div class="languages">
              <div class="text">${tech}</div>
            </div>
            `)}
            </div>
          <div class="link-container see-more">
            <div class="see-this-project see-this-project-${index}">See this project</div>
            <div class="arrow modal-arrow-${index}"><a href="javascript:openModal(${index})">&#x2192</a></div>    
          </div>
        </div>
      </article>
    `);

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

// Form Validation With JavaScript
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.getElementById('error');
const username = document.querySelector('#user-name');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase() || email.value === '') {
    error.textContent = 'Please enter email in lower case';
    return;
  }

  form.submit();
});

// Local storage for form input

function storeData() {
  const formData = {
    username: username.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

function getData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }

  const localData = JSON.parse(localStorage.getItem('formData'));
  username.setAttribute('value', localData.username);
  email.setAttribute('value', localData.email);
  message.textContent = localData.message;
}

getData();

username.addEventListener('change', storeData);
email.addEventListener('change', storeData);
message.addEventListener('change', storeData);
