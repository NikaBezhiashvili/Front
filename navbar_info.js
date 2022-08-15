var navbar_info = document.getElementById('coretest')
var navigation_array = ['navbar_krn', 'navbar_pmc', 'navbar_percent', 'navbar_card', 'navbar_sales', 'navbar_base']

for(let i = 0; i < navigation_array.length; i++){
    console.log(navigation_array[i])
document.getElementById(navigation_array[i]).
    addEventListener('click', function(){
        if(navbar_info.clientWidth == '0'){
            navbar_info.style.animation = 'navbar_info 0.25s forwards'
        }else if(navbar_info.clientWidth == '600'){
            navbar_info.style.animation = 'navbar_info_close 0.25s forwards'
        }
        }
    )
}




