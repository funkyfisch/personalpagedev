<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="index.html">John Gkikas - My Blog </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Page Header -->
    <!-- Set your background image for this header on the line below. -->
        <header class="intro-header" v-bind:style="{ 'background-image': 'url('+ bannerindex+ ')'}">
        <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-1"></div>
                <div class="col-lg-8 col-md-10">
                    <div class="site-heading">
                        <h1 id="heading">My personal tech blog</h1>
                        <hr class="small">
                        <span id="heading"class="subheading">for fellow tinkerers and programmers</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="post-preview">
                    <a href="post.html">
                        <h2 class="post-title">
                            Remote code deployment with SSH and Platform.io
                        </h2>
                        <h3 class="post-subtitle">
                            On a Raspberry Pi + microcontrollers
                        </h3>
                    </a>
                    <p class="post-meta">Initially posted on August 14, 2017</p>
                </div>
                <hr>
                <!-- Pager -->
                <ul class="pager">
                    <li class="next">
                        <a href="#">Older Posts &rarr;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <hr>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                    <ul class="list-inline text-center">
                        <li>
                            <a href="https://www.linkedin.com/in/ioannis-gkikas-0b5a6010b/">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/funkyfisch">
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p class="copyright text-muted"></p>
                </div>
            </div>
        </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'BlogHome',
  data () {
    return {
      props: [],
      methods: {},
      bannerindex: require('../../assets/blog/img/bannerindex.jpg')
    }
  }
}
</script>

<style>
  body {
    font-family: 'Lora', 'Times New Roman', serif;
    font-size: 20px;
    color: #333333;
  }
  p {
    line-height: 1.5;
    margin: 30px 0;
    text-align: justify;
  }
  p a {
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 800;
  }
  a {
    color: #333333;
  }
  a:hover,
  a:focus {
    color: #0085A1;
  }
  a img:hover,
  a img:focus {
    cursor: zoom-in;
  }
  blockquote {
    color: #777777;
    font-style: italic;
  }
  hr.small {
    max-width: 100px;
    margin: 15px auto;
    border-width: 4px;
    border-color: white;
  }
  .navbar-custom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  .navbar-custom .navbar-brand {
    font-weight: 800;
  }
  .navbar-custom .navbar-header .navbar-toggle {
    color: #777777;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 12px;
  }
  .navbar-custom .nav li a {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  @media only screen and (min-width: 768px) {
    .navbar-custom {
      background: transparent;
      border-bottom: 1px solid transparent;
    }
    .navbar-custom .navbar-brand {
      color: white;
      padding: 20px;
    }
    .navbar-custom .navbar-brand:hover,
    .navbar-custom .navbar-brand:focus {
      color: rgba(255, 255, 255, 0.8);
    }
    .navbar-custom .nav li a {
      color: white;
      padding: 20px;
    }
    .navbar-custom .nav li a:hover,
    .navbar-custom .nav li a:focus {
      color: rgba(255, 255, 255, 0.8);
    }
    .navbar-custom .nav li ul.dropdown-menu a {
      color: #333333;
    }
    .navbar-custom .nav li ul.dropdown-menu a:hover,
    .navbar-custom .nav li ul.dropdown-menu a:focus {
      color: #0085A1;
    }
  }
  @media only screen and (min-width: 1170px) {
    .navbar-custom {
      -webkit-transition: background-color 0.3s;
      -moz-transition: background-color 0.3s;
      transition: background-color 0.3s;
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .navbar-custom.is-fixed {
      /* when the user scrolls down, we hide the header right above the viewport */
      position: fixed;
      top: -61px;
      background-color: rgba(255, 255, 255, 0.9);
      border-bottom: 1px solid #f2f2f2;
      -webkit-transition: -webkit-transform 0.3s;
      -moz-transition: -moz-transform 0.3s;
      transition: transform 0.3s;
    }
    .navbar-custom.is-fixed .navbar-brand {
      color: #333333;
    }
    .navbar-custom.is-fixed .navbar-brand:hover,
    .navbar-custom.is-fixed .navbar-brand:focus {
      color: #0085A1;
    }
    .navbar-custom.is-fixed .nav li a {
      color: #333333;
    }
    .navbar-custom.is-fixed .nav li a:hover,
    .navbar-custom.is-fixed .nav li a:focus {
      color: #0085A1;
    }
    .navbar-custom.is-visible {
      /* if the user changes the scrolling direction, we show the header */
      -webkit-transform: translate3d(0, 100%, 0);
      -moz-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      -o-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
  .intro-header {
    background-color: #777777;
    background: no-repeat center center;
    background-attachment: scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    margin-bottom: 50px;
  }
  .intro-header .site-heading,
  .intro-header .post-heading,
  .intro-header .page-heading {
    padding: 100px 0 50px;
    color: white;
  }
  @media only screen and (min-width: 768px) {
    .intro-header .site-heading,
    .intro-header .post-heading,
    .intro-header .page-heading {
      padding: 150px 0;
    }
  }
  .intro-header .site-heading,
  .intro-header .page-heading {
    text-align: center;
  }
  .intro-header .site-heading h1,
  .intro-header .page-heading h1 {
    margin-top: 0;
    font-size: 50px;
  }
  .intro-header .site-heading .subheading,
  .intro-header .page-heading .subheading {
    font-size: 24px;
    line-height: 1.1;
    display: block;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 10px 0 0;
  }
  @media only screen and (min-width: 768px) {
    .intro-header .site-heading h1,
    .intro-header .page-heading h1 {
      font-size: 80px;
    }
  }
  .intro-header .post-heading h1 {
    font-size: 35px;
  }
  .intro-header .post-heading .subheading,
  .intro-header .post-heading .meta {
    line-height: 1.1;
    display: block;
  }
  .intro-header .post-heading .subheading {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 24px;
    margin: 10px 0 30px;
    font-weight: 600;
  }
  .intro-header .post-heading .meta {
    font-family: 'Lora', 'Times New Roman', serif;
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
  }
  .intro-header .post-heading .meta a {
    color: white;
  }
  @media only screen and (min-width: 768px) {
    .intro-header .post-heading h1 {
      font-size: 55px;
    }
    .intro-header .post-heading .subheading {
      font-size: 30px;
    }
  }
  .post-preview > a {
    color: #333333;
  }
  .post-preview > a:hover,
  .post-preview > a:focus {
    text-decoration: none;
    color: #0085A1;
  }
  .post-preview > a > .post-title {
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .post-preview > a > .post-subtitle {
    margin: 0;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .post-preview > .post-meta {
    color: #777777;
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
  }
  .post-preview > .post-meta > a {
    text-decoration: none;
    color: #333333;
  }
  .post-preview > .post-meta > a:hover,
  .post-preview > .post-meta > a:focus {
    color: #0085A1;
    text-decoration: underline;
  }
  @media only screen and (min-width: 768px) {
    .post-preview > a > .post-title {
      font-size: 36px;
    }
  }
  .section-heading {
    font-size: 36px;
    margin-top: 60px;
    font-weight: 700;
  }
  .caption {
    text-align: center;
    font-size: 14px;
    padding: 10px;
    font-style: italic;
    margin: 0;
    display: block;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  footer {
    padding: 50px 0 65px;
  }
  footer .list-inline {
    margin: 0;
    padding: 0;
  }
  footer .copyright {
    font-size: 14px;
    text-align: center;
    margin-bottom: 0;
  }
  .floating-label-form-group {
    font-size: 14px;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #eeeeee;
  }
  .floating-label-form-group input,
  .floating-label-form-group textarea {
    z-index: 1;
    position: relative;
    padding-right: 0;
    padding-left: 0;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    background: none;
    box-shadow: none !important;
    resize: none;
  }
  .floating-label-form-group label {
    display: block;
    z-index: 0;
    position: relative;
    top: 2em;
    margin: 0;
    font-size: 0.85em;
    line-height: 1.764705882em;
    vertical-align: middle;
    vertical-align: baseline;
    opacity: 0;
    -webkit-transition: top 0.3s ease,opacity 0.3s ease;
    -moz-transition: top 0.3s ease,opacity 0.3s ease;
    -ms-transition: top 0.3s ease,opacity 0.3s ease;
    transition: top 0.3s ease,opacity 0.3s ease;
  }
  .floating-label-form-group::not(:first-child) {
    padding-left: 14px;
    border-left: 1px solid #eeeeee;
  }
  .floating-label-form-group-with-value label {
    top: 0;
    opacity: 1;
  }
  .floating-label-form-group-with-focus label {
    color: #0085A1;
  }
  form .row:first-child .floating-label-form-group {
    border-top: 1px solid #eeeeee;
  }
  .btn {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    border-radius: 0;
    padding: 15px 25px;
  }
  .btn-lg {
    font-size: 16px;
    padding: 25px 35px;
  }
  .btn-default:hover,
  .btn-default:focus {
    background-color: #0085A1;
    border: 1px solid #0085A1;
    color: white;
  }
  .pager {
    margin: 20px 0 0;
  }
  .pager li > a,
  .pager li > span {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
    padding: 15px 25px;
    background-color: white;
    border-radius: 0;
  }
  .pager li > a:hover,
  .pager li > a:focus {
    color: white;
    background-color: #0085A1;
    border: 1px solid #0085A1;
  }
  .pager .disabled > a,
  .pager .disabled > a:hover,
  .pager .disabled > a:focus,
  .pager .disabled > span {
    color: #777777;
    background-color: #333333;
    cursor: not-allowed;
  }
  ::-moz-selection {
    color: white;
    text-shadow: none;
    background: #0085A1;
  }
  ::selection {
    color: white;
    text-shadow: none;
    background: #0085A1;
  }
  img::selection {
    color: white;
    background: transparent;
  }
  img::-moz-selection {
    color: white;
    background: transparent;
  }
  body {
    -webkit-tap-highlight-color: #0085A1;
  }
</style>
