<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php the_title( sprintf( '<h1 class="underline-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>


	<div class="wysiwyg max-w-wysiwyg mx-auto px-5 pb-12 lg:pb-24">
		<?php the_content(); ?>

		<?php
			wp_link_pages(
				array(
					'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'cineguimbi' ) . '</span>',
					'after'       => '</div>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
					'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'cineguimbi' ) . ' </span>%',
					'separator'   => '<span class="screen-reader-text">, </span>',
				)
			);
		?>
	</div>

</article>
