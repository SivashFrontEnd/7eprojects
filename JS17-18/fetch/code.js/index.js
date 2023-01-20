/*## Завдання

Отримати список всіх планет із серії фільмів `Зоряні війни` та вивести на екран список персонажів, для яких ця планета - рідний світ.

#### Технічні вимоги:
- Надіслати AJAX запит на адресу `https://swapi.co/api/planets/` та отримати список всіх планет серії фільмів `Зоряні війни`.
– Для кожної планети отримати з сервера список персонажів, для яких вона є рідним світом. Список персонажів можна отримати з якості `residents`.
- Як тільки з сервера буде отримано інформацію про планети, одразу ж вивести список усіх планет на екран. Необхідно вказати ім'я планети, клімат, а також тип переважної місцевості (поля 'name', 'climate' та 'terrain').
- Як тільки з сервера буде отримано інформацію про персонажів, які народилися на якійсь планеті, вивести цю інформацію на сторінку під назвою планети.
- Необхідно написати два варіанти реалізації у різних `.js` файлах. Один – за допомогою `fetch`, інший – за допомогою `promise`.*/

window.addEventListener('DOMContentLoaded', ()=>{

const resp = fetch('http://swapi.dev/api/planets/')
      .then( function(response){
        return response.json()
      })
      .then(function(response){
        return show(response);
        
});

let planets = document.querySelector('.planets');

function show(obj){
    for(let key in obj){
        if(typeof(obj[key]) === 'object'){ 
            for(let i in obj[key]){ 
                planets.innerHTML += `<div id="${obj[key][i].url}" class="planet"><p>NAME: ${obj[key][i].name}</p>Climate: ${obj[key][i].climate};<br> Terrain: ${obj[key][i].terrain};<br> Residents:</div>`;
                if (obj[key][i].residents.length === 0){
                    planets.innerHTML += `<div>"No Residents"</div>`
                } else {
                    for(let j in obj[key][i].residents){
                        fetch(obj[key][i].residents[j])
                        .then( function(response){
                          return response.json()
                        })
                        .then(function(response){
                          return hero(response)
                         });
                    }
                }
            }    
        }   
    }
};

function hero(object) {
    document.querySelectorAll('.planet').forEach(el => {
if(el.id === object.homeworld){
    el.innerHTML += `<div><a href="${object.url}" target="_blank">${object.name}</a></div>`;
}
    })  
};
})