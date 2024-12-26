function searchFunction() {
    search(document.getElementById("searchInput").value);
}


function searchFunction2() {
    search(document.getElementById("searchInput2").value);
}


function search(_input_){
    if (_input_) {
        window.location.href = "search.html?query=" + encodeURIComponent(_input_)
    }
}
