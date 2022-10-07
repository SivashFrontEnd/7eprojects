console.log(data);
function callback (a) {
    const tr =  `
    <tr>
    <td> ${a.postId} </td>
    <td> ${a.id} </td>
    <td> ${a.name} </td>
    <td> ${a.email} </td>
    <td> ${a.body} </td>
    </tr>
    `
    document.getElementById("root").innerHTML += tr;
}

data.forEach(callback);