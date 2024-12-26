function toggleNavbar() {
    sidebar = document.getElementById('sidebar');
    s = sidebar.style.display
    setTimeout(function() {
        sidebar.style.display = s;
    }, 15000);
    if(sidebar.style.display == "block") sidebar.style.display="none";
    else sidebar.style.display="block";
}
