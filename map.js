const students =[

{id:01, name:'Amir'},
{id:02, name:'Zahin'},
{id:03,name:'Rihan'}


];

const names =students.map(s=> s.name);

const ids =students.map(s=>s.id);

const bigger =students.filter(s => s.id>1)
//console.log(ids);

console.log(bigger);
