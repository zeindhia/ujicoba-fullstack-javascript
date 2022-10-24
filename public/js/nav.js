const createNav= ()=>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML=`<div class="nav">
    <img src="./img/acc logo.jpg" class="brand-logo" alt="">
    <div class="nav-item">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><i class='bx bxs-user'></i></a>
        <a href="#"><i class='bx bxs-cart'></i></a>
    </div>
</div>
<ul class="link-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#" class="link">women</a></li>
    <li class="link-item"><a href="#" class="link">men</a></li>
    <li class="link-item"><a href="#" class="link">kids</a></li>
    <li class="link-item"><a href="#" class="link">accecories</a></li>
</ul>
     
    `;
}

createNav()