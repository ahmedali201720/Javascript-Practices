const items =[
    {item:"Milk",cost:5,id:0},
    {item:"Apple",cost:1,id:1},
    {item:"Bread",cost:2,id:2},
    {item:"Butter",cost:3,id:3}
];
const cart = {};
items.forEach(function(ele){
    //console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener('click',function(){
        let namer = ele.item.toLowerCase();
        console.log(namer);
        if(!cart[namer] ){
        cart[namer] ={
            name:ele.item,
            price:ele.cost,
            qty:1,
            subtotal:function(){
                return this.price * this.qty
            }
        }}else{
            cart[namer].qty++;
        }
    })
    
    
    
    
    document.body.appendChild(div);
})