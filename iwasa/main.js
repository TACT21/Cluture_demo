


function addpien(){
    setInterval(function () {
        document.getElementById("specetopien").innerHTML += "ーOーー";
    },1);

}

//レベル２
function addpien2(){
    var chartouse = ["０","１"];
//    var chartouse = ["０","１","２","３","４","５","６","７","８","９","A","B","C","D","E","F"];
    setInterval(function () {
            document.getElementById("specetopien").innerHTML += chartouse[Math.floor(Math.random() * 2)];
        },1);
}

//レベル３

function addpien3(){
    var chartouse = ["　","０"];


    var map1 = [0,0,1,0,0,0,0,1,0,0,3];
    var map2 = [0,1,0,1,0,0,1,0,1,0,3];
    var map3 = [0,0,0,0,0,0,0,0,0,0,3];
    var map4 = [0,0,1,0,0,0,0,1,0,0,3];
    var map5 = [0,0,0,1,1,1,1,0,0,0,3,3];
    var map6 = [];
//    var val = "";
    for (var i = 0; i < 5; i++) {
        var nowusingmap = [];
        if (i === 0){
            nowusingmap = map1;
        } else if (i === 1){
            nowusingmap = map2;
        } else if (i === 2){
            nowusingmap = map3;
        } else if (i === 3){
            nowusingmap = map4;
        } else if (i === 4) {
            nowusingmap = map5;
        }
        console.log(nowusingmap);
        for (var j = 0; j < nowusingmap.length; j++) {
            if (chartouse[nowusingmap[j]] === chartouse[0]) {
                document.getElementById("specetopien").innerHTML += chartouse[nowusingmap[j]];
            } else if (chartouse[nowusingmap[j]] === chartouse[1]) {
                document.getElementById("specetopien").innerHTML += chartouse[nowusingmap[j]];
            } else {
                document.getElementById("specetopien").innerHTML += "<br>";
            }
        }
    }

    /*
     ーー１ーーーー１ーー
     ー１ー１ーー１ー１ー
     ーーーーーーーーーー
     ーー１ーーーー１ーー
     ーーー１１１１ーーー
     */
}
