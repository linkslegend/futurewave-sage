<?php use Roots\Sage\Nav\NavWalker; ?>

<!-- Call to action Top -->
<div id="myAlert" class="alert hidden" data-alert="alert" >
    <a class="close in" data-dismiss="alert" href="#">&times;</a>
<div class="alert-content"><a href="http://skf.de/dichtungen">SKF Dichtungen</a> Individuelle Dichtungsl&ouml;sungen f&uuml;r optimale Systemleistung</div>
</div>

<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
	<div class="row">
	  <div id="header-wrap">
  		<div class="col-md-4">
  			<div id="logo" class="wow fadeInLeft" data-wow-delay="0.4s">
<a class="navbar-brand" href="<?= esc_url(home_url('/')); ?>">
<img class="standard" src="/wp-content/uploads/<?php $options = get_option('futurewave_theme_options'); echo do_shortcode(''.$options['logo1'].''); ?>" title="<?php bloginfo('name'); ?>" alt="<?php bloginfo('name'); ?>" itemprop="logo">
</a>
  </div>
  		</div><!-- end class col-md-4 -->
		<div class="col-md-8">      
    		<div class="navbar-header-intermac">
      <button type="button" class="navbar-toggle collapsed tcon tcon-menu--xcross" data-toggle="collapse" data-target=".navbar-collapse">
	  	<span class="tcon-menu__lines" aria-hidden="true"></span>
	  	<span class="tcon-visuallyhidden sr-only"><?= __('Toggle navigation', 'sage'); ?></span>
	  </button>
    		</div>

<div id="menu">
    <nav class="collapse navbar-collapse" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new NavWalker(), 'menu_class' => 'nav navbar-nav']);
      endif;
      ?>
    </nav>
</div><!-- end id menu -->
</div><!-- end class col-md-8 -->
</div><!-- end header-wrap id -->
</div><!-- end class row -->
</div><!-- end class container -->
  
</header>

<div id="navigation-mobile">
      <nav class="collapse navbar-collapse" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
        <?php
          if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new NavWalker(), 'menu_class' => 'nav mobile']);
          endif;
        ?>
      </nav>
</div>
