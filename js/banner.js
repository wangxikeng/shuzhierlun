let imgs = document.querySelectorAll('.imgshow a');
let points = document.querySelectorAll('.points a');
let btns = document.querySelectorAll('.btn');
let nowIndex = 0;
let timer = null;
console.log(imgs,points,btns);
 function Hiddenimages() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
}
function Hiddenpoints() {
    for (let i = 0; i < points.length; i++) {
        points[i].className = 'hidden';
    }
}
function changeAll() {
    Hiddenimages();
    Hiddenpoints();//将图片和小圆点统统隐藏
    imgs[nowIndex].style.display = 'block';
    points[nowIndex].className = 'show';
    //将小圆点与图片进行绑定
}
changeAll();


//设计轮播效果
function barnerPlay() {
    //添加定时器
    timer = setInterval(function () {
        changeAll();
        nowIndex++;
        if (nowIndex >= imgs.length) {
            nowIndex = 0;
        }
    }, 3000)
}
barnerPlay();
//进行小圆点的触发
for (let i = 0; i < points.length; i++) {
    points[i].onmouseover = function () {
        clearInterval(timer);
    }
    points[i].onmouseout = function () {
        barnerPlay();
    }
    //进行小圆点点击的跳转
    points[i].index = i;//获取小圆点当前的下标
    points[i].onclick = function () {
        nowIndex = this.index;
        changeAll();//调用捆绑函数
    }
}
//左右按钮部分
for (let i = 0; i < btns.length; i++) {
    //鼠标悬停和鼠标移开
    btns[i].onmouseover = function () {
        clearInterval(timer);
    }
    btns[i].onmouseout = function () {
        barnerPlay();
    }
    //点击切换照片
    //左键部分
    btns[0].onclick = function () {
        nowIndex--;
        if (nowIndex < 0) {
            nowIndex = 4;
        }
        changeAll();
    }
    //右键部分
    btns[1].onclick = function () {
        nowIndex++;
        if (nowIndex > imgs.length - 1) {
            nowIndex = 0;
        }
        changeAll();
    }
} 