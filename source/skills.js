'use strict'

let skillsData = {
        backend: [
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
            }
        ],
        frontend: [
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
        ]
};

const sList = document.querySelector('.skills-list');

for (const key in skillsData) {
    const hd = document.createElement('h3');
    hd.innerHTML = 'Навыки <strong>' + key + ':</strong>';
    sList.appendChild(hd);
    
    skillsData[key].forEach(({ name, level, style }) => {
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
      });
}