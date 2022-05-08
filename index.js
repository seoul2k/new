span = document.querySelector('span[data-xts-sclsa="btn"]')
span.onclick = () => {
    var div = document.getElementsByClassName('hk')[0]
    div.classList.remove('hk')
    while (div.firstChild) {

        div.removeChild(div.firstChild);

    }
    div.classList.add('hk-1')
    var div1 = document.createElement('div')
    div1.classList.add('hr')

    var str = '    <div><br><p>鱼儿离不开水，花儿离不开秧；树枝离不开根，孩子离不开娘。<br>世上只有妈妈好，齐呼母亲最伟大。</p><p>天上的风雨来了，鸟儿躲到它的巢里。<br>心中的风雨来了，我只躲到你的怀里。</p><br><p>祝妈妈母亲节快乐！</p></div>'


    
    div.innerHTML += str
    div.appendChild(div1)
    var img = document.createElement('img')
    img.src = './index.jpeg'
    img.classList.add('img')
    div.appendChild(img)
}