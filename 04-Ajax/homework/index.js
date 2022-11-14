
const url = 'http://localhost:5000/amigos/'


function getAmigos(){    
    $('img').show()
    $('li').remove()
    $.get(`${url}`, function(data){
        data.forEach(e => $(`<li>${e.name}</li>`).appendTo('#lista'))
    })
    $('img').hide()
}


function getAmigoForId(){
    let id = $('#input')[0].value    
    $.get(`${url}${id}`, function(data){
        $('#amigo').text(data.name)
    })
}

function deleteForId(){
    let id = $('#inputDelete')[0].value
    $.ajax({
        url: `${url}${id}`,
        type: "DELETE",
        success: () => {
            let message = 'Tu amigo xxx fue borrado con exito'
            $("#success").text(message)
        }
    })
    getAmigos();
}

$('#search').click(getAmigoForId)

$('#boton').click(getAmigos)

$('#delete').click(deleteForId)