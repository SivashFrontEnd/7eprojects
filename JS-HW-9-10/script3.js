console.log(data);
function callback (a) {
    const tr =  `
    <tr>
    <td> ${a.postId}</td>
    <td> ${a.id} </td>
    <td> ${a.name} </td>
    <td> ${a.email} </td>
    <td class="coment"> ${a.body} </td>
    <td class="btn"> <a href="#">Редактировать</a> </td>
    </tr>
    `
    document.getElementById("root").innerHTML += tr;
    
};

data.forEach(callback);

var coment = document.getElementsByClassName('coment');
const btn = document.getElementsByClassName('btn')
const modal = document.getElementById('modal');

const clos = document.getElementById('close');
clos.addEventListener('click', function(){
  modal.style.display = 'none';
}
)

for(let i = 0; i < btn.length; i++){
  
  btn[i].addEventListener('click', function(){
    
    modal.innerHTML = coment[i].innerHTML;
    modal.appendChild(clos);
    modal.style.display = 'block';
    });
};


 









