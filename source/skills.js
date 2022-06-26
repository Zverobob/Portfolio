'use strict'

const skills = {
    data: {
        backend: [
            {
                name: 'C++',
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
    },

    showList: function() {
        sList.innerHTML = '';
        for (const key in this.data) {
            const section = document.createElement('div');
            section.classList.add('skillTitle');

            const hd = document.createElement('h3');
            hd.innerHTML = 'Навыки <strong>' + key + ':</strong>';
            hd.classList.add('skillGroup');
            section.append(hd);
            
            //Adding sorting buttons to each section
            const buttName = document.createElement('button');
            buttName.textContent = 'Сортировать по имени';
            buttName.classList.add('buttonSort');
            buttName.setAttribute("data-section", key);
            buttName.setAttribute("data-subset", "name");
            section.append(buttName);
            
            const buttSkill = document.createElement('button');
            buttSkill.textContent = 'Сортировать по уровню';
            buttSkill.classList.add('buttonSort');
            buttSkill.setAttribute("data-section", key);
            buttSkill.setAttribute("data-subset", "level");
            section.append(buttSkill);

            sList.appendChild(section);
            
            this.data[key].forEach(({ name, level, style }) => {
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
    },

    ascend: 1,
    
    sortSkills: function(btnSect, btnSubs, start) 
    {   
        if (start != 0 ){
            this.ascend = -this.ascend; 
            this.data[btnSect] = this.data[btnSect].sort((a, b) => 
            {
                return (a[btnSubs] < b[btnSubs]) ? this.ascend : -this.ascend;            
            }); 
            this.showList();
        }
        buttons = document.querySelectorAll('.buttonSort');
        buttons.forEach(btn => {
            btn.addEventListener('click', handler);
        });
    }
}

const sList = document.querySelector('.skills-list');
let buttons = document.querySelectorAll('.buttonSort'); 

skills.showList();

function handler (btn) {
    btn.preventDefault();
    skills.sortSkills( btn.target.dataset.section, btn.target.dataset.subset, 1 );
}

skills.sortSkills(0,0,0);

