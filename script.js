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

// Project detail popup

const projectsDetail = [
  {
    title: `Tonic1`,
    info: [`CANOPY`, `Back End Dev`, `2019`],
    featured_img: `./images/img1.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `#`,
    version_link: `#`
  },
  {
    title: `Tonic2`,
    info: [`CANOPY`, `Back End Dev`, `2020`],
    featured_img: `./images/img2.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `#`,
    version_link: `#`
  },
  {
    title: `Tonic3`,
    info: [`CANOPY`, `Back End Dev`, `2021`],
    featured_img: `./images/img3.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `#`,
    version_link: `#`
  },
  {
    title: `Tonic4`,
    info: [`CANOPY`, `Back End Dev`, `2022`],
    featured_img: `./images/img4.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `#`,
    version_link: `#`
  },
]

const prjTitle = document.querySelector('#proj-title-id');
const prjinfo = document.querySelector('#proj-about-id');
const prjname = document.querySelector('#proj-name-id');
const prjtype = document.querySelector('#proj-type-id');
const prjyear = document.querySelector('#proj-year-id');
const prjimg = document.querySelector('#img-id');
const prjdescription = document.querySelector('#proj-primarytxt-id');
const prjtechnologies = document.querySelector('#tech-list-id');


for (let i = 0; i < projectsDetail.length; i += 1)
{
  prjTitle.textContent = projectsDetail[i].title;

  const [projectName, projectRole, projectYear] = projectsDetail[i].info;
  prjname.textContent = projectName;
  prjtype.textContent = projectRole;
  prjyear.textContent = projectYear;

  prjimg.src = projectsDetail[i].featured_img;

  prjdescription.textContent = projectsDetail[i].more_description;
  
  prjtechnologies.textContent = projectsDetail[i].technologies;
  prjtechnologies.className = 'popup-tech-list-ul';

  for (let j = 0; j < projectsDetail[i].prjtechnologies.length; j += 1) {
    const technology = document.createElement('li');
    technology.textContent = projectsDetail[i].prjtechnologies[j];
    technology.className = 'popup-tech-list-li';
    prjtechnologies.appendChild(technology);
  }


  
}


// for (let i = 0; i < projetsDetail.length; i += 1)
// {
//   const projSection = document.createElement('section');

//   const prjTitle = document.createElement('h3');
//   prjTitle.className = 'proj-title';
//   prjTitle.textContent = projetsDetail[i].title;
//   prjTitle.appendChild(prjTitle);
// }
