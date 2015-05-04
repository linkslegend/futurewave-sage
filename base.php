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
    
<!-- Script to pull images -->
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
    

<!-- Frontpage Slider --> 
<?php if ( is_home() || is_single() ) {?>
<section id="slider-header" class="pageimage-header pageimage" style="background-image: url(<?php echo $image_test ?>);">
<div class="pageimage-overlay"></div>
<div class="container pageimage-content wow fadeInUp" data-wow-delay="0.7s"><h1>Fachartikel</h1></div>
</section>

<?php } elseif ( is_search() ) {  ?>
<section id="slider-header" class="pageimage-header pageimage" style="background-image: url(<?php echo $image_test ?>);">
<div class="pageimage-overlay"></div>
<div class="container pageimage-content wow fadeInUp" data-wow-delay="0.7s"><h1>Suche: <?php echo get_search_query(); ?></h1></div>
</section>

<?php } elseif ( is_archive() ) {  ?>
<section id="slider-header" class="pageimage-header pageimage" style="background-image: url(<?php echo $image_test ?>);">
<div class="pageimage-overlay"></div>
<div class="container pageimage-content wow fadeInUp" data-wow-delay="0.7s"><h1>Fachbegriff: <?php single_tag_title(); ?></h1></div>
</section>

<?php } ?>
<section id="slider-header">
	<div class="bannercontainer">
		<?php putRevSlider("slider2","homepage") ?>
</div>
</section>
   
   
<!-- main content -->    
    <div class="wrap overlap container" role="document">
      <div class="content row">


<?php if ( is_front_page() && is_home() ) {?>
      <main class="main js-masonry is-front-page-and-home" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
        <div class="grid-sizer"></div>

<?php } elseif ( is_front_page() ) {  ?>
      <main class="main js-masonry is-front-page" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
        <div class="grid-sizer"></div>

<?php } elseif ( is_home() ) { ?>
	<div class="search"><div class="innersearch">
		<?php get_search_form(); ?>
		<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
	</div></div>
      <main class="main js-masonry is-home" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
        <div class="grid-sizer"></div>
        
<?php } elseif ( is_search() ) { ?>
	<div class="search"><div class="innersearch">
		<?php get_search_form(); ?>
		<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
	</div></div>
      <main class="main js-masonry is-search" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
        <div class="grid-sizer"></div>
        
<?php } elseif ( is_archive() ) { ?>
	<div class="search"><div class="innersearch">
		<?php get_search_form(); ?>
		<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
	</div></div>
      <main class="main js-masonry is-archive" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
        <div class="grid-sizer"></div>

<?php } elseif ( is_single() ) { ?>
	<div class="search"><div class="innersearch">
		<?php get_search_form(); ?>
		<div class="contact-form-button"><button class="btn btn-default Modal Popup search-submit" href="#myModal" data-toggle="modal"><i class="fa fa-envelope-o"></i><div class="test">Kontaktformular</div></button></div>
	</div></div>
      <main class="main blog single" id="container-blog" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">


<?php } elseif ( is_author() ) { ?>
      <main class="main js-masonry author" id="container" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
<div id="author" itemscope itemtype="http://schema.org/Person">
      <?php $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author)); ?>
      	  <h2 class="author-about" itemprop="name"><?php echo $curauth->nickname; ?></h2>
	  <div class="auhtor-image"><?php echo get_avatar( get_the_author_email(), '100' ); ?></div>
  <div class="author-content">
	  <div class="author-website" itemprop="url"><strong>Website:</strong> <a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></div>
	  <div class="author-about" itemprop="image"><strong>&Uuml;ber:</strong> <?php echo $curauth->user_description; ?></div>
	<!-- Social Media Accounts-->
	 <div class="social-media-accounts">
	 <h3>Social Media Accounts</h3>
      <div class="author-google"><a href="<?php echo $curauth->googleplus; ?>" target="_blank" rel="author"><i class="fa fa-google-plus"></i></a></div>
      <div class="author-twitter"><a href="<?php echo $curauth->twitter; ?>" target="_blank"><i class="fa fa-twitter"></i></a></div>
      <div class="author-facebook"><a href="<?php echo $curauth->facebook; ?>" target="_blank"><i class="fa fa-facebook"></i></a></div>
      <div class="author-linkedin"><a href="<?php echo $curauth->ts_fab_linkedin; ?>" target="_blank"><i class="fa fa-linkedin"></i></a></div>
      <div class="author-youtube"><a href="<?php echo $curauth->ts_fab_youtube; ?>" target="_blank"><i class="fa fa-youtube"></i></a></div>
	 </div>
  </div>     
      
    <!-- <h2>Ver&ouml;ffentlichungen:</h2> -->
</div>
        <div class="grid-sizer"></div>

<?php } else { ?>
      <main class="main else" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/WebPageElement">
<?php } ?>

          <?php include Wrapper\template_path(); ?>
          
</main><!-- /.main -->
        
        
        
        
        
        
        <?php if (Config\display_sidebar()) : ?>
          <aside class="sidebar" role="complementary" itemscope itemtype="http://schema.org/WPSideBar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
      </div><!-- /.content -->
    </div><!-- /.wrap -->
</div>
    <?php
      get_template_part('templates/footer');
      wp_footer();
    ?>
  </body>
</html>
