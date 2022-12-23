import { getUserInfo } from "../localStorage";

const HomeScreen = {
    after_render: ()=>{

        document.getElementById('snake-game')
        .addEventListener('click',()=>{
            document.location.hash='/snakegame';
        });

        document.getElementById('tic-tac-toe-game')
        .addEventListener('click',()=>{
            document.location.hash='/tictactoe';
        });

    },
    render: ()=>{
        const data = getUserInfo();
        return `
        <nav class="navbar" data-navbar>
                <ul class="navbar-list">

                    <li class="navbar-item">
                        <a href="#home" class="navbar-link" data-nav-link>home</a>
                    </li>

                    <li class="navbar-item">
                        <a href="#tournament" class="navbar-link" data-nav-link>tournament</a>
                    </li>

                    <li class="navbar-item">
                        <a href="#games" class="navbar-link" data-nav-link>games</a>
                    </li>

                    <li class="navbar-item">
                        ${data.name
                            ? `<a href="/#/profile" class="navbar-link" data-nav-link>contact</a>`
                            : `<a href="#home" class="navbar-link" data-nav-link>contact</a>`
                        }
                        
                    </li>

                </ul>
        </nav>
        <div class="hero has-before" id="home">
            <div class="container">

            <p class="section-subtitle">Enjoy The Games</p>

            <h1 class="h1 title hero-title">Epic Games Made For <br> True Gamers!</h1>

            <a href="#" class="btn" data-btn>Join With Us</a>

            <div class="hero-banner">
                <img src="../../images/img_frontend/hero-banner.png" alt="hero banner">
            </div>

            </div>  
        </div>
        <section class="section upcoming" aria-labelledby="upcoming-label" id="tournament">
            <div class="container">

                <p class="section-subtitle" id="upcoming-label">
                    Upcoming Matches
                </p>

                <h2 class="h2 section-title">
                    Battles Extreme <br> Masters <span class="span">Tournament</span>
                </h2>

                <p class="section-text">
                    Our success in creating business solutions is due in large part to our talented and highly committed team.
                </p>

                <ol class="upcoming-list">

                    <li class="upcoming-item">

                    <div class="upcoming-card left has-before" data-reveal="left">

                        <img src="../../images/img_frontend/team-logo-1.png" width="86" height="81" loading="lazy"
                        alt="Purple Death Cadets" class="card-banner">

                        <h3 class="h3 card-title">Purple Death Cadets</h3>

                    </div>

                    <div class="upcoming-time">
                        <time class="time" datetime="10:00">10:00</time>

                        <time class="date" datetime="2022-05-25">25TH May 2024</time>

                        <div class="social-wrapper">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>

                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitch"></ion-icon>
                        </a>
                        </div>
                    </div>

                    <div class="upcoming-card right has-before" data-reveal="right">

                        <img src="../../images/img_frontend/team-logo-2.png" width="86" height="81" loading="lazy"
                        alt="Trigger Brain Squad" class="card-banner">

                        <h3 class="h3 card-title">Trigger Brain Squad</h3>


                    </div>

                    </li>

                    <li class="upcoming-item">

                    <div class="upcoming-card left has-before" data-reveal="left">

                        <img src="../../images/img_frontend/team-logo-3.png" width="86" height="81" loading="lazy"
                        alt="The Black Hat Hackers" class="card-banner">

                        <h3 class="h3 card-title">The Black Hat Hackers</h3>


                    </div>

                    <div class="upcoming-time">
                        <time class="time" datetime="12:30">12:30</time>

                        <time class="date" datetime="2024-01-10">10TH Jan 2024</time>

                        <div class="social-wrapper">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>

                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitch"></ion-icon>
                        </a>
                        </div>
                    </div>

                    <div class="upcoming-card right has-before" data-reveal="right">

                        <img src="../../images/img_frontend/team-logo-4.png" width="86" height="81" loading="lazy"
                        alt="Your Worst Nightmare" class="card-banner">

                        <h3 class="h3 card-title">Your Worst Nightmare</h3>


                    </div>

                    </li>

                    <li class="upcoming-item">

                    <div class="upcoming-card left has-before" data-reveal="left">

                        <img src="../../images/img_frontend/team-logo-5.png" width="86" height="81" loading="lazy"
                        alt="Witches And Quizards" class="card-banner">

                        <h3 class="h3 card-title">Witches And Quizards</h3>


                    </div>

                    <div class="upcoming-time">
                        <time class="time" datetime="04:20">04:20</time>

                        <time class="date" datetime="2024-12-15">15th Dec 2024</time>

                        <div class="social-wrapper">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>

                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitch"></ion-icon>
                        </a>
                        </div>
                    </div>

                    <div class="upcoming-card right has-before" data-reveal="right">

                        <img src="../../images/img_frontend/team-logo-6.png" width="86" height="81" loading="lazy"
                        alt="Resting Bitch Faces" class="card-banner">

                        <h3 class="h3 card-title">Resting Bitch Faces</h3>


                    </div>

                    </li>

                </ol>

            </div>
        </section>
        <section  id="games">
            <div class="container">

                <p class="section-subtitle" >What's On Our Mind</p>

                <h2 class="section-title">
                    games And <span class="span">Headlines</span>
                </h2>

                <p class="section-text">
                    Our success in creating business solutions is due in large part to our talented and highly committed team.
                </p>

                <div id="all_gaming_card">
                    <ul class="games-list">
                        <li>
                            <div class="games-card">

                                <a href="/#/snakegame"><img src="../../images/best-1.png" loading="lazy"
                                alt="Innovative Business All Over The World." class="img-cover"></a>

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="/#/snakegame" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="games-card">

                                <a href="/#/tictactoe"><img src="../../images/tic-tac-toe.png" loading="lazy"
                                alt="TicTacToe."></a>

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="/#/tictactoe" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="games-card">

                                <img src="../../images/img_frontend/news-1.jpg" loading="lazy"
                                alt="Innovative Business All Over The World." class="img-cover">

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="#" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>

                    </ul>
                </div> <br>
                <div id="all_gaming_card">
                    <ul class="games-list">
                        <li>
                            <div class="games-card">

                                <img src="../../images/img_frontend/news-2.jpg" loading="lazy"
                                alt="Innovative Business All Over The World." class="img-cover">

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="#" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="games-card">

                                <img src="../../images/img_frontend/news-3.jpg" loading="lazy"
                                alt="Innovative Business All Over The World." class="img-cover">

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="#" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>
                        
                        <li>
                            <div class="games-card">

                                <img src="../../images/img_frontend/news-1.jpg" loading="lazy"
                                alt="Innovative Business All Over The World." class="img-cover">

                                <div class="card-content">

                                    <ul class="card-meta-list">

                                        <li class="card-meta-item">
                                            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                                            <time class="card-meta-text" datetime="2022-01-01">Jan 01 2022</time>
                                        </li>

                                        <li class="card-meta-item">
                                            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                            <p class="card-meta-text">Elliot Alderson</p>
                                        </li>

                                    </ul>

                                    <h3 class="h3">
                                        <a href="#" class="card-title">Innovative Business All Over The World.</a>
                                    </h3>

                                    <p class="card-text">
                                        Financial experts support or help you to to find out which way you can raise your funds more...
                                    </p>

                                    <div class="div-play-btn">
                                        <button class="btn-play"><a href="#" class="black-font">Play Game</a></button>
                                    </div>
                                    

                                </div>

                            </div>
                        </li>

                    </ul>
                </div>

            </div>
      </section>
        `;
    },
};

export default HomeScreen;