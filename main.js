var swordNames = [
    "나뭇가지", // 50
    "검손잡이", // 50
    "목검", // 50
    "공포의쓴맛", // 50
    "주먹도끼", // 50
    "죽도", // 50
    "돌도끼", // 50
    "비파형동검", // 50
    "쿠크리", // 50
    "장미칼", // 50
    "롱소드", // 50
    "환도", // 50
    "사인참사검", // 50
    "그레이트소드", // 50
    "양날검", // 50
    "엑스칼리버", // 50
    "불의계승식의대검", // 50 =======
    "화사장력곡괭이", // 50
    "스톰브레이커", // 50
    "광선검", // 50
    "태양의창", // 50
    "파워스톤", // 50
    "인피니티건틀렛", // 50
    "기적의검"
]
var nowSword = 0;

function upgradeSword() {
    if (nowSword == 23) {
        alert("강화불가");
        return;
    }
    if (upgradeRand()) {
        document.getElementById('swordImg').src = `swords/${nowSword + 1}.png`;
        document.getElementById('swordName').innerHTML = `[${nowSword + 1}] ${swordNames[nowSword + 1]}`;
        nowSword += 1;
    } else {
        if (nowSword >= 16) {
            document.getElementById('swordImg').src = `swords/0.png`;
            document.getElementById('swordName').innerHTML = `[0] 나뭇가지`;
            nowSword = 0;
        } else {
            document.getElementById('swordImg').src = `swords/${nowSword - 1}.png`;
            document.getElementById('swordName').innerHTML = `[${nowSword - 1}] ${swordNames[nowSword - 1]}`;
            nowSword -= 1;
        }
        
        if (nowSword == 0) {
            document.getElementById('swordPct').innerHTML = "강화 확률 : 100%";
        }
    }
}

function upgradeRand() {
    if (nowSword == 0) {
        document.getElementById('swordPct').innerHTML = "강화 확률 : 50%";
        return true;
    } else {
        var rand = Math.floor(Math.random() * 2);
        if (rand == 1) {
            return true;
        } else {
            return false;
        }
    }
}