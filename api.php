<?php
    /* move_uploaded_file($_FILES["archivo"]["tmp_name"],"img/M1.png");
    echo '<a href="index.html">Atras</a>';
 */
    /* recogemos los datos que estan dentrando */
    header("Content-Type: application/json");
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $_METHOD = $_SERVER["REQUEST_METHOD"];
    $_HEADERS = apache_request_headers();
    //var_dump($_DATA);
    var_dump($_HEADERS);

?>  