var lst = localStorage;var total;var db = false;var s1 = 0;
var first_0 = false;var keynums = [];var trp = false;var p5 = false;
var times = 0;var c0 = 0;var types = 0;var half = false;
var b0 = false;var b1 = false;var se2;var opt = [];var keyin = false;
var options = ['-', '2x', '4x', 't/2', '+5'];var rank_now = null;
var courses = ['↑↓←→', 'D/F/J/K', 'Space', 'Enter', 'A~Z/1~9', '4キー', 'Click', '-'];
var k1 = {8:'BackSpace',13:'Enter',16:'shift',17:'ctrl',18:'alt',32:'Space',189:'-'};
var cl = false;var score = 0;var keyname = [];
var alpb = 'abcdefghijklmnopqrstuvwxyz';
for (i=0;i<36;i++){
    if (i<10) k1[(i + 48)] = i.toString();
    else k1[(i + 55)] = alpb[i - 10];
}
function index(list, val){
    return 
}
var key = {};
var k0 = Object.keys(k1);
k0.sort();
for(var i=0;i<k0.length;i++) key[ k0[i] ] = k1[ k0[i] ];
if (lst.getItem('#keyrank') === null){
    var ranks = JSON.stringify({1:{"score":0, "push":0, "course":8, "option": 0}, 2:{"score":0, "push":0, "course":8, "option": 0}, 3:{"score":0, "push":0, "course":8, "option": 0}, 4:{"score":0, "push":0, "course":8, "option": 0}, 5:{"score":0, "push":0, "course":8, "option": 0}});
    lst.setItem('#keyrank', ranks);
}else{
    var olds = ['-', '2x', '4x', '1/2', '+5'];
    var json = JSON.parse(lst.getItem('#keyrank'));
    for (i=0;i<Object.keys(json).length;i++){
        var itms = json[i + 1]["option"];
        var litms = itms.split(', ');
        // litms = litms.map(function (x){return olds.indexOf(x);});
    }
}
var nums = Object.keys(key).map(str => parseInt(str, 10));
function course(x){
    x = x || 0;
    var b_s = false;
    switch (x){
        case 1:
            keynums = [37, 38, 39, 40];
            score = 360;
            if (cl) clear();
            break;
        case 2:
            keynums = [68, 70, 74, 75];
            score = 360;
            if (cl){
                db = true;
                opt.push(1);
            }
            break;
        case 3:
            keynums = [32];
            score = 900;
            if (cl){
                trp = true;
                opt.push(2);
            }
            break;
        case 4:
            keynums = [13];
            score = 900;
            if (cl){
                half = true;
                opt.push(3);
            }
            break;
        case 5:
            keynums = nums;
            score = 180;
            if (cl){
                p5 = true;
                opt.push(4);
            }
            break;
        case 6:
            b_s = true;
            score = 360;
            break;
        case 7:
            keynums = ['mouse'];
            score = 870;
            break;
        default:
            b_s = true;
            score = 360;
            break;
    }
    if (!cl){
        opt = opt.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
        if (b_s) keyselect();
        else startcheck(x);
    }else{
        cl = false;
    }
    types = parseInt(x);
}
function reset(){
    times = 0;c0 = 0;trp = false;opt = [];
    b0 = false;b1 = false;db = false;rank_now = null;
    keynums = [];keyname = [];half = false;p5 = false;
    score = 0;types = 0;first_0 = false;
}
function mainMenu(){
    reset();
    document.getElementById('main').innerHTML = "<p class='msg_c' style='margin-bottom: 7.5px;'>コースを選択してください<br><span style='font-size: 17.5px;'>(カッコ内はオプション操作)</span></p><p class='msg_c' id='alert'>※製作者は、このゲームをプレイして起きた損害の責任は負いません。</p><div id='select_course'><input type='button' class='selector' id='sel1' onclick='course(1)' value='上下左右&#32;(Reset)'><br><input type='button' class='selector' id='sel2' onclick='course(2)' value='D/F/J/K&#32;(x2)'><br><input type='button' class='selector' id='sel3' onclick='course(3)' value='スペース&#32;(x4)'><br><input type='button' class='selector' id='sel4' onclick='course(4)' value='エンター&#32;(1/2)'><br><input type='button' class='selector' id='sel5' onclick='course(5)' value='A~Z / 1~9&#32;(+5)'><br><input type='button' class='selector' id='sel6' onclick='course(6)' value='お好きな4キー'><br><input type='button' class='selector' id='sel7' onclick='course(7)' value='マウスクリック'><br><hr color='#000000' size='2' width='80%' noshade style='text-align: center; border-style: dashed;'><input type='button' class='selector' id='sel8' onclick='ranking()' value='ランキングを表示'><br><input type='button' class='selector' id='sel8' onclick='checker()' value='コントローラー'><br></div>";
}
function keyselect(){
    b0 = true;
    document.getElementById('main').innerHTML = "<p class='msg_c' onkeydown='keyset()'>キーを入力してください:</p><p id='dispcourse'>キー:&#32;</p><p class='msg_c' id=dispkey>-, -, -, -</p><input type='button' class='selector' id='sel7' onclick='startcheck_1()' value='Continue'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Back'><br>";
    keyname = ['-', '-', '-', '-'];
}
function keyset(){
    if (b0){
        c0 += 1;
        if (key[event.keyCode] === undefined){window.alert('このキーは入力できません。');
        }else{
            keyname.push(key[event.keyCode]);
            keyname.shift();
            document.getElementById('dispkey').innerHTML = keyname.join(', ');
        }
    }
}
function keyplus(){
    if (keyin){
        if (b1 && keynums[0] !== "mouse"){
            if (keynums.indexOf(event.keyCode) >= 0) times ++;
            document.getElementById('showtimes').innerHTML = times;
        }
    }
}
function keyplus_1(){
    if (keyin){
        if (keynums[0] === 'mouse'){
            times ++;
            document.getElementById('showtimes').innerHTML = times;
            se2 = setInterval(function (){
                document.getElementById('hidbtn').focus();
            }, 1);
        }
    }
}
function startcheck(course){
    if (opt.length <= 0) opt.push(0);
    var csn = ['上下左右キー', 'D / F / J / Kのみ', 'スペースキー', 'エンターキー', 'アルファベット+数字キー', 'エラー：Backを押してください', 'マウスクリック'];
    document.getElementById('main').innerHTML = "<p class='msg_c'>これで開始します。よろしいですか？</p><p id='dispcourse'>コース:&#32;「&#32;" + csn[(course - 1)] + "&#32;」<br>Option:&#32;" + opt.sort(function (a, b){return a - b;}).map(function (x){return options[x];}).join(', ') + "</p><input type='button' class='selector' id='sel_st' onclick='gameStart()' value='Yes'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Back'><br>";
}
function findFromValue(obj, val){
    var result = null;
    const k_00 = Object.keys(obj);
    for (let i = 0; i < k_00.length; i++) if (obj[k_00[i]] === val) result = k_00[i];
    return result;
}
function startcheck_1(){
    b0 = false;
    if (opt.length <= 0) opt.push(0);
    for (i=0;i<keyname.length;i++) keynums.push(parseInt(findFromValue(key, keyname[i])));
    document.getElementById('main').innerHTML = "<p class='msg_c'>これで開始します。よろしいですか？</p><p id='dispcourse'>コース:&#32;「&#32;お好きな4キー&#32;」</p><p id='dispcourse'>キー:&#32;「&#32;" + keyname.join(', ') + "&#32;」<br>Option:&#32;" + opt.sort(function (a, b){return a - b;}).map(function (x){return options[x];}).join(', ') + "</p><input type='button' class='selector' id='sel_st' onclick='gameStart()' value='Yes'><br><input type='button' class='selector' id='sel_menu' onclick='keyselect()' value='Back'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br>";
}
function gameStart(){
    var t5 = 5;
    document.getElementById('main').innerHTML = "<p class='msg_c'><span id='showtimes' style='font-size: 40px;'>6</span><br></p><!--input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br-->";
    var se1 = setInterval(function (){
        document.getElementById('showtimes').innerHTML = t5;
        t5 --;
        if (t5 < 0){
            clearInterval(se1);
            pressKeys();
        }
    }, 1000);
}
function pressKeys(){
    b1 = true;
    keyin = true;
    var left = 10;
    if (p5) left += 5;
    if (half) left = Math.round(left / 2);
    if (trp) left = Math.round(left / 2);
    document.getElementById('body0').focus();
    document.getElementById('main').innerHTML = "<p class='msg_c'>Press:<span id='showtimes'>0</span>key<br><span id='showctd'>" + left + "</span>&#32;seconds to the end...</p>" + '<div id=set01><p class="clickwin" id="clicks" onclick="keyplus_1()">ここをクリック！</p></div><br>';
    if (types !== 7) document.getElementById('clicks').innerHTML = 'キーを連打！';
    setTimeout(function(){
        b1 = false;
        keyin = false;
        showresults();
    }, left * 1000);
    /*if (half){
        setTimeout(function(){
            b1 = false;
            showresults();
        }, 2000);
    }else if (trp){
        setTimeout(function(){
            b1 = false;
            showresults();
        }, 5000);
    }else{
        setTimeout(function(){
            b1 = false;
            keyin = false;
            showresults();
        }, 10000);
    }*/
    var si2 = setInterval(function(){
        left --;
        if (left < 1){
            clearInterval(si2);
            clearInterval(se2);
        }
        else document.getElementById('showctd').innerHTML = left;
    }, 1000);
}
function result_format(){
    var opt_now = opt.sort(function (a, b){return a - b;}).map(function (x){return options[x];}).join(', ');
    if (opt_now.length <= 0) opt_now = '-';
    document.getElementById('main').innerHTML = '<p class="msg_c">今回の記録</p><div id="scores"></div>';
    document.getElementById('scores').innerHTML = '<p class="p_score">コース:&#32;<span>' + courses[types - 1] + '<p class="p_score">スコア:&#32;<span>' + total + '</span></p>' + '<p class="p_score">連打数:&#32;<span>' + s1 + '</span>, <!--span>' + (s1 / 10) + '打/秒</span--></p><p class="p_score"><span id="ranks"></span><p><p class="p_score">Option:&#32;<span id="op"></span><p>' + "<input type='button' class='selector' id='sel_rank' onclick='ranking()' value='ランキングを表示'><br>" + "<input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br>";
    document.getElementById('op').innerHTML = opt_now;
    var json = JSON.parse(lst.getItem('#keyrank'));
    if (first_0){
        if (total > parseInt(json[1]["score"])){
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング1位達成';
            rank_now = 1;
            json[5]["score"] = json[4]["score"];
            json[5]["push"] = json[4]["push"];
            json[5]["course"] = json[4]["course"];
            json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = json[2]["score"];
            json[3]["push"] = json[2]["push"];
            json[3]["course"] = json[2]["course"];
            json[3]["option"] = json[2]["option"];
            json[2]["score"] = json[1]["score"];
            json[2]["push"] = json[1]["push"];
            json[2]["course"] = json[1]["course"];
            json[2]["option"] = json[1]["option"];
            json[1]["score"] = total;
            json[1]["push"] = s1;
            json[1]["course"] = types;
            json[1]["option"] = opt_now;
        }else if (total > parseInt(json[2]["score"])){
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング2位達成';
            rank_now = 2;
            json[5]["score"] = json[4]["score"];
            json[5]["push"] = json[4]["push"];
            json[5]["course"] = json[4]["course"];
            json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = json[2]["score"];
            json[3]["push"] = json[2]["push"];
            json[3]["course"] = json[2]["course"];
            json[3]["option"] = json[2]["option"];
            json[2]["score"] = total;
            json[2]["push"] = s1;
            json[2]["course"] = types;
            json[2]["option"] = opt_now;
        }else if (total > parseInt(json[3]["score"])){
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング3位達成';
            rank_now = 3;
            json[5]["score"] = json[4]["score"];
            json[5]["push"] = json[4]["push"];
            json[5]["course"] = json[4]["course"];
            json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = total;
            json[3]["push"] = s1;
            json[3]["course"] = types;
            json[3]["option"] = opt_now;
        }else if (total > parseInt(json[4]["score"])){
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング4位達成';
            rank_now = 4;
            json[5]["score"] = json[4]["score"];
            json[5]["push"] = json[4]["push"];
            json[5]["course"] = json[4]["course"];
            json[5]["option"] = json[4]["option"];
            json[4]["score"] = total;
            json[4]["push"] = s1;
            json[4]["course"] = types;
            json[4]["option"] = opt_now;
        }else if (total > parseInt(json[5]["score"])){
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング5位達成';
            rank_now = 5;
            json[5]["score"] = total;
            json[5]["push"] = s1;
            json[5]["course"] = types;
            json[5]["option"] = opt_now;
        }else{
            document.getElementById('ranks').innerHTML = 'ランキング圏外';
            rank_now = 6;
        }
    }
    if (first_0) lst.setItem('#keyrank', JSON.stringify(json));
    if (!first_0){
        switch (rank_now) {
            case 1:
                document.getElementById('ranks').innerHTML = 'デバイス内ランキング1位達成';
                break;
            case 2:
                document.getElementById('ranks').innerHTML = 'デバイス内ランキング2位達成';
                break;
            case 3:
                document.getElementById('ranks').innerHTML = 'デバイス内ランキング3位達成';
                break;
            case 4:
                document.getElementById('ranks').innerHTML = 'デバイス内ランキング4位達成';
                break;
            case 5:
                document.getElementById('ranks').innerHTML = 'デバイス内ランキング5位達成';
                break;
            case 6:
                document.getElementById('ranks').innerHTML = 'ランキング圏外';
                break;
            default:
                document.getElementById('ranks').innerHTML = 'エラー発生:リロードしてください';
                break;
        }
    } 
    first_0 = false;
}
function showresults(){
    first_0 = true;
    document.getElementById('main').innerHTML = '<p class="msg_c">スコアを計算中！<br>ちょっと待っててね。</p>';
    s1 = times;
    if (db){score *= 2;times /= 2;}
    if (trp){score *= 2;times *= 1.5;}
    if (half) times *= 2;
    if (p5) times = Math.round(times * 0.4);
    total = score * times + (score * 10) * parseInt((times - (times % 100))/100);
    setTimeout(result_format(), 3000);
}
function ranking(){
    if (cl){
        cl = false;
        opt = [];
    }else{
        var json = JSON.parse(lst.getItem('#keyrank'));
        // document.getElementById('main').innerHTML = '<p class="msg_c">準備中！<br>ちょっと待っててね。</p>' +"<input type='button' class='selector' id='sel_menu' onclick='branch_0()' value='Back'><br>";
        document.getElementById('main').innerHTML = '<p class="msg_c">デバイス内ランキング</p><ul class="ul-des"><li class="wsets"><ul class="ul_in"><li class="lipart">順位<span id="spw" style="font-weight: 100;"></span></li><li class="lipart">スコア</li><li class="lipart">連打数</li><li class="lipart">コース</li><li class="lipart">Option</li></ul></li></ul>' + '<li class="wsets"><ul class="ul_in"><li class="lipart">1</li><li class="lipart">' + json[1]["score"] + '</li><li class="lipart">' + json[1]["push"] + '</li><li class="lipart">' + courses[parseInt(json[1]["course"]) - 1] + '</li><li class="lipart">' + json[1]["option"] + '</li><br></ul><ul class="ul_in"><li class="lipart">2</li><li class="lipart">' + json[2]["score"] + '</li><li class="lipart">' + json[2]["push"] + '</li><li class="lipart">' + courses[parseInt(json[2]["course"]) - 1] + '</li><li class="lipart">' + json[2]["option"] + '</li><br></ul><ul class="ul_in"><li class="lipart">3</li><li class="lipart">' + json[3]["score"] + '</li><li class="lipart">' + json[3]["push"] + '</li><li class="lipart">' + courses[parseInt(json[3]["course"]) - 1] + '</li><li class="lipart">' + json[3]["option"] + '</li><br></ul><ul class="ul_in"><li class="lipart">4</li><li class="lipart">' + json[4]["score"] + '</li><li class="lipart">' + json[4]["push"] + '</li><li class="lipart">' + courses[parseInt(json[4]["course"]) - 1] + '</li><li class="lipart">' + json[4]["option"] + '</li><br></ul><ul class="ul_in"><li class="lipart">5</li><li class="lipart">' + json[5]["score"] + '</li><li class="lipart">' + json[5]["push"] + '</li><li class="lipart">' + courses[parseInt(json[5]["course"]) - 1] + '</li><li class="lipart">' + json[5]["option"] + '</li><br></ul></li><br>' + "<input type='button' class='selector' id='sel_menu' onclick='branch_0()' value='Back'><br>";
    }
}
function branch_0(){
    if (score > 0) result_format();
    else mainMenu();
}
function clear(){
    score = 0;
    if (cl){
        if (window.confirm('本当にリセットしますか？')){
            localStorage.removeItem('#keyrank');
            if (lst.getItem('#keyrank') === null){
                var ranks = JSON.stringify({1:{"score":0, "push":0, "course":8, "option": 0}, 2:{"score":0, "push":0, "course":8, "option": 0}, 3:{"score":0, "push":0, "course":8, "option": 0}, 4:{"score":0, "push":0, "course":8, "option": 0}, 5:{"score":0, "push":0, "course":8, "option": 0}});
                lst.setItem('#keyrank', ranks);
            }
        }
    }
}
function checker(){
    if (!cl) cl = true;
    else if (cl) cl = false;
}
