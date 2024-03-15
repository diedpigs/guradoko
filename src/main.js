window.addEventListener("load", function() {
    var url = 'https://script.google.com/macros/s/AKfycbziVAwh4y4dSiuYZ6zf2_pa60RR4B6jxeYyxYOINzkPf71hhahPGRR138yTjgLV8p72/exec';
    fetch(url).then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            document.querySelector('#subtitlebox').style.display = 'none';
            document.querySelector('#loadingbox').innerHTML = "API君已經很努力了，改天再來看看吧";
            console.log('no response');
        }
    }).then(function(data) {
        if (data.live == "upcoming") {
            document.querySelector('#subtitlebox').innerHTML = "鯊鯊就快開台了，還不快去待機：";
            document.querySelector('#loadingboxl').style.display = 'none';
            document.querySelector('#videoboxl').style.display = 'block';
            var ytplayere = document.createElement("iframe");
            ytplayere.setAttribute("src", data.vidi);
            ytplayere.setAttribute("sframeborder", "0");
            ytplayere.setAttribute("scrolling", "no");
            document.querySelector('#ytplayer').appendChild(ytplayere);;
        }
        else if (data.live == "live") {
            document.querySelector('#subtitlebox').innerHTML = "鯊鯊正在開台，還不快去看：";
            document.querySelector('#loadingboxl').style.display = 'none';
            document.querySelector('#videoboxl').style.display = 'block';
            var ytplayere = document.createElement("iframe");
            ytplayere.setAttribute("src", data.vidi);
            ytplayere.setAttribute("sframeborder", "0");
            ytplayere.setAttribute("scrolling", "no");
            document.querySelector('#ytplayer').appendChild(ytplayere);;
        }
        else {
            document.querySelector('#subtitlebox').innerHTML = "距離鯊鯊上次開台，已經過了：";
            document.querySelector('#loadingboxl').style.display = 'none';
            document.querySelector('#countbox').style.display = 'block';
            const startDate = dayjs(data.pubt);
            setDate();
            setInterval(() => setDate(), 1000);

            function setDate() {
                let secs = dayjs().diff(startDate, 'second');
                let mins = Math.floor(secs / 60);
                let hours = Math.floor(mins / 60);
                let days = Math.floor(hours / 24);
                secs = secs - (mins * 60)
                mins = mins - (hours * 60);
                hours = hours - (days * 24);
                let secs2 = secs.toString().padStart(2, '0');
                let mins2 = mins.toString().padStart(2, '0');
                let hours2 = hours.toString().padStart(2, '0');
                document.querySelector('#day').innerHTML = days;
                document.querySelector('#hour').innerHTML = hours2;
                document.querySelector('#min').innerHTML = mins2;
                document.querySelector('#sec').innerHTML = secs2;
            }
        }
        document.querySelector('#loadingbox').innerHTML = "";
    }).catch(function(error) {
        document.querySelector('#subtitlebox').style.display = 'none';
        document.querySelector('#loadingbox').innerHTML = "API君已經很努力了，改天再來看看吧";
        console.log('app script error');
    });
});

function sharetotwitter() {
    let sresult = "http://twitter.com/share?text=" + gettime() + '&url=https://diedpigs.github.io/guradoko/';
    window.open(sresult);
}

function sharetofkinfb() {
    let sresult = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https://diedpigs.github.io/guradoko/&display=popup&ref=plugin&src=share_button&quote=" + gettime();
    window.open(sresult);
}

function sharetoline() {
    let sresult = "https://line.me/R/msg/text/?" + gettime() + '%0D%0Ahttps://diedpigs.github.io/guradoko/';
    window.open(sresult);
}

function gettime() {
    let sday = document.getElementById('day').innerText;
    let shour = document.getElementById('hour').innerText;
    let smin = document.getElementById('min').innerText;
    let ssec = document.getElementById('sec').innerText;
    let stime = "鯊鯊已經" + sday + "天" + shour + "小時" + smin + "分鐘" + ssec + "秒沒開台了";
    return stime;
}

function nakirikawaii() {
    let sresult = "https://ayame.canaria.cc/";
    window.open(sresult);
}
