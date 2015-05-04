<span class="time">
<time class="published" datetime="<?= get_the_time('c'); ?>"><?= get_the_date(); ?></time>
</span>

<span class="meta-sep"> | </span>

<span class="author" rel="author">
<?php echo __('Veröffentlicht von ', 'sage'); ?>
<span itemprop="name"><?= get_the_author(); ?></span></span></a>
