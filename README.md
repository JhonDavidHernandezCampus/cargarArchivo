​	

El comando para mirar la configuracion actual del servidor es : "  														  $_HEADERS = apache_request_headers();

​    var_dump($_HEADERS);"																																









| Cabecera           | Valor                                                        |
| ------------------ | ------------------------------------------------------------ |
| Host               | Nombre de dominio del servidor al que se envía la solicitud: "localhost" |
| Connection         | Tipo de conexión que se debe mantener para la solicitud: "keep-alive" |
| Content-Length     | Longitud del contenido del cuerpo de la solicitud en bytes: "50" |
| sec-ch-ua          | Cadena del agente de usuario del navegador y sus versiones anteriores: Chrome, Chromium, Not-A.Brand |
| sec-ch-ua-platform | Plataforma en la que se está ejecutando el navegador: "Linux" |
| sec-ch-ua-mobile   | Indica si el navegador se considera móvil o no: "?0" (no móvil) |
| User-Agent         | Información detallada sobre el agente de usuario del cliente que realiza la solicitud: Chrome en Linux |
| Content-Type       | Tipo de contenido del cuerpo de la solicitud: "application/json" |
| Accept             | Tipos MIME de contenido que el cliente puede procesar: "/" (cualquier tipo de contenido) |
| Origin             | Origen de la solicitud: "[http://localhost](http://localhost/)" |
| Sec-Fetch-Site     | Tipo de sitio al que se está realizando la solicitud: "same-origin" |
| Sec-Fetch-Mode     | Modo de solicitud utilizado por el cliente para obtener el recurso: "cors" |
| Sec-Fetch-Dest     | Destino de la solicitud: "empty"                             |
| Referer            | URL de la página desde la cual se realizó la solicitud: URL específica de un archivo HTML en "localhost" con algunos parámetros |
| Accept-Encoding    | Algoritmos de compresión que el cliente puede entender: gzip, deflate, br |
| Accept-Language    | Idiomas preferidos del cliente para la respuesta: en-CO, en, es-CO, es, en-GB, en-US |

