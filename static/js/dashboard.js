var $avatar 		= $('#submenu-avatar'),
	$subMenuAvatar	= $('.HeaderNav-subList')


//mostramos el formulario de denucias
function toggleSubMenu() {
	$subMenuAvatar.slideToggle()
	return false
}

$avatar.on('click', toggleSubMenu)
