// Project detail popup

const projectsDetail = [
  {
    id: `project1`,
    title: `Tonic1`,
    info: [`CANOPY`, `Back End Dev`, `2019`],
    featured_img: `./images/img1.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `https://github.com/tahseenzahra/microverse-template-portfolio`,
    version_link: `https://tahseenzahra.github.io/microverse-template-portfolio/`
  },
  {
    id: `project2`,
    title: `Tonic2`,
    info: [`CANOPY`, `Back End Dev`, `2020`],
    featured_img: `./images/img2.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `https://github.com/tahseenzahra/microverse-template-portfolio`,
    version_link: `https://tahseenzahra.github.io/microverse-template-portfolio/`
  },
  {
    id: `project3`,
    title: `Tonic3`,
    info: [`CANOPY`, `Back End Dev`, `2021`],
    featured_img: `./images/img3.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `https://github.com/tahseenzahra/microverse-template-portfolio`,
    version_link: `https://tahseenzahra.github.io/microverse-template-portfolio/`
  },
  {
    id: `project4`,
    title: `Tonic4`,
    info: [`CANOPY`, `Back End Dev`, `2022`],
    featured_img: `./images/img4.svg`,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    more_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis!',
    technologies: [`html`, `css`, `javascript`],
    source_link: `https://github.com/tahseenzahra/microverse-template-portfolio`,
    version_link: `https://tahseenzahra.github.io/microverse-template-portfolio/`
  },
]

const see_project_clicked = document.get

// function to get id value from see project btn
let i = '';
function found(input) {
  for (i = 0; i < projectsDetail.length; i += 1) {
    if (projectsDetail[i].id === input) {
      return i;
    }
  }
  return null;
}

// console.log(i);

const prjtitle = document.querySelector('#proj-title-id');
const prjinfo = document.querySelector('#proj-about-id');
const prjname = document.querySelector('#proj-name-id');
const prjtype = document.querySelector('#proj-type-id');
const prjyear = document.querySelector('#proj-year-id');
const prjimg = document.querySelector('#img-id');
const prjdescription = document.querySelector('#proj-primarytxt-id');
const prjtechnologies = document.querySelector('#tech-list-id');
const prjSrcbtn = document.querySelector('#sourcebtn-id');
const prjLivebtn = document.querySelector('#livebtn-id');

// Get project innerHTML

// do {
  
// } while (i < projectsDetail.length);

// if (i < projectsDetail.length) {
  
// }



for (let i = 0; i < projectsDetail.length; i += 1)
{
  function displayProjData(i) {
    prjtitle.textContent = projectsDetail[i].title;
  
    const [projectName, projectRole, projectYear] = projectsDetail[i].info;
    prjname.textContent = projectName;
    prjtype.textContent = projectRole;
    prjyear.textContent = projectYear;
  
    prjimg.src = projectsDetail[i].featured_img;
  
    prjdescription.textContent = projectsDetail[i].more_description;
    
    let j = 0;
    do {
      console.log('insode do while', j, i);
      const technology = document.createElement('li');
      technology.textContent = projectsDetail[i].technologies[j];
      // technology.className = 'popup-tech-list-li';
      prjtechnologies.appendChild(technology);
      console.log(j, i);
      j += 1;
    } while (j < projectsDetail[1].technologies.length);
  
    prjSrcbtn.href = projectsDetail[i].source_link;
    prjLivebtn.href = projectsDetail[i].version_link;
  }

  // prjtechnologies.textContent = projectsDetail[i].technologies;
  // prjtechnologies.className = 'popup-tech-list-ul';
  // console.log(projectsDetail[i].technologies.length);

  // for (let j = 0; j < projectsDetail[1].technologies.length; j += 1) 
  // {
  //   console.log('i am inside',projectsDetail[1].technologies.length);
  //   // console.log('i, j')
  //   console.log(j, i);
  //   // const technology = document.createElement('li');
  //   // technology.textContent = projectsDetail[i].technologies[j];
  //   // technology.className = 'popup-tech-list-li';
  //   // prjtechnologies.appendChild(technology);
  // }
  
}


// for (let i = 0; i < projetsDetail.length; i += 1)
// {
//   const projSection = document.createElement('section');

//   const prjTitle = document.createElement('h3');
//   prjTitle.className = 'proj-title';
//   prjTitle.textContent = projetsDetail[i].title;
//   prjTitle.appendChild(prjTitle);
// }
