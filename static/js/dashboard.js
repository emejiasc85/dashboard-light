var $avatar 		= $('#submenu-avatar'),
	$subMenuAvatar 	= $('.HeaderNav-subList'),
	$menuItem 		= $('.MainMenu-item'),
	$MainMenu 		= $('.MainMenu'),
	$dropMainMenu	= $('.Header-DropBottom')


//mostramos el formulario de denucias
function toggleSubMenu() {
	$subMenuAvatar.slideToggle('fast')
	return false
}

function toggleMainMenu() {
	$MainMenu.slideToggle('fast', 'swing')
	return false
}



//mostramos los submenus del menu principal
function viewSubMenu(){
	 $(this).children('.MainMenu-subList').toggle('fast', 'swing');
}


$('.MainMenu-subList').on('click', function (event) {
    event.stopPropagation();
});

$menuItem.on('click', viewSubMenu)
$avatar.on('click', toggleSubMenu)
$dropMainMenu.on('click', toggleMainMenu)


