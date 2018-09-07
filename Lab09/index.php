<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lab 9: PHP</title>
    <link rel="stylesheet" href="..\bootstrap\bootstrap-4.0.0-beta.2-dist\css\bootstrap.min.css">
    <script src="..\bootstrap\bootstrap-4.0.0-beta.2-dist\js\jquery-3.2.1.js"></script>
    <script src="..\bootstrap\bootstrap-4.0.0-beta.2-dist\js\bootstrap.bundle.js"></script>
</head>
<body>

    <h1>Lab 9: Introducción a PHP</h1>
    <p>
        phpinfo() es un método que llama todas las especificaciones de PHP que están en uso, permitiéndole al usuario
        ver la versión, el sistema operativo, el navegador, información del servidor, qué módulos se pueden usar, y
        muchas cosas más. Sirve para debuggear y checar configuraciones. Incluye los datos de environment, get, post,
        cookie y server.

    </p>

    <?php
        function promedio($arr)
        {
            $sum =0;
            $n = count($arr);
            $i = 0;

            for($i; $i < $n; $i++)
            {
                $sum = $sum + $arr[$i];
            }
            $promedio = $sum / $n;
            return $promedio;
        }

        function mediana($arr)
        {
            $n = count($arr);
            sort($arr);

            if($n%2==0)
            {
                return ($arr[$n/2-1]+$arr[$n/2])/2;
            }
            else
            {
                return $arr[ceil($n / 2 - 1)];
            }
        }

        function sortSmalltoBig($arr)
        {
            $arraux = $arr;
            sort($arraux);
            return $arraux;
        }

        function sortBigtoSmall($arr)
        {
            $arraux = $arr;
            sort($arr);
            $arraux = array_reverse($arraux);
            return $arraux;
        }

        function printAll($arr)
        {
            $n = count($arr);

            echo "Arreglo original: ";
            for ($i = 0; $i < $n; $i++)
            {
                echo "$arr[$i], ";
            }
            echo "<ul>";
            echo "<li> promedio($arr)</li>";
            echo "<li> mediana($arr)</li>";
            echo "<li> sortSmalltoBig($arr)</li>";
            echo "<li> sortBigtoSmall($arr)</li>";
            echo "</ul>";
        }

        function cubosCuadrados($n)
        {
            echo "<table border='2'><thead><tr><td>Cuadrados de 0 a $n</td><td>Cubos de 0 a $n</td></tr></thead><tbody>";
            for($i=0;$i<=$n;$i++){
                echo "<tr><td>$i**2</td><td>$i**3</td></tr>";
            }
            echo "</tbody></table>";
        }

    ?>

</body>
</html>