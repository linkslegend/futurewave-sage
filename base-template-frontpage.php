<?php

use Roots\Sage\Config;
use Roots\Sage\Wrapper;

?>

<?php get_template_part('templates/head'); ?>
  <body <?php body_class(); ?>>
    <!--[if lt IE 9]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>
    
<div id="main" class="animation-enabled">
<!-- Frontpage Slider --> 
<section id="slider-header">
	<div class="bannercontainer">
		<?php putRevSlider("slider2","homepage") ?>
	</div>	
</section>


<!-- main content -->    
 <div class="wrap" role="document">
 
 
<div class="search container"><div class="innersearch front">
<?php get_search_form(); ?>
<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
</div>


</div>
 
 
 
        <div class="main-cont container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
          <?php include Wrapper\template_path(); ?>
        </div><!-- /.main -->
        <?php if (Config\display_sidebar()) : ?>
      <aside class="sidebar" role="complementary" role="complementary" itemscope itemtype="http://schema.org/WPSideBar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
    </div><!-- /.wrap -->
</div>    
    <?php get_template_part('templates/footer'); wp_footer(); ?>
  </body>
</html>
