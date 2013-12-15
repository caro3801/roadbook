module.exports="" +
    "<a href='/#home'>home</a>" +
    "<div>Mon sac à dos</div>" +
    "<ul>" +
    "{{~ it.items : item}}" +
    "<li>{{=item.title}} <button class='decrement' data-roadbook-id='{{=item.id}}'>-</button>{{=item.quantity}} <button class='increment'data-roadbook-id='{{=item.id}}'>+</button> * {{=item.uprice}} : {{=item.price}} euro <button class='trashMe' data-roadbook-id='{{=item.id}}'>suppr</button></li>" +
    "{{~}}" +
    "</ul>" +
    "<p>prix total : {{=it.basketTotalPrice}}</p>";