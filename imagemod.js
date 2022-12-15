var modal = document.getElementById("myModal");
var done = document.getElementById("done");
var span = document.getElementsByClassName("close")[0];

var img = new Image(); img.src = "imgs/shadow.png"; //create image buat shadow overlay

const image = document.getElementById("cropp");

function file1(canvas1, fileInput1){
    var canvas2 = document.createElement("canvas");
    var ctx2 = canvas1.getContext("2d");
    canvas2.width = 1080;
    canvas2.height = 1350;
    
    ctx2.drawImage(canvas1, -3, -3, 1083, 1353);
    ctx2.drawImage(img, -200, -10, 1500, 1400);
    var datafile1 = canvas1.toDataURL("image/png");
    
    fileInput1.src = datafile1;
}

$('#slidespencet').on('change', function(event){
    if (event.target.files && event.target.files[0]){
        if(event.target.files[0].type.match(/^image\//)){
            output = event.target.labels[0].getElementsByTagName("img")[0];

            target = event.target.id;

            modal.style.display = "block";
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const uploaded_image = reader.result;
                image.src = uploaded_image;
                cropper = new Cropper(image, {aspectRatio: 20/25, viewMode: 1, zoomable: false});
            });
            reader.readAsDataURL(event.target.files[0]);
        }else{
            alert("masukinnya gambar goblok");
        }
    }else {
        alert('lawak');
      }
});

done.onclick = function(){
    //jadul yang solo image doang
    // var croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
    // console.log(croppedImage);
    // output.src = croppedImage;


    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    
    canvas.width = 1080;
    canvas.height = 1350;

    console.log(target);
    
    if(target == "fileInput2"){ //check gambar 2 or nah
        ctx.drawImage(cropper.getCroppedCanvas(), 0, 0, 1080, 1350);

        const fileInput1 = document.getElementById("1");
        
        var canvas1 = document.createElement("canvas");
        var ctx1 = canvas1.getContext("2d");
        canvas1.width = 1080;
        canvas1.height = 1350;

        ctx1.filter = "blur(2.5px)";
        ctx1.drawImage(canvas, 0, 0);
        fileInput1.src = canvas1.toDataURL("image/png");

        file1(canvas1, fileInput1);
    }else{
        ctx.drawImage(cropper.getCroppedCanvas(), 0, 0, 1080, 1350);
    }

    var dataurl = canvas.toDataURL("image/png");
    
    output.src = dataurl;

    cropper.destroy()
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
    cropper.destroy()
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        cropper.destroy()
    }
}

