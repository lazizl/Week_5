function prime_position(val) {
    var yet = 1;
    var num = 1;
    var yeet = 0;

    while(yet <= val) {
        yeet = 0;
        for (var i = 1; i < num; i++) {
            if (num % i == 0) {
                yeet++;
            }
            if (yeet > 1) {
                break;
            }
        }
        if (yeet == 1) {
            yet++;
        }
        num++;
    }
    return num;
}



function sort_subtract(val) {
    var stri = val.toString();
    var arrr = stri.split("");
    var arrr2= stri.split("");

    var a = arrr.sort();
    var numb = Number(a.join(''));


    var b = arrr2.sort(function(a,b){return b-a});
    var numb2 = Number(b.join(''));

    return numb2-numb;
}