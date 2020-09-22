const items =[
    {item:"Milk",cost:5,id:0},
    {item:"Apple",cost:1,id:1},
    {item:"Bread",cost:2,id:2},
    {item:"Butter",cost:3,id:3}
];

items.forEach(function(ele){
    console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    document.body.appendChild(div);
})