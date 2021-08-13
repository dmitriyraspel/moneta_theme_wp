<?php
/**
 * Displays site header
 *
 * @package moneta
 *
 */
?>
<header class="site-header">

<?php get_template_part('template-parts/header/exchange'); ?>

<div class="container header-inner">
    
    <?php
	/* Show site logo ---------------------------------------------------- */
	if (has_custom_logo()) : ?>
		<div class="site-logo"><?php the_custom_logo(); ?></div>
	<?php endif; ?>

    <div class="header-inner-right">
    <ul class="header-links">
    <li class="not-mobile">
        <a href="https://goldtech.market/my-account/" class="ico-account"></a>
    </li>
    </ul>
</div>
</div>

</header>