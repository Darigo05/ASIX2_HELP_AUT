<h1>HELP AUT</h1>

<h2>Trabajo realizado por</h2>
<p>Albert, David y Mariona</p>

<h2>Explicación de la idea del proyecto</h2>
    <p>
        Nuestra idea es muy simple, hoy en dia es muy difícil encontrar un profesional en el campo de la psicología con el que puedas tener un buen seguimiento de citas, que se adapte a tu caso y que logres conectar y conseguir un cierto grado de confianza con el. Por eso hemos decidido para nuestro proyecto crear una aplicación web para solucionar esto. La idea principal o el "esqueleto" de esta es que las personas que tutelan a un niño autista o adultos con la misma condición puedan buscar profesionales en un portal web, para decidir que profesional se amolda mas a su caso se filtrara siguiendo una sere de parámetros que se especificaran mas adelante en el apartado de "funcionalidades". Al escoger uno podran empezar a hablar con el mediante un mailbox como funcionalidad base. Si se quiere tener un contacto mas directo con el también pueden optar por contratar un plan premium que contara con mas funcionalidades como videollamadas, chat, etc. Esta es la base de la pagina, es decir lo mas esencial en un principio, por supuesto nuestra pagina debe contar con mas opciones y estas se especificaran mas adelante.     
    </p>

<h2>Objetivo que se persigue</h2>
    <p>
       El objetivo que buscamos con este proyecto a parte de mejorar nuestras habilidades y aplicar el conocimiento que hemos y seguimos adquiriendo es poder hacer que las personas autistas puedan contactar con especialistas sin tener que esperar un mes para poder tener una cita como en el caso de la seguridad social, ni tener que pagar una suma de dinero excesivamente alta para poder tener un servicio de psicologia decente y con mas regularidad como es el caso de los psicólogos privados.
    </p>

<h2>Organización y roles del equipo</h2>
    <p>
    En general todos tenemos que participar en cada parte de este proyecto pero a continuación mostrare en que se va a especializar mas cada uno.
    </p>
    <ul>
        <li><strong>Albert</strong> - Front-end</li>
        <li><strong>Mariona</strong> - Back-end</li>
        <li><strong>David</strong> - Infraestucura</li>
    </ul>
    <p>
       Al acabar cada tarea asignada, revisaremos nuestro progreso y lo añadiremos tanto en la pagina de <b>Trello</b> como en nuestro <b>Github</b> para que nuestros profesores puedan ver y revisar la evolución del proyecto y sugerir cambios o mejoras para tener un mejor resultado, esto tambien se hace para dudas que nos puedan surgir.
    </p>

<h2>Tecnologías a utilizar (lenguajes, frameworks, sistemas, software)</h2>
    <ul>
        <li><strong>Front-end:</strong> Para el front-end es decir nuestra pagina usaremos HTML como la base de nuestro proyecto, CSS para hacer que sea mucho mas bonito a la vita y Javascript para añadir diferentes funiciones y vincular con nuestra base de datos. A parte de esto por recomendación de nuestros profesores estaremos usando Bootstrap para que nos facilite la creación de la página y podamos hacerla reactive.</li>
        <li><strong>Back-end:</strong> De momento para el backend usaremos php para poder vincular nuestra pagina con nuestra base de datos, de esta forma los datos de los usuarios y demás información que se le pida al usuario quede guardada en la base de datos, para la configuración de toda la infraestructura usaremos Proxmox instalado en un servidor físico que alojado en nuestra propia clase, desde ahi crearemos diversas maquinas virtuales que especificamos en el <b>diseño de red</b></li>
        <li><strong>Base de datos:</strong> Nuestra base de datos estara creada en el lenguaje MySQL ya que es el lenguaje que mas hemos aprendido y mejor sabemos manejar, para crear esta base de datos usaremos el programa MySQL Workbench que nos permite tanto crear los diagramas como el codigo de nuestra base de datos</li>
    </ul>

<h2>Estilo web</h2>
    <p>
      En la pagina web nuestra idea es demostrar tranquilidad a la vez que seriedad, esto lo hacemos para que los usuarios que entren por primera vez se les haga atractiva a la vista, hemos pensado en la accesibilidad de las personas que no etran usualmente a paginas web o que no estan tan acostumbrados por eso nuestra página web esta diseñada de forma que cualquier persona pueda acceder y navegar por esta sin ningún problema, esto lo hemos logrado haciendo todos los textos muy visibles y distinguibles y haciendo que no haya demasiados elementos en una sola página para que el usuario no se abrume, por ultimo hemos optado por unos colores otoñales para nuestra página ya que provoca una sensación de tranquilidad y no de tanta frialdad como lo podrian ser los colores frios.
    </p>

<h2>Logotipo</h2>
    <p>
    El logotipo debe ser distinguible pero no demasiado sobrecargado, este mismo debe ir a corde on los colores de la página y contar con elementos relacionados con la idea de la página. 
    </p>

    
![Logotipo](Img/LogoHelpaut.png)

    
<h2>Funcionalidades de la página (Susceptible a futuros cambios)</h2>
<p>
    Debemos pensaar en diferentes funcionalidades paara nuestra página, estas deben ir desde la mas simples y que toda página tiene hasta algunas mas comlicadas y dirigidas a nuestra idea, para ello nos hemos repartido la creación de estas. Cada integrante deberá hacer obligatoriamente tres funcionalidades básicas, es decir estas debe estar si o si para el buen uso de la página y su funcionamiento y otras funcionalidades "extras" estas como ya he comentado son funcionalidades que no són obligatorias pero pueden suponer una gran mejora en nuestro proyecto, por esto mismo las funcionalidades "extras" estan pensadas a futuro, es decir que si logramos implementarlas perfecto pero si no lo logramos antes de la entrega del proyecto se tendrán que agregar en la siguiente entrega.
</p>
<ul>
    <li><strong>Inicio de sesión y creación de cuenta:</strong> La primera funcionalidad que necesitamos es la opción de poder crear una cuenta y acceder a esta, esta funcionalidad es la mas básica de todas ya que cualquier página cuenta con ella y no es posible el correcto funcionamiento de la página sin esta. En nuestro caso la implementaremos mediante botones que se localizarán en la parte superior derecha de la página principal, al pulsar en cualquiera de los dos botones redirigirá al usuario a otra pagina en la que dependiendo del botón pulsado debera rellenar una serie de campos. En el caso de la creación de cuenta se tendrá que introducir un correo electronico, una contraseña y marcar si la cuenta que esta siendo creada es para un usuario normal o para un psicólogo, al hacer esto la información introducida se cotejara en la base de datos y en caso de que el correo no haya sido introducido con anterioridad guardara toda la información proporcionada y encriptara la contraseña. En el caso de el inicio de sesión el usuario introducira las mismas credenciales que uso para crear la cuenta y se cotejara si el correo existe en la base de datos y si es así se cotejara si la contraseña introducida es la misma que esta guardada en la base de datos.</li>
    <li><strong>Datos de los usuarios y cuenta:</strong> Una vez ya registrado en el caso de los padres la primera vez que accedan a su cuenta les aparecera un formulario que deberán rellenar, este formulario contará con diversas preguntas para poder enocntrar el psicólogo que mas se adapte a esas necesidades especificadas admeás de información como nombre, apellidos, foto de perfil, etc esta información se guardara en la base de datos. En el caso de los psicólogos también tendán que rellenar un formaulario pero en este caso las preguntas serán de un indole profesional, entre las opciónes de este formulario se le pedira que introduzca su titulo, este sera revisado por los administradores de la página para verificar que es cierto y después de un tiempo se le dara la confirmación de que su cuenta ha sido creada y puede proceder a ejercer en la página.
    </li>
    <li><strong>Página para administradores:</strong> Esta página esta dirigida como bien indica el nombre para los administradores, esta aparecera cuando el usuario indique que es un administrador e indique sus credenciales. Al entrar el administrador se encontrara un menú con varias opciones, desde ahi podra ver información tanto de los usuarios y psicólogos, esto por supuesto sin entrar en información sensible, podra revisar incidencias indicadas por los usuarios y psicólogos en relación a la propia página y por ultimo podra ver y cambiar fechas de citas.</li>
    <li><strong>Recuperación de contraseña:</strong> Por supuesto siempre esta el problema de que un usuario se olvide de su contraseña por lo que en la pagina de inicio de seión se agregara una opción de recuperar la contraseña, al pulsar en esta se redirigira al usuario a otra página donde este debera indicar su correo eletrónico, al verificar que ese correo esta en nuestra base de datos se le enviara un codigo al correo indicado para que en una nueva página al introducir este correo le de la opción de cambiar la conraseña, al cambiarla por supuesto también se cambiara de la base de datos.</li>
</ul>

<h3>Extras</h3> 
<ul>
    <li><strong>Gestión de planes:</strong> Teniendo en cuenta que nuestra página se basa en dos planes pricnipales necesitamos un apartado en el que al pulsar en este te muestre una comparativa de ambos planes, en el caso de tener el plan "basico" el usuario podra decidir si prefiere pasarase al "premium" en ese caso al gestionarlo se debera guardar la información en la base de datos indicando que tipo de plan tiene y las funcionalidades con las que este cuenta</li> 
    <li><strong>Psicólogos recomendados:</strong> En esta opción, los usuarios, tras iniciar sesión, verán una lista de psicólogos recomendados adaptados a sus necesidades, con una breve descripción y sus especialidades.</li>
    <li><strong>Mailbox:</strong> Ya que queremos que los usuarios se puedan poner en contacto con los psicólogos deberemos crear o implementar un mailbox para ello. Este mmailbox se mostrara en un menú una vez el usaurio haya inciado sesión con exito, al pulsar se le redirigira a otra página donde aparecerán todos los mensajes enviados y recibidos ademas de opciónes como filtros o redactar correo, esta opción tambien sera implementada para los psicólogos.</li>
    <li><strong>Tablas de padres y psicólogos para el administrador:</strong> Dado que el administrador es el encargado de que toda la página funcione debidamente y solucionar problemas que puedan surgir tanto a usuarios como a psicologos contara con una opción donde podra buscar la información de tutores y psicólogos por si debe por ejemplo borrar alguna cuenta, o solucionar problemas de acceso</li>
</ul>

<h2>Especificaciones técnicas</h2>
<p>
    Para este proyecto, necesitamos crear cuatro máquinas virtuales. A continuación, se describen las especificaciones de hardware de cada una:
</p>   
<ul>
    <li><strong>RAM:</strong> Todas las máquinas cuentan con 4GB de memoria RAM.</li> 
    <li><strong>Procesadores:</strong> Cada máquina cuenta con un procesador.</li>
    <li><strong>Disco duro:</strong> Cada máquina cuenta con un disco duro de 15GB para su funcionamiento óptimo.</li>
    <li><strong>Sistema operativo:</strong> Todas las máquinas dedicadas a ofrecer algún tipo de servicio utilizan Ubuntu Server 22.04.2.</li>
    <li><strong>Adaptadores de red:</strong> Todas las máquinas estarán conectadas entre sí mediante un adaptador de red interna con la IP 10.20.30.40/24.</li>
</ul>

<h2>Instalación y configuración de PROXMOX</h2>
<p>
    A continuación, se explica el proceso de instalación y configuración de PROXMOX:
</p>
<ul>
    <li><strong>Instalación mediante un USB booteable:</strong> Inicialmente, se debe crear un USB booteable que contenga PROXMOX para instalarlo en el servidor físico y comenzar la instalación.</li> 
    <li><strong>Contraseña y correo:</strong> Posteriormente, es necesario establecer una contraseña para acceder a PROXMOX y añadir un correo electrónico. En nuestro caso, simplemente hemos cambiado la extensión de ".invalid" a ".com" debido a que se trata de un proyecto y no es necesario modificar otros parámetros.</li>
    <li><strong>Configuración de red:</strong> Este es un paso crucial, ya que se deben configurar los parámetros de la red (revisar los parámetros en clase).</li>
</ul>

<h2>Configuración de DNS</h2>
<h2> Configuracion de DHCP</h2>
<h2>Configuracion NGINX</h2>
<h2>Base de datos (Actualizar con recomendaciones de Joaquim)</h2>


![Diagrama Base de datos](Img/HELPAUT_DIAG.drawio.png)

