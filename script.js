const menu = document.querySelector('#mob-menu');
const hamburger = document.querySelector('#hamburger-icon');
const closebtn = document.querySelector('#x-iconid');
const navlinks = document.querySelector('#navLinks');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

navlinks.addEventListener('click', () => {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
});

// Project detail popup Data *start
const projectsDetail = [
  {
    id: 'project1',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2019'],
    featured_img: './images/img1.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: ['html', 'css', 'javascript'],
    source_link: 'https://github.com/tahseenzahra/microverse-template-portfolio',
    version_link: 'https://tahseenzahra.github.io/microverse-template-portfolio/',
  },
  {
    id: 'project2',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2020'],
    featured_img: './images/img2.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: ['html', 'css', 'javascript'],
    source_link: 'https://github.com/tahseenzahra/microverse-template-portfolio',
    version_link: 'https://tahseenzahra.github.io/microverse-template-portfolio/',
  },
  {
    id: 'project3',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2021'],
    featured_img: './images/img3.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: ['html', 'css', 'javascript'],
    source_link: 'https://github.com/tahseenzahra/microverse-template-portfolio',
    version_link: 'https://tahseenzahra.github.io/microverse-template-portfolio/',
  },
  {
    id: 'project4',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', '2022'],
    featured_img: './images/img4.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: ['html', 'css', 'javascript'],
    source_link: 'https://github.com/tahseenzahra/microverse-template-portfolio',
    version_link: 'https://tahseenzahra.github.io/microverse-template-portfolio/',
  },
];
// Project detail popup Data *end

const arrindex = [];

const prjtitle = document.querySelector('#proj-title-id');

// const prjinfo = document.querySelector('#proj-about-id');
const prjname = document.querySelector('#proj-name-id');
const prjtype = document.querySelector('#proj-type-id');
const prjyear = document.querySelector('#proj-year-id');
const prjimg = document.querySelector('#img-id');
const prjdescription = document.querySelector('#proj-primarytxt-id');
const prjtechnologies = document.querySelector('#tech-list-id');
const prjSrcbtn = document.querySelector('#sourcebtn-id');
const prjLivebtn = document.querySelector('#livebtn-id');

// Function GetData for detail project popup * start

function getData(i) {
  prjtitle.textContent = projectsDetail[i].title;

  const [projectName, projectRole, projectYear] = projectsDetail[i].info;
  prjname.textContent = projectName;
  prjtype.textContent = projectRole;
  prjyear.textContent = projectYear;

  prjimg.src = projectsDetail[i].featured_img;

  prjdescription.textContent = projectsDetail[i].more_description;

  let j = 0;
  do {
    const technology = document.createElement('li');
    technology.textContent = projectsDetail[arrindex].technologies[j];

    // technology.className = 'popup-tech-list-li';
    prjtechnologies.appendChild(technology);
    j += 1;
  } while (j < projectsDetail[i].technologies.length);

  prjSrcbtn.href = projectsDetail[i].source_link;
  prjLivebtn.href = projectsDetail[i].version_link;
}

// function to get index i value from see project btn id

function found(input) {
  for (let i = 0; i < projectsDetail.length; i += 1) {
    if (projectsDetail[i].id === input) {
      arrindex.push(i);
      getData(i);

      return i;
    }
  }
  return null;
}

// function to get string to match id value from see Project BTN
const detailPopup = document.getElementById('popup-1');
function popup(string) {
  detailPopup.style.display = 'block';
  found(string);
}

const seeProjectButtons = document.querySelectorAll('.see-project-button');
seeProjectButtons.forEach((element) => {
  element.addEventListener('click', (event) => {
    popup(event.target.id);
  });
});

const popupclosebtn = document.querySelector('#x-icon-popup-id');
popupclosebtn.addEventListener('click', () => {
  detailPopup.style.display = 'none';
});
