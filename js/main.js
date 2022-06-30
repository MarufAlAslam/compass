$("#lob").change(function() {
    var val = $(this).val()
    var angle = val-90
    $('.lob-line').css("transform", "translateX(-50%) rotate("+angle+"deg)")
});



$("#min").change(function() {
    $('.triangle').show()
    var val = $(this).val()
    var angle = val-90
    $('.min-line').css("transform", "translateX(-50%) rotate("+angle+"deg)")

    var minn = $('#min').val()
    var maxx = $('#max').val()
    var avg = ((Number(minn) + Number(maxx))/2)-180


    var total = 0
     total = (Number(maxx)-Number(minn))
   
    console.log(border)


    if(total <= 50){
        var border = Number(total)*2.66667;
    }
    else if (total >50 && total<=70){
        var border = Number(total)*2.91;
    }
    else if (total >70 && total <=90){
        var border = Number(total)*3.25;
    }
    else if (total >90 && total <=105){
        var border = Number(total)*3.55;
    }
    else if (total >105  && total <=115){
        var border = Number(total)*3.95;
    }
    else if (total >115 && total <=120){
        var border = Number(total)*4.30;
    }
    else if (total >120 && total <=130){
        var border = Number(total)*4.60;
    }
    else if (total >130 && total <=140){
        var border = Number(total)*4.90;
    }
    else if (total >140 && total <=150){
        var border = Number(total)*6.4;
    }
    else if (total >150 && total <=160){
        var border = Number(total)*9;
    }
    else if (total >160 && total <=170){
        var border = Number(total)*13;
    }
    else{
        var border = Number(total)*30;
    }
    
    $('.triangle').css("transform", "translateX(-50%) rotate("+avg+"deg)").css("border", border+"px solid transparent").css("border-bottom","300px solid blue")
    // $(this).val(0)
});

$("#max").change(function() {
    $('.triangle').show()
    var val = $(this).val()
    var angle = val-90
    $('.max-line').css("transform", "translateX(-50%) rotate("+angle+"deg)")
    



    var minn = $('#min').val()
    var maxx = $('#max').val()
    var avg = ((Number(minn) + Number(maxx))/2)-180


    var total = 0
     total = (Number(maxx)-Number(minn))
   
    console.log(border)


    if(total <= 50){
        var border = Number(total)*2.66667;
    }
    else if (total >50 && total<=70){
        var border = Number(total)*2.91;
    }
    else if (total >70 && total <=90){
        var border = Number(total)*3.25;
    }
    else if (total >90 && total <=105){
        var border = Number(total)*3.55;
    }
    else if (total >105  && total <=115){
        var border = Number(total)*3.95;
    }
    else if (total >115 && total <=120){
        var border = Number(total)*4.30;
    }
    else if (total >120 && total <=130){
        var border = Number(total)*4.60;
    }
    else if (total >130 && total <=140){
        var border = Number(total)*4.90;
    }
    else if (total >140 && total <=150){
        var border = Number(total)*6.4;
    }
    else if (total >150 && total <=160){
        var border = Number(total)*9;
    }
    else if (total >160 && total <=170){
        var border = Number(total)*13;
    }
    else{
        var border = Number(total)*30;
    }
    
    $('.triangle').css("transform", "translateX(-50%) rotate("+avg+"deg)").css("border", border+"px solid transparent").css("border-bottom","300px solid blue")


    
    // $('.triangle')

    // $(this).val(0)
});
