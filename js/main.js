window.onscroll = function (e) {
    console.log(document.body.scrollTop);
    console.log(scrollY , scrollY);
    let div = document.getElementById("crazy-boy");

    if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        div.style.backgroundPosition = '0px 0px';
        div.style.top = '-80px'
    }
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-144px 0px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop > 598 || document.documentElement.scrollTop > 598) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-70px 0px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop > 764 || document.documentElement.scrollTop > 764) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-70px -80px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop > 1064 || document.documentElement.scrollTop > 1064) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-144px 0px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop > 1617 || document.documentElement.scrollTop > 1617) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-146px -80px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop > 2002 || document.documentElement.scrollTop >2002) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '-141px 4px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop >2492 || document.documentElement.scrollTop > 2492) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '0px -162px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop >3206 || document.documentElement.scrollTop > 3206) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '0px -79px';
        div.style.top = '80px'
    }
    if (document.body.scrollTop >3920 || document.documentElement.scrollTop > 3920) {
        div.style.width = '70px'
        div.style.height = '80px'
        div.style.backgroundPosition = '0px -162px';
        div.style.top = '800px'
        
    }
    // else if (document.body.scrollTop > 890  || document.documentElement.scrollTop > 890) {
    //     div.style.width = '70px'
    //     div.style.height = '80px'
    //     div.style.backgroundPosition = '-144px 0px';
    //     div.style.top = '80px'
    // }
}