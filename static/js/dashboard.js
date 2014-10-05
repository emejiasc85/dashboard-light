var $avatar 		= $('#submenu-avatar'),
	$subMenuAvatar 	= $('.HeaderNav-subList'),
	$menuItem 		= $('.MainMenu-item'),
	$MainMenu 		= $('.MainMenu'),
	$dropMainMenu	= $('.Header-DropBottom'),
	$dropDown		= $('#dropDown'),
	$dropDownList	= $('#dropDownList')



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

//mostramos los drop downs
function dropDown(){
	$(this).children('#dropDownList').toggle('fast');
}

$menuItem.on('click', viewSubMenu)
$avatar.on('click', toggleSubMenu)
$dropMainMenu.on('click', toggleMainMenu)
$dropDown.on('click', dropDown)


