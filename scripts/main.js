require.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
        "bootstrap": "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min",
        "firebase" : "https://cdn.firebase.com/js/client/2.2.1/firebase",
        "moment" : "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.0/moment",
        "blueImp" : "https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.1.0/js/md5",
        "mCustomScrollbar" : "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min",
        "popper" : "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper",
        "sideComments" : "./js/sideComments/side-comments",
        "jsTree" : "./js/jstree/jstree.min",
        "inView" : "./js/in-view/in-view.min",
        "lodash" : "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min"
    },
  
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        "bootstrap": {
            deps: ["jquery","popper"]
        },  
        "jsTree" : {
            deps:["jquery"]
        },
        "mCustomScrollbar" : {
            deps:["jquery"]
        },
        "firebase" : {
            deps:["jquery"]
        },
        "moment" : {
            deps:["jquery"]
        },
        "popper" : {
            deps:["jquery"]
        },
        "sideComments" : {
            deps:["jquery"]
        },
        "lodash" : {
            deps:["jquery"]
        },
        "inView" : {
            deps:["jquery"]
        }
    },
    // This adds popper to the window, allowing Bootstrap to function correctly.
    map: {
        '*': {
            'popper.js': 'popper',
            
        }
    }  
  });

// Start the main app logic.
requirejs(['jquery', 'bootstrap', 'jsTree', 'sideComments', 'firebase', 'moment', 'blueImp', 'mCustomScrollbar', 'popper'],
function   ($,        bootstrap,   jsTree,   sideComments,   firebase,   moment,   blueimp,   mCustomScrollbar,   popper) {
    // Add jquery to window
    window.$ = $;
    // $.getScript("./js/sideComments/side-comments.js");
    initCommentableSections($,sideComments);
    initJsTree($,jsTree);
    initMCustomScrollbar($, mCustomScrollbar);
    initFireBase($, firebase);
    initOther($);
});

function initCommentableSections($, SideComments){
    $(function(){
        $('#commentable-area h2').addClass('commentable-section')
        .each(function(i){ 
            let e = $(this);
            e.attr('data-section-id',e.attr('id')); 
        });

        initSideComments($,SideComments)
    })

    function initSideComments($,SideComments){
        $.getScript("./js/sideComments/side-comments.js");
        let currentUser = {
            id: 1,
            avatarUrl: "https://ca.slack-edge.com/T7XBZV1UL-U7XAKB1HQ-gbfbc3587f0e-48",
            name: "You"
          };
        
        let existingComments = [];
        
        // Then, create a new SideComments instance, passing in the wrapper element and the optional the current user and any existing comments.
        sideComments = new SideComments('#commentable-area', currentUser, existingComments);
        
        // Listen to "commentPosted", and send a request to your backend to save the comment.
        // More about this event in the "docs" section.
        sideComments.on('commentPosted', function( comment ) {
          console.log("Comment posted!");
        });
    
    }
}



function initJsTree($,jsTree){
    window.jsTree = jsTree;
    $(function () {
        // $('#jsTreeNav').jstree();
        $('#jsTreeNav')
          // listen for event
          .on('select_node.jstree', function (e, data) {
            console.log("Tree item selected", data.node.a_attr.href);
            if(data.node.a_attr.href != "" && data.node.a_attr.href != "#"){ window.location.href = data.node.a_attr.href; }
          })
          .on('click', '.jstree-anchor', function (e) {
            $('#jsTreeNav').jstree(true).toggle_node(e.target);
          })
          // create the instance
          .jstree({
            // core : {
            //   dblclick_toggle : false
            // }
          });
      });
}

function initMCustomScrollbar($, mCustomScrollbar){
    $(document).ready(function () {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
        $('#sidebarCollapse').on('click', function () {
            // open or close navbar
            $('#sidebar').toggleClass('active');
  
            // move the open-close button
            $('#openSidebar').toggleClass('fixedRightOver')
  
            // close dropdowns
            $('.collapse.in').toggleClass('in');
            // and also adjust aria-expanded attributes we use for the open/closed arrows
            // in our CSS
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
      });
}

function initFireBase($, firebase){
// Remove ampersands from strings
function slugify(text) {
    return text.toString().toLowerCase().trim()
        .replace(/&/g, '-and-')
        .replace(/[\s\W-]+/g, '-')
        .replace(/[^a-zA-Z0-9-_]+/g,'');
    }
    // Get post ref url
    function getPostRef(ref){
    return ref.child(slugify(window.location.pathname));
    }
    // Initialize firebase
    $(function(){
    var ref = new Firebase("https://itl-fgfc.firebaseio.com/");
    })
}

function initOther(){
    (function applyModalBlowups(){
        // Get the modal
        $(function () {
            var modal = document.getElementById('myModal');

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var modalImg = $("#img01");
            var captionText = document.getElementById("caption");
            console.log($('.content'));
            $("p").children('img').each(function (index, value) {
            console.log("Found an image",value);
            value.click(function(){
                modal.style.display = "block";
                var newSrc = this.src;
                modalImg.attr('src', newSrc);
                captionText.innerHTML = this.alt;
                });
            });
            console.log("Hello im here");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }
        });
    })();

    (function initSketchFab(){
        const sfUrl ='https://api.sketchfab.com/v3/models/'
        // Test id
        function CreateProjectCard(projName, projDesc, projUrl, sfId){
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
    })();
}