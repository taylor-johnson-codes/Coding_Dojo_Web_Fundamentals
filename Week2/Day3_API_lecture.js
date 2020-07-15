                                                            //need to watch video to get html side of this


$(document).ready(function(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')        //chnage to his charizard link
        .then(function(res){
            res.json()
        })
        .then(function(data){
            console.log(data)  //data is an object {}
            console.log('NAME IS ', data.species.name)
            console.log('ID is', data.id)
            console.log('Picture is ', data.sprites.front_default)
        })
        // 1. display the name
        // 2. display the id
        // 3. display a picture
})

//~30 min in to finish this:

$.get('insert link', function(data){
    $('#name').text(data.species.name)
    $('#poke_id').text(data.id)
    $('#front').attr('src', data.sprites.front_default)
},'json')