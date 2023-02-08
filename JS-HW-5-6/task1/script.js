const doc = {
    header: "Заголовок1",
    body: "Тіло",
    footer: "Футер",
    data: "Дата",
    dodatok: {
        header: {header: "Заголовок2"},
        body: {body: "Тіло"},
        footer: {footer: "Футер"},
        data: {data: "Дата"},
    }
};

//варіант 1
function getFiniteValue(obj) {
    getProp(obj);

    function getProp(o) {
        for(var prop in o) {
            if(typeof(o[prop]) === 'object') {
                getProp(o[prop]);
            } else {
                document.write('Finite value: ',o[prop], "<br>")
            }
        }
    }
}

getFiniteValue(doc);

document.write("<hr>");

//варіант 2
function func (obj) {
        for(let key in doc) {
            document.write(key + " - " + doc[key], "<br>");
            if (typeof doc[key] === 'object') {
                for(let key2 in doc[key]) {
                    document.write(key2 + "-" + doc[key][key2], "<br>");
                    if(typeof doc[key][key2] === 'object') {
                        for(let key3 in doc[key][key2]) {
                            document.write(key3 + " - " + doc[key][key2][key3], "<br>")
                        }
                    }
                }
            }
         }
}

func(doc);
document.write("<hr>");
