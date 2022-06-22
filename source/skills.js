'use strict'

let skillsData = [
        {
            name: 'С++',
            level: 70,
            style: 'cpp'
        },
        {
            name: 'Game Maker / GML',
            level: 62,
            style: 'gml'
        },
        {
            name: 'C#',
            level: 55,
            style: 'csh'
        },
        {
            name: 'Python',
            level: 45,
            style: 'py'
        },
        {
            name: 'HTML',
            level: 40,
            style: 'html'
        },
        {
            name: 'CSS',
            level: 30,
            style: 'css'
        },
        {
            name: 'JavaScript',
            level: 10,
            style: 'js'
        }

    ];

const sList = document.querySelector('.skills-list');
let categroies = 0;

skillsData.forEach(({ name, level, style }) => {
  //Basicaly RN just numbers entered by me, which is pretty silly, lol 
    if ( categroies == 0 ){
      let hd = document.createElement('h3');
      hd.innerHTML = 'Навыки <strong>backend:</strong>';
      sList.appendChild(hd);
    }
    else if ( categroies == 4 ){
      let hd = document.createElement('h3');
      hd.innerHTML = 'Навыки <strong>frontend:</strong>';
      sList.appendChild(hd);
    }


    const dt = document.createElement('dt');    
    dt.classList.add('skill-'+style);          
    dt.textContent = name;
       
    const levelDiv = document.createElement('div');
    levelDiv.style.width = `${level}%`;
    levelDiv.textContent = `${level}%`;

    const dd = document.createElement('dd');    
    dd.classList.add('level');
    
    dd.appendChild(levelDiv);

    sList.appendChild(dt);
    sList.appendChild(dd);

    categroies += 1;
});