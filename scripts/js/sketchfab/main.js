(function(){

    const sfUrl ='https://api.sketchfab.com/v3/models/'

    window.CreateProjectCard = function(projName, projDesc, projUrl, sfId){
        let sfThumbUrl = sfUrl + sfId;
        fetch(sfThumbUrl)
        .then((response => response.json()))
        .then(function(data){
            console.log("This is my data",data);
            let thumb = data ? data.thumbnails.images[2].url : '';
            // Generate card
            let card = '';
            card += '<div class="card">'
            card += '<img class="card-img-top" src="'+ thumb + '">';
            card += '<div class="card-body">'
                card += '<h5 class="card-title">'+ projName +'</h5>';
                card += '<p class="card-text">' + projDesc + '</p>';
            card += '</div>';
            card += '</div>';
            $('#projCards').append(card);
        });
    }
})()