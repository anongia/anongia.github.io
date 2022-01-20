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

Kakao.init('94964405baa73e1cc86f8d7fd5510502');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
    title: '모바일 청첩장',
    description: '모바일 청첩장',
    imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    link: {
        mobileWebUrl: 'http://wedding0312.com/',
        webUrl: 'http://wedding0312.com/'
    }
    },
    buttons: [
    {
        title: '청첩장 보기',
        link: {
        mobileWebUrl: 'http://wedding0312.com/',
        webUrl: 'http://wedding0312.com/'
        }
    }
    ]
});