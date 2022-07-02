'use strict'

const skills = {
    data: [],

    getData: function() {
        fetch('db/skills.json')
        .then(data => data.json())
        .then(json => {
            this.data = json;
            skills.createBtns();
            skills.addSkills();
            skills.addHandlers();
        })
        .catch(() => console.error("Данных для вас, увы, нет сэр. Но есть овсянка!"))
    },

    createBtns: function() {
        const sList = document.querySelectorAll('.skills-list')[1];
        for (const key in this.data) {
            const btnSect = document.createElement('div');
            btnSect.classList.add('skillTitle');

            const hd = document.createElement('h3');
            hd.innerHTML = 'Навыки <strong>' + key + ':</strong>';
            hd.classList.add('skillGroup');
            btnSect.append(hd);
            
            //Adding sorting buttons to each section
            const btnName = document.createElement('button');
            btnName.textContent = 'Сортировать по имени';
            btnName.classList.add('buttonSort');
            btnName.setAttribute("data-section", key);
            btnName.setAttribute("data-subset", "name");
            btnSect.append(btnName);
            
            const btnSkill = document.createElement('button');
            btnSkill.textContent = 'Сортировать по уровню';
            btnSkill.classList.add('buttonSort');
            btnSkill.setAttribute("data-section", key);
            btnSkill.setAttribute("data-subset", "level");
            btnSect.append(btnSkill);

            const skillSpace = document.createElement('section');
            skillSpace.setAttribute("data-subsection", key);
            sList.appendChild(btnSect);
            sList.appendChild(skillSpace);
        }
    },

    addSkills: function(){
        const sSpace = document.querySelectorAll('[data-subsection]');
        for( let i = 0; i < sSpace.length; i++){
            sSpace[i].innerHTML = '';
            const key = sSpace[i].dataset.subsection;
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
                  
                sSpace[i].appendChild(dt);
                sSpace[i].appendChild(dd);
            });
        }
    },

    ascend: 1,
    
    handler: function (btn) {
        btn.preventDefault();
        skills.sortSkills( btn.target.dataset.section, btn.target.dataset.subset, 1 );
    },

    sortSkills: function(btnSect, btnSubs, start){   
        
        this.ascend = -this.ascend; 
        this.data[btnSect] = this.data[btnSect].sort((a, b) => 
        {
            return (a[btnSubs] < b[btnSubs]) ? this.ascend : -this.ascend;            
        }); 
        this.addSkills();
    },

    addHandlers: function(){
        const buttons = document.querySelectorAll('.buttonSort'); 
        buttons.forEach(btn => {
            btn.addEventListener('click', this.handler);
        });
    },
}

skills.getData();

