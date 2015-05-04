<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?> itemscope itemtype="http://schema.org/BlogPosting">

<div class="post-thumb" itemprop="image">
	<?php if ( has_post_thumbnail() ) { the_post_thumbnail('single-post-thumb'); } ?>
</div>

    <header>
      <h1 class="entry-title" itemprop="name headline"><?php the_title(); ?></h1>
    <div class="entry-meta" itemprop="author" itemscope itemptype="http://schema.org/Person"><?php get_template_part('templates/entry-meta'); ?></div>
    </header>
    <div class="entry-content" itemprop="articleBody">
      <?php the_content(); ?>
    </div>
 <!--   <footer>
      <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
    </footer> -->
    <?php comments_template('/templates/comments.php'); ?>
  </article>
<?php endwhile; ?>