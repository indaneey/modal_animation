var item1 = document.querySelector('#three')

var style_tag = document.createElement('style')
style_tag.innerHTML = `
.item_list li:nth-child(7):after {
    content: url(assets/checked.png);
    position: absolute;
    left: 2%;
    margin-top: -1px;
  }`


var checked = function (){

    var style_tag3 = document.createElement('style')
    var style_tag7 = document.createElement('style')
    var style_tag8 = document.createElement('style')
    var style_tag9 = document.createElement('style')

   
    var three = setInterval(() => {
        var random = Math.floor(Math.random() *10)
        style_tag3.innerHTML = `
        .item_list li:nth-child(${random}):after {
            content: url(assets/checked.png);
            position: absolute;
            left: 2%;
            margin-top: -1px;
        }`
        document.body.appendChild(style_tag3)
    }, 2000);

    var seven = setInterval(() => {
        var random = Math.floor(Math.random() *10)
        style_tag7.innerHTML = `
        .item_list li:nth-child(${random}):after {
            content: url(assets/checked.png);
            position: absolute;
            left: 2%;
            margin-top: -1px;
        }`
        document.body.appendChild(style_tag7)
    }, 2000);

    var eight = setInterval(() => {
        var random = Math.floor(Math.random() *10)
        style_tag8.innerHTML = `
        .item_list li:nth-child(${random}):after {
            content: url(assets/checked.png);
            position: absolute;
            left: 2%;
            margin-top: -1px;
        }`
        document.body.appendChild(style_tag8)
    }, 1000);

    var nine = setInterval(() => {
        var random = Math.floor(Math.random() *10)
        style_tag9.innerHTML = `
        .item_list li:nth-child(${random}):after {
            content: url(assets/checked.png);
            position: absolute;
            left: 2%;
            margin-top: -1px;
        }`
        document.body.appendChild(style_tag9)
    }, 3000);
    
}
checked()