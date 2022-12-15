var reset = document.getElementById("reset");
var save = document.getElementById("save");
var judul = document.getElementById("judul");
var refresh = document.getElementById("refresh");
var caption = document.getElementById("caption");

var sosmed = new Image();
var shapes = new Image(); shapes.src = "imgs/shapes.png";

const Bahnscrift = new FontFace('Bahnscrift', 'url(font/BAHNSCHRIFT.TTF)');
Bahnscrift.load().then((font) => {
    document.fonts.add(font);
})

const Kiona = new FontFace('Kiona-Regular', 'url(font/Kiona-Regular.TTF)');
Kiona.load().then((font) => {
    document.fonts.add(font);
})

reset.onclick = (event) => {
    document.getElementById("1").src = "imgs/1.png";
    // reset everything image
    // for(let i = 1; i<=7; i++){
    //     var img = document.getElementById(i);
    //     img.src = "imgs/" + i + ".png";
    // }
}

save.onclick = () => {
    for(let i = 1; i<=7; i++){
        var img = document.getElementById(i);
        var a = document.createElement("a");
        a.href = img.src

        a.download = "SLIDE" + i + ".png"
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }
}

refresh.onclick = () => {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    const fileInput1 = document.getElementById("1");

    canvas.width = 1080;
    canvas.height = 1350;

    ctx.drawImage(fileInput1, 0, 0, 1080, 1350);
    var xlength = 69; var xlength2 = 69;
    for(let i=1; i<=6; i++){
        valuesosmed = document.getElementById("gambarartist" + i);
        sosmedtext = document.getElementById("artist" + i).innerHTML;
        if(i <= 3){
            sosmed.src = valuesosmed.src;
            
            ctx.drawImage(sosmed, xlength, 1120, 37, 37);
            ctx.fillStyle = "#ffffff"
            ctx.font = "25px Bahnscrift";
            ctx.fillText(sosmedtext, xlength + 50, 1147);

            // ctx.font = ctx.font.replace(/\d+px/, "24px");
            

            xlength = xlength + 248;
        }else if (i >= 3){
            ctx.fillStyle = "#ffffff"
            ctx.font = "25px Bahnscrift";

            ctx.fillText(sosmedtext, xlength2 + 50, 1190);
            sosmed.src = valuesosmed.src;

            ctx.drawImage(sosmed, xlength2, 1163, 37, 37);
            xlength2 = xlength2 + 248;
        }
        
        
    }
    ctx.font = "86px Kiona";
    ctx.fillText($('#judul').html(), 66, 1105)
    ctx.drawImage(shapes, 0, 0, 1080, 1350)
    fileInput1.src = canvas.toDataURL("image/png");
}

caption.onclick = () => {
    let judul = prompt("judul anda?", "");
    let funfact = prompt("funfact?", "");
    let arr = [];
    for(let i=1; i<=6; i++){
        var artis = document.getElementById("artist" + i).innerHTML
        arr.push(artis);
    }
    var result = judul +"\n↬\n"+ funfact +"\nᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳ\nGo Follow the Artist!\n.\n1. "+arr[0]+"\n2. "+arr[1]+"\n3. "+arr[2]+"\n4. "+arr[3]+"\n5. "+arr[4]+"\n6. "+arr[5]+"\nᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳᅳ\n.\n.\n[Ignore]\n#anime #animepictures #animeart #animes #animelife #animepics #animedrawing #animegirl #animeartwork #kawaii #kawaiipic #animegirls #artwork #pixiv #animekawaii #animeart #drawing #"
    prompt("CTRL + C guy", result)
}