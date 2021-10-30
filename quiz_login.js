function login() {
    var player1_name = document.getElementById("Player1").value;
    var player2_name = document.getElementById("Player2").value;

    localStorage.setItem("player1 name" , player1_name);
    localStorage.setItem("player2 name" , player2_name);

    window.location = "game_page.html";
}

