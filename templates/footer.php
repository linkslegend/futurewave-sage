<footer class="content-info" role="contentinfo">
  <div class="container">
    <?php dynamic_sidebar('sidebar-footer'); ?>
    <?php if ( is_front_page() ) {?>

		<div class="col-md-12"><?php dynamic_sidebar( 'plz-contact' ); ?></div>

	<?php } ?>
  </div>
</footer>

<div class="footer-copyright">
	<div class="container">
  &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?> - <a href="/impressum" title="impressum">Impressum</a> - <a href="/datenschutz" title="Datenschutz">Datenschutz</a> - <a href="/agb" title="allgemeine geschäftsbedingungen">AGB</a>
	</div>
</div>

<?php wp_footer(); ?>

<p id="back-top">
	<a href="#top"><span><i class="fa fa-arrow-up"></i></span></a>
</p>


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
