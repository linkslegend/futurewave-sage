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



<?php 
$image_test = get_post_meta($post->ID, 'banner', true);
if ($image_test == '' ){   
    $image_test = 'https://s3-eu-west-1.amazonaws.com/bilder-dichtungen/skf-slider-' . rand(1,19) . '.jpg'; 
}else{  
    $image_test = get_post_meta($post->ID, 'banner', true);
}

$image_text = get_post_meta($post->ID, 'image_text', true);
if ($image_text == ''){
	$image_text = get_the_title($ID);
}else{
	$image_text = get_post_meta($post->ID, 'image_text', true);
}
?>
<section id="slider-header" class="pageimage-header pageimage" style="background-image: url(<?php echo $image_test ?>);">
<div class="pageimage-overlay"></div>
<div class="container pageimage-content wow fadeInUp" data-wow-delay="0.7s"><h1><?php echo $image_text ?></h1></div>
</section>




<!-- main content -->    
 <div class="wrap overlap container" role="document">
 
 
<div class="search container"><div class="innersearch">
<?php get_search_form(); ?>
<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
</div>


<div aria-hidden="true" role="dialog" tabindex="-1" id="myModal" class="modal fade testclass">
            <div class="modal-dialog">
                <div class="modal-content">
                        <button aria-hidden="true" data-dismiss="modal" class="close contact-form-close" type="button">x</button>
                    
                    <div class="modal-body">
	<div class="container-contact-form">
	  <div class="row-contact-form">		
		<div class="contact-form"><?php $options = get_option('futurewave_theme_options'); echo do_shortcode(''.$options['headercontact'].''); ?></div>
	  </div>
	</div>	

                    </div>
                </div> <!-- /.modal-content -->
            </div> <!-- /.modal-dialog -->
</div>
<!-- End modal -->
</div>
 
 
 
        <div class="main col-sm-8 page" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
          <?php include Wrapper\template_path(); ?>
        </div><!-- /.main -->
        <?php if (Config\display_sidebar()) : ?>
      <aside class="sidebar col-sm-4" role="complementary" role="complementary" itemscope itemtype="http://schema.org/WPSideBar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
    </div><!-- /.wrap -->
</div>    
    <?php get_template_part('templates/footer'); wp_footer(); ?>
  </body>
</html>
