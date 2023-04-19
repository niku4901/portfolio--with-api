class home extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `<div class="container">
        <section class="home" id="home">
    <div class="social">
        <a href="https://github.com/niku4901"><i class='bx bxl-github'></i></a>
        <a href="https://instagram.com/kirodiwalniku74?igshid=ZDdkNTZiNTM="><i class='bx bxl-instagram'></i></a>
        <a href=#><i class='bx bxl-facebook'></i></a>
    </div>
    <div class="home-img">
        <img src="images/PHOTO1.jpg" alt="">
    </div>
    <div class="home-text">
        <span>Hello, I'm</span>
        <h1>NIKITA KUMAWAT</h1>
        <h2>Frontend Developer</h2>

    </div>
</section>
           
        </div>`

    }
}


customElements.define('app-home', home);