// init kakao once
$(document).ready(function(){
  document.getElementById('center').scrollIntoView({ inline: 'center' });
});
Kakao.init('94964405baa73e1cc86f8d7fd5510502');


// contact modal
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");

btn.onclick = function() {
  modal.style.display = "block";
}


// contact parent modal
var modal1 = document.getElementById("contactParentsModal");
var btn1 = document.getElementById("contactParentsBtn");

btn1.onclick = function() {
  modal1.style.display = "block";
}

// money modal for groom 
var modal2 = document.getElementById("groomMoneyModal");
var btn2 = document.getElementById("groomMoneyBtn");

btn2.onclick = function() {
  modal2.style.display = "block";
}

// money modal for groom 
var modal3 = document.getElementById("brideMoneyModal");
var btn3 = document.getElementById("brideMoneyBtn");

btn3.onclick = function() {
    modal3.style.display = "block";
}
  


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {  
    modal.style.display = "none";
    }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

$(document).on('mouseup touchend', function (event){
  if (event.target == modal) {  
    modal.style.display = "none";
    }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";  
  }
});



var copybtn = document.getElementById("copyBtn");

copybtn.onclick = function() {
    // navigator.clipboard.writeText('http://wedding0312.com/');
    const el = document.createElement('textarea');
    el.value = 'http://wedding0312.com/';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

var copybtn1 = document.getElementById("copyBtn1");

copybtn1.onclick = function() {
    const el = document.createElement('textarea');
    el.value = '110-027-822752';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

var copybtn2 = document.getElementById("copyBtn2");

copybtn2.onclick = function() {
    const el = document.createElement('textarea');
    el.value = '110-260-412730';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

var copybtn3 = document.getElementById("copyBtn3");

copybtn3.onclick = function() {
    const el = document.createElement('textarea');
    el.value = '155-000-730544';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

var copybtn4 = document.getElementById("copyBtn4");

copybtn4.onclick = function() {
    const el = document.createElement('textarea');
    el.value = '110-250-138410';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


var kakaoShareBtn = document.getElementById("kakaoShareBtn");
kakaoShareBtn.onclick = function() {

    Kakao.Link.sendDefault({

        objectType: 'feed',
        content: {
            title: '구준모, 김현정 결혼합니다.',
            description: '2022년 3월 12일 토요일 오후 6시 조선 팰리스',
            imageUrl:
            'http://wedding0312.com/img/img2.jpeg',
            link: {
            mobileWebUrl: 'http://wedding0312.com/',
            webUrl: 'http://wedding0312.com/'
            },
        },
        buttons: [
            {
              title: '청첩장 보기',
              link: {
                mobileWebUrl: 'http://wedding0312.com/',
                webUrl: 'http://wedding0312.com/'
              },
            }
          ]
    });
}


