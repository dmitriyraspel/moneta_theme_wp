<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package moneta
 */

?>
<footer id="colophon" class="site-footer">
		<div class="container footer-inner">
		
			<div class="left footer-title">
               GOLDTECH.MARKET 2021 ©
            </div>
			<div class="center">

			<?php
			if ( has_nav_menu( 'social' ) ) : 
			get_template_part( 'template-parts/social-nav' );
			endif; 
			?>
	
            </div>
			<div class="right">
				<ul>
					<li><a href="https://goldtech.market/refund_returns/">Реквизиты и документы компании</a></li>
					<li><a href="https://goldtech.market/privacy-policy/">Политика конфиденциальности</a></li>
				</ul>
            </div>
		</div><!-- /.footer-inner -->
	</footer><!-- .site-footer -->

</div><!-- #page -->

<?php get_template_part( 'template-parts/fix-menu' ); ?>

<?php wp_footer(); ?>

</body>
</html>
