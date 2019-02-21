(function(){

    const sfUrl ='https://api.sketchfab.com/v3/models/'

    window.CreateProjectCard = function(projName, projDesc, projUrl, sfId){
        // while(window.$ === null || window.$ === undefined){}
        let sfThumbUrl = sfUrl + sfId;
        fetch(sfThumbUrl)
        .then((response => response.json()))
        .then(function(data){
            console.log("This is my data",data);
            let thumb = data ? data.thumbnails.images[2].url : '';
            // Generate card
            let card = '';
            card += '<div class="card card-home card-project">'
                card += '<div class="card-header">'
                card += '<a>' + projName + '</a>'
                card += '</div>';
                card += '<img class="card-img-top" src="'+ thumb + '">';
                card += '<div class="card-body">'
                card += '<p class="card-text">' + projDesc + '</p>';
                card += '</div>';
            card += '</div>';
            $('#projCards').append(card);
        });
    }
})()