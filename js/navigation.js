// Mobile Menu
jQuery( document ).ready(
	function() {
		jQuery( '.menu-toggle' ).click(
			function() {
				jQuery( this ).parent().children( '.wrap, .menu-items' ).fadeToggle();
				jQuery( this ).toggleClass( 'active' );
			}
		);
	}
);