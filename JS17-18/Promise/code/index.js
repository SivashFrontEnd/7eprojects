let planets = document.querySelector('.planets');
        // Промисификация – это когда берут асинхронный функционал и делают для него обёртку, возвращающую промис.
        function userInfo(url) {

            return new Promise((resolve, reject) => {

                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);

                xhr.onreadystatechange = () => {
                    if (xhr.status == 200) {
                        if (xhr.readyState === 4)
                            resolve(xhr.response);
                    } else {
                        let error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                    }
                };
                xhr.onerror = function () {
                    reject(new Error("Network Error"));
                };
                xhr.send();
            });
        }

        userInfo("http://swapi.dev/api/planets/")
            .then(
                (response) => {let obj = JSON.parse(response);
                    for(let key in obj){
        if(typeof(obj[key]) === 'object'){ 
            for(let i in obj[key]){ 
                planets.innerHTML += `<div id="${obj[key][i].url}" class="planet"><p>NAME: ${obj[key][i].name}</p>Climate: ${obj[key][i].climate};<br> Terrain: ${obj[key][i].terrain};<br> Residents:</div>`;
                if (obj[key][i].residents.length === 0){
                    planets.innerHTML += `<div>"No Residents"</div>`
                } else {for(let j in obj[key][i].residents){
                    userInfo(obj[key][i].residents[j])
                    .then(
                        (response) => {
                            let object = JSON.parse(response);
                            document.querySelectorAll('.planet').forEach(el => {
if(el.id === object.homeworld){
    el.innerHTML += `<div><a href="${object.url}" target="_blank">${object.name}</a></div>`;
}
    }) 

                        },
                        error => console.log(error)
                    )
                }
            }
            }}} 
            },
                error => console.log(error)
            );