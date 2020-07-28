var click;
var score;

document.getElementById('clickstext').innerHTML = sessionStorage.click;
document.getElementById('scoretext').innerHTML = sessionStorage.score;

var element = document.getElementById('scoretext');
if (element.innerHTML == "undefined") {
    element.innerHTML = '100'
} else {
    null
}
var element2 = document.getElementById('clickstext');
if (element2.innerHTML == "undefined") {
    element2.innerHTML = '0'
} else {
    null
}

document.getElementById('text').innerHTML = "Select 2 batteries"

var clickAu = document.getElementById("clickAudio");
var greenAu = document.getElementById("greenAudio");
var redAu = document.getElementById("redAudio");

function playAudio() {
    clickAu.play();
}


function green() {
    greenAu.play();
}

function red() {
    redAu.play();
}


var timesClicked1 = 0;
var timesClicked2 = 0;
var timesClicked3 = 0;
var timesClicked4 = 0;
var timesClicked5 = 0;
var timesClicked6 = 0;
var timesClicked7 = 0;
var timesClicked8 = 0;
var timesClicked9 = 0;


var timesClicked10 = 0;
var timesClicked11 = 0;
var timesClicked12 = 0;
var timesClicked13 = 0;
var timesClicked14 = 0;
var timesClicked15 = 0;
var timesClicked16 = 0;
var timesClicked17 = 0;
var timesClicked18 = 0;



var timesClicked19 = 0;
var timesClicked20 = 0;
var timesClicked21 = 0;
var timesClicked22 = 0;
var timesClicked23 = 0;
var timesClicked24 = 0;
var timesClicked25 = 0;
var timesClicked26 = 0;
var timesClicked27 = 0;



var timesClicked28 = 0;
var timesClicked29 = 0;
var timesClicked30 = 0;
var timesClicked31 = 0;
var timesClicked32 = 0;
var timesClicked33 = 0;
var timesClicked34 = 0;
var timesClicked35 = 0;
var timesClicked36 = 0;



var timesClicked37 = 0;
var timesClicked38 = 0;
var timesClicked39 = 0;
var timesClicked40 = 0;
var timesClicked41 = 0;
var timesClicked42 = 0;
var timesClicked43 = 0;
var timesClicked44 = 0;
var timesClicked45 = 0;







var timesClicked46 = 0;
var timesClicked47 = 0;
var timesClicked48 = 0;
var timesClicked49 = 0;
var timesClicked50 = 0;
var timesClicked51 = 0;
var timesClicked52 = 0;
var timesClicked53 = 0;
var timesClicked54 = 0;




var timesClicked55 = 0;
var timesClicked56 = 0;
var timesClicked57 = 0;
var timesClicked58 = 0;
var timesClicked59 = 0;
var timesClicked60 = 0;
var timesClicked61 = 0;
var timesClicked62 = 0;
var timesClicked63 = 0;





var timesClicked64 = 0;
var timesClicked65 = 0;
var timesClicked66 = 0;
var timesClicked67 = 0;
var timesClicked68 = 0;
var timesClicked69 = 0;
var timesClicked70 = 0;
var timesClicked71 = 0;
var timesClicked72 = 0;


var timesClicked73 = 0;
var timesClicked74 = 0;
var timesClicked75 = 0;
var timesClicked76 = 0;
var timesClicked77 = 0;
var timesClicked78 = 0;
var timesClicked79 = 0;
var timesClicked80 = 0;
var timesClicked81 = 0;

//fist battery
document.getElementById('batt1').onclick = function() {

    timesClicked1++;

    if (timesClicked1 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();

    } else {
        document.getElementById('text').innerHTML = "Select 1 more"
        MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
        playAudio();
    }



    //2

    document.getElementById('batt2').onclick = function() {

        timesClicked2++;

        if (timesClicked2 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();


        }

        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }

        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            'newdemo2_r3_c4', '', 'fw.png/click3.fw.png',
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();

            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }


        }


    };


    //3  
    document.getElementById('batt3').onclick = function() {

        timesClicked3++;

        if (timesClicked3 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
        }



        document.getElementById('batt1').onclick = function() {
            location.reload();

        }

        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt4').onclick = function() {

        timesClicked4++;

        if (timesClicked4 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }

        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt5').onclick = function() {

        timesClicked5++;

        if (timesClicked5 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt6').onclick = function() {

        timesClicked6++;

        if (timesClicked6 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {

        timesClicked7++;

        if (timesClicked7 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {


        timesClicked8++;

        if (timesClicked8 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {

        timesClicked9++;

        if (timesClicked9 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};





//second battery


document.getElementById('batt2').onclick = function() {


    timesClicked10++;

    if (timesClicked10 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        document.getElementById('text').innerHTML = "Select 1 more"
        playAudio();

        MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);

    }
    //2

    document.getElementById('batt1').onclick = function() {
        timesClicked11++;

        if (timesClicked11 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();
        }



        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt3').onclick = function() {

        timesClicked12++;

        if (timesClicked12 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt4').onclick = function() {

        timesClicked13++;

        if (timesClicked13 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt5').onclick = function() {

        timesClicked14++;

        if (timesClicked14 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt6').onclick = function() {

        timesClicked15++;

        if (timesClicked15 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {

        timesClicked16++;

        if (timesClicked16 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {

        timesClicked17++;

        if (timesClicked17 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {

        timesClicked18++;

        if (timesClicked18 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};











//third battery  defective


document.getElementById('batt3').onclick = function() {

    timesClicked19++;

    if (timesClicked19 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();
        MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);

    }

    document.getElementById('text').innerHTML = "Select 1 more"

    //2

    document.getElementById('batt1').onclick = function() {

        timesClicked20++;

        if (timesClicked20 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {

        timesClicked21++;

        if (timesClicked21 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt4').onclick = function() {

        timesClicked22++;

        if (timesClicked22 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt5').onclick = function() {

        timesClicked23++;

        if (timesClicked23 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt6').onclick = function() {

        timesClicked24++;

        if (timesClicked24 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {

        timesClicked25++;

        if (timesClicked25 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            window.location.href = '8.html';

            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {

        timesClicked26++;

        if (timesClicked26 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {

        timesClicked27++;

        if (timesClicked27 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};



















//fourth battery


document.getElementById('batt4').onclick = function() {


    timesClicked28++;

    if (timesClicked28 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();

        MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);

        document.getElementById('text').innerHTML = "Select 1 more"

    }

    //2

    document.getElementById('batt1').onclick = function() {

        timesClicked29++;

        if (timesClicked29 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {


        timesClicked30++;

        if (timesClicked30 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {


        timesClicked31++;

        if (timesClicked31 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt5').onclick = function() {

        timesClicked32++;

        if (timesClicked32 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt6').onclick = function() {

        timesClicked33++;

        if (timesClicked33 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {

        timesClicked34++;

        if (timesClicked34 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {


        timesClicked35++;

        if (timesClicked35 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {

        timesClicked36++;

        if (timesClicked36 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};























//fifth battery


document.getElementById('batt5').onclick = function() {

    timesClicked37++;

    if (timesClicked37 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();

        MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
        document.getElementById('text').innerHTML = "Select 1 more"

    }



    //2

    document.getElementById('batt1').onclick = function() {

        timesClicked38++;

        if (timesClicked38 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {

        timesClicked39++;

        if (timesClicked39 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {

        timesClicked40++;

        if (timesClicked40 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt4').onclick = function() {

        timesClicked41++;

        if (timesClicked41 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt6').onclick = function() {
        timesClicked42++;

        if (timesClicked42 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {

        timesClicked43++;

        if (timesClicked43 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {


        timesClicked44++;

        if (timesClicked44 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {


        timesClicked45++;

        if (timesClicked45 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};














//sixth battery


document.getElementById('batt6').onclick = function() {


    timesClicked46++;

    if (timesClicked46 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();

        MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        document.getElementById('text').innerHTML = "Select 1 more"

    }



    //2

    document.getElementById('batt1').onclick = function() {


        timesClicked47++;

        if (timesClicked47 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {
        timesClicked48++;

        if (timesClicked48 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {

        timesClicked49++;

        if (timesClicked49 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt4').onclick = function() {


        timesClicked50++;

        if (timesClicked50 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt5').onclick = function() {
        timesClicked51++;

        if (timesClicked51 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt7').onclick = function() {
        timesClicked52++;

        if (timesClicked52 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {
        timesClicked53++;

        if (timesClicked53 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {

        timesClicked54++;

        if (timesClicked54 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};


















///seventh battery  defective




document.getElementById('batt7').onclick = function() {

    timesClicked55++;

    if (timesClicked55 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();

        MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);

        document.getElementById('text').innerHTML = "Select 1 more"

    }

    //2

    document.getElementById('batt1').onclick = function() {
        timesClicked56++;

        if (timesClicked56 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {
        timesClicked57++;

        if (timesClicked57 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();

            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {
        timesClicked58++;

        if (timesClicked58 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            window.location.href = '8.html';

            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }





    };


    //5
    document.getElementById('batt4').onclick = function() {
        timesClicked59++;

        if (timesClicked59 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt5').onclick = function() {

        timesClicked60++;

        if (timesClicked60 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt6').onclick = function() {
        timesClicked61++;

        if (timesClicked61 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt8').onclick = function() {
        timesClicked62++;

        if (timesClicked62 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {
        timesClicked63++;

        if (timesClicked63 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};




















//eight battery


document.getElementById('batt8').onclick = function() {


    timesClicked64++;

    if (timesClicked64 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {

        playAudio();
        MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);
        document.getElementById('text').innerHTML = "Select 1 more"

    }



    //2

    document.getElementById('batt1').onclick = function() {
        timesClicked65++;

        if (timesClicked65 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {
        timesClicked66++;

        if (timesClicked66 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {
        timesClicked67++;

        if (timesClicked67 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt4').onclick = function() {
        timesClicked68++;

        if (timesClicked68 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt5').onclick = function() {
        timesClicked69++;

        if (timesClicked69 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c13', '', 'img/newdemo_r3_c13_s2.gif', 'newdemo_r3_c13', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c13', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt6').onclick = function() {
        timesClicked70++;

        if (timesClicked70 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            playAudio();

            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);

        }
        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt7').onclick = function() {
        timesClicked71++;

        if (timesClicked71 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);

        }



        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt9').onclick = function() {
        timesClicked72++;

        if (timesClicked72 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();
            MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};


















//nineth battery



document.getElementById('batt9').onclick = function() {
    timesClicked73++;

    if (timesClicked73 % 2 == 0) {
        MM_swapImgRestore();
        playAudio();
    } else {
        playAudio();
        MM_swapImage('newdemo_r3_c23', '', 'img/newdemo_r3_c23_s2.gif', 'newdemo_r3_c23', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c23', '', 'fw.png/click1.fw.png', 1);
        document.getElementById('text').innerHTML = "Select 1 more"

    }


    //2

    document.getElementById('batt1').onclick = function() {
        timesClicked74++;

        if (timesClicked74 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c4', '', 'img/newdemo_r3_c4_s2.gif', 'newdemo_r3_c4', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c4', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };


    //3
    document.getElementById('batt2').onclick = function() {
        timesClicked75++;

        if (timesClicked75 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c6', '', 'img/newdemo_r3_c6_s2.gif', 'newdemo_r3_c6', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c6', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };

    //4
    document.getElementById('batt3').onclick = function() {
        timesClicked76++;

        if (timesClicked76 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            MM_swapImage('newdemo_r3_c8', '', 'img/newdemo_r3_c8_s2.gif', 'newdemo_r3_c8', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c8', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //5
    document.getElementById('batt4').onclick = function() {
        timesClicked77++;

        if (timesClicked77 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c11', '', 'img/newdemo_r3_c11_s2.gif', 'newdemo_r3_c11', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c11', '', 'fw.png/click1.fw.png', 1);
        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //6
    document.getElementById('batt5').onclick = function() {
        timesClicked78++;

        if (timesClicked78 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
            playAudio();

        }

        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



    //7
    document.getElementById('batt6').onclick = function() {
        timesClicked79++;

        if (timesClicked79 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c15', '', 'img/newdemo_r3_c15_s2.gif', 'newdemo_r3_c15', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c15', '', 'fw.png/click1.fw.png', 1);
        }


        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt8').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };


    //8
    document.getElementById('batt7').onclick = function() {
        timesClicked80++;

        if (timesClicked80 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {
            playAudio();

            MM_swapImage('newdemo_r3_c17', '', 'img/newdemo_r3_c17_s2.gif', 'newdemo_r3_c17', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c17', '', 'fw.png/click1.fw.png', 1);

        }



        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }


    };



    //9
    document.getElementById('batt8').onclick = function() {
        timesClicked81++;

        if (timesClicked81 % 2 == 0) {
            MM_swapImgRestore();
            playAudio();
        } else {

            playAudio();

            MM_swapImage('newdemo_r3_c20', '', 'img/newdemo_r3_c20_s2.gif', 'newdemo_r3_c20', '', '../instruction/fw.png/click1.fw.png', 'newdemo_r3_c20', '', 'fw.png/click1.fw.png', 1);

        }



        document.getElementById('batt1').onclick = function() {
            location.reload();

        }
        document.getElementById('batt2').onclick = function() {
            location.reload();

        }
        document.getElementById('batt3').onclick = function() {
            location.reload();

        }
        document.getElementById('batt4').onclick = function() {
            location.reload();

        }
        document.getElementById('batt5').onclick = function() {
            location.reload();

        }
        document.getElementById('batt6').onclick = function() {
            location.reload();

        }
        document.getElementById('batt7').onclick = function() {
            location.reload();

        }
        document.getElementById('batt9').onclick = function() {
            location.reload();

        }
        document.getElementById('text').innerHTML = "Click on test or reject";


        document.getElementById('checkit').onclick = function() {
            document.getElementById('checkit').onmouseout = function() {

                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c21', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/green.fw.png', 'newdemo_r7_c21', '', 'fw.png/click2.fw.png', 1);
            green();
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }


        document.getElementById('scoreid').onclick = function() {
            document.getElementById('scoreid').onmouseout = function() {
                MM_swapImgRestore();
            }
            document.getElementById('text').innerHTML = " ";
            MM_swapImage('newdemo_r7_c25', '', '../instruction/fw.png/click2.fw.png', 'newdemo_r5_c9', '', 'fw.png/red.fw.png', 'newdemo_r7_c25', '', 'fw.png/click2.fw.png', 1);
            red();
            if (typeof(Storage) !== "undefined") {

                if (sessionStorage.score) {
                    sessionStorage.score = Number(sessionStorage.score) - 10;
                } else {
                    sessionStorage.score = 90;
                }
                document.getElementById("scoretext").innerHTML = sessionStorage.score;
            } else {
                document.getElementById("scoretext").innerHTML = "Sorry, your browser does not support web storage...";
            }
            if (typeof(Storage) !== "undefined") {
                if (sessionStorage.click) {
                    sessionStorage.click = Number(sessionStorage.click) + 1;
                } else {
                    sessionStorage.click = 1;
                }
                document.getElementById("clickstext").innerHTML = sessionStorage.click;
            } else {
                document.getElementById("clickstext").innerHTML = "Sorry, your browser does not support web storage...";
            }

        }



    };



};