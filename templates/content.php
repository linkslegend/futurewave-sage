<?php if ( is_single() ) {?>
<article <?php post_class(); ?> itemscope itemtype="http://schema.org/BlogPosting">
<div class="post-thumb" itemprop="image"><?php if ( has_post_thumbnail() ) { the_post_thumbnail('frontpage-thumb'); } ?></div>
  <header>
    <h2 class="entry-title" itemprop="name headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <div class="entry-meta" itemprop="author" itemscope itemptype="http://schema.org/Person"><?php get_template_part('templates/entry-meta'); ?></div>
  </header>
  <div class="entry-summary" itemprop="articleBody">
    <?php the_excerpt( $more_link_text ); ?>
  </div>
</article>

<?php } elseif ( is_author() ) {  ?>
<article <?php post_class('item span4'); ?> itemscope itemtype="http://schema.org/BlogPosting">

<a href="<?php the_permalink(); ?>"><div class="post-thumb" itemprop="image"><?php if ( has_post_thumbnail() ) { the_post_thumbnail('frontpage-thumb');} ?></div></a>
  <header>
    <h2 class="entry-title" itemprop="name headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <div class="entry-meta" itemprop="author" itemscope itemptype="http://schema.org/Person"><?php get_template_part('templates/entry-meta'); ?></div>
  </header>
  <div class="entry-summary" itemprop="articleBody">
    <?php the_excerpt( $more_link_text ); ?>
  </div>
</article>
 
<?php } else { ?>
<article <?php post_class('item span4'); ?> itemscope itemtype="http://schema.org/BlogPosting">

<a href="<?php the_permalink(); ?>"><div class="post-thumb" itemprop="image"><?php if ( has_post_thumbnail() ) { the_post_thumbnail('frontpage-thumb'); } ?></div></a>
  <header>
    <h2 class="entry-title" itemprop="name headline"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <div class="entry-meta" itemprop="author" itemscope itemptype="http://schema.org/Person"><?php get_template_part('templates/entry-meta'); ?></div>
  </header>
  <div class="entry-summary" itemprop="articleBody">
    <?php the_excerpt( $more_link_text ); ?>
  </div>
</article>
<!-- <div class="separator"></div> -->

<?php } ?>
