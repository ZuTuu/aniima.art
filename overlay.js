clicked = false;

$('#opsi').on('click', function(event){
    if(event.target.tagName != "A"){
        if(clicked == false){
            var id = event.target.id.replace(/\D/g,'');
            selector = $("#selector" + id);
            selector.css({"display": "block"});

            selector.on("click", function(e){
                event.target.src = e.target.src;
                selector.css({"display": "none"});
            })
            clicked = true
        }else{
            clicked = false;
            selector.css({"display": "none"});
        }
    }else{
        let artis = prompt(event.target.id, "");
        if(artis == null || artis == ""){
            return event.target.innerHTML = "dahlah";
        };
        event.target.innerHTML = artis;
    }

});

$('#judul').on('click', function(){
    let judul = prompt("apa", "");
    this.innerHTML = judul;
})

