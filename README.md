<h1>HELP AUT</h1>

<h2>Trabajo realizado por</h2>
<p>Albert, David y Mariona</p>

<h2>Explicación de la idea del proyecto</h2>
    <p>
        Nuestra idea es muy simple: hoy en día es muy difícil encontrar un profesional en el campo de la psicología con el que puedas tener un buen seguimiento de citas, que se adapte a tu caso y con quien logres conectar, consiguiendo un cierto grado de confianza. Por eso, hemos decidido crear una aplicación web para solucionar esta necesidad en nuestro proyecto.

La idea principal o el "esqueleto" de esta aplicación es que las personas que tutelan a un niño autista, o adultos con la misma condición, puedan buscar profesionales en un portal web. Para decidir qué profesional se amolda mejor a su caso, se filtrarán los resultados siguiendo una serie de parámetros que se especificarán más adelante en el apartado de "funcionalidades". Al escoger uno, podrán empezar a hablar con él mediante un buzón de mensajes como funcionalidad base. Si se desea tener un contacto más directo, también se podrá optar por un plan premium, que contará con funcionalidades adicionales como videollamadas, chat, entre otras.

Esta es la base de la página, es decir, lo más esencial en un principio. Por supuesto, nuestra página debe contar con más opciones, las cuales se especificarán más adelante.   
    </p>

<h2>Objetivo que se persigue</h2>
    <p>
       El objetivo que buscamos con este proyecto, además de mejorar nuestras habilidades y aplicar el conocimiento que hemos adquirido y seguimos adquiriendo, es facilitar que las personas autistas puedan contactar con especialistas sin tener que esperar un mes para obtener una cita, como ocurre en el caso de la seguridad social, ni tener que pagar una suma de dinero excesivamente alta para recibir un servicio de psicología decente y con mayor regularidad, como sucede con los psicólogos privados.
    </p>

<h2>Organización y roles del equipo</h2>
    <p>
    En general, todos tenemos que participar en cada parte de este proyecto, pero a continuación mostraré en qué se va a especializar más cada uno.
    </p>
    <ul>
        <li><strong>Albert</strong> - Front-end</li>
        <li><strong>Mariona</strong> - Back-end</li>
        <li><strong>David</strong> - Infraestucura</li>
    </ul>
    <p>
       Al finalizar cada tarea asignada, revisaremos nuestro progreso y lo añadiremos tanto en la página de <b>Trello</b> como en nuestro <b>GitHub</b>, para que nuestros profesores puedan ver y revisar la evolución del proyecto, además de sugerir cambios o mejoras para obtener un mejor resultado. Esto también se hará para resolver dudas que puedan surgir.
    </p>

<h2>Tecnologías a utilizar (lenguajes, frameworks, sistemas, software)</h2>
    <ul>
       <li><strong>Front-end:</strong> Para el front-end, es decir, nuestra página, usaremos HTML como la base de nuestro proyecto, CSS para mejorar la apariencia visual y JavaScript para añadir diferentes funciones y vincular con nuestra base de datos. Aparte de esto, por recomendación de nuestros profesores, estaremos usando Bootstrap para facilitar la creación de la página y hacerla responsive.</li> <li><strong>Back-end:</strong> De momento, para el back-end, usaremos PHP para poder vincular nuestra página con nuestra base de datos, de modo que los datos de los usuarios y demás información solicitada queden guardados en la base de datos. Para la configuración de toda la infraestructura, usaremos Proxmox, instalado en un servidor físico alojado en nuestra propia clase; desde ahí crearemos diversas máquinas virtuales especificadas en el <b>diseño de red</b>.</li> <li><strong>Base de datos:</strong> Nuestra base de datos estará creada en MySQL, ya que es el lenguaje que más hemos aprendido y mejor sabemos manejar. Para crear esta base de datos, usaremos el programa MySQL Workbench, que nos permite tanto crear los diagramas como el código de nuestra base de datos.</li>
    </ul>

<h2>Estilo web</h2>
    <p>
      En la página web, nuestra idea es transmitir tranquilidad y seriedad al mismo tiempo. Esto lo hacemos para que los usuarios que entren por primera vez la encuentren atractiva a la vista. Hemos pensado en la accesibilidad de las personas que no suelen entrar a páginas web o que no están tan acostumbradas; por eso, nuestra página está diseñada de forma que cualquier persona pueda acceder y navegar sin problemas. Para lograr esto, hemos hecho que todos los textos sean muy visibles y distinguibles y hemos evitado incluir demasiados elementos en una sola página, de manera que el usuario no se sienta abrumado. Por último, hemos optado por colores otoñales para nuestra página, ya que provocan una sensación de tranquilidad y no tanta frialdad como podrían generar los colores fríos.
    </p>

<h2>Logotipo</h2>
    <p>
    El logotipo debe ser distinguible pero no demasiado recargado; además, debe ir acorde con los colores de la página y contar con elementos relacionados con la idea de esta. 
    </p>

    
![Logotipo](Img/LogoHelpAut.png)

    
<h2>Funcionalidades de la página (Susceptible a futuros cambios)</h2>
<p>
    Debemos pensar en diferentes funcionalidades para nuestra página; estas deben ir desde las más simples, que toda página tiene, hasta algunas más complicadas y específicas para nuestra idea. Para ello, nos hemos repartido la creación de estas. Cada integrante deberá desarrollar obligatoriamente tres funcionalidades básicas; es decir, estas deben estar sí o sí para el buen uso y funcionamiento de la página. Además, habrá otras funcionalidades "extras". Estas, como ya he comentado, no son obligatorias, pero pueden representar una gran mejora en nuestro proyecto. Por esto mismo, las funcionalidades "extras" están pensadas a futuro; es decir, si logramos implementarlas, perfecto, pero si no lo logramos antes de la entrega del proyecto, se tendrán que agregar en la siguiente fase.
</p>
<ul>
    <li><strong>Inicio de sesión y creación de cuenta:</strong> La primera funcionalidad que necesitamos es la opción de poder crear una cuenta y acceder a esta. Esta funcionalidad es la más básica de todas, ya que cualquier página cuenta con ella y no es posible el correcto funcionamiento de la página sin esta. En nuestro caso, la implementaremos mediante botones que se localizarán en la parte superior derecha de la página principal. Al pulsar en cualquiera de los dos botones, redirigirá al usuario a otra página en la que, dependiendo del botón pulsado, deberá rellenar una serie de campos. En el caso de la creación de cuenta, se tendrá que introducir un correo electrónico, una contraseña y marcar si la cuenta que está siendo creada es para un usuario normal o para un psicólogo. Al hacer esto, la información introducida se cotejará en la base de datos y, en caso de que el correo no haya sido introducido con anterioridad, se guardará toda la información proporcionada y se encriptará la contraseña. En el caso del inicio de sesión, el usuario introducirá las mismas credenciales que usó para crear la cuenta y se cotejará si el correo existe en la base de datos; si es así, se cotejará si la contraseña introducida es la misma que está guardada en la base de datos.</li>

<li><strong>Datos de los usuarios y cuenta:</strong> Una vez ya registrado, en el caso de los padres, la primera vez que accedan a su cuenta les aparecerá un formulario que deberán rellenar. Este formulario contará con diversas preguntas para poder encontrar el psicólogo que más se adapte a esas necesidades especificadas, además de información como nombre, apellidos, foto de perfil, etc. Esta información se guardará en la base de datos. En el caso de los psicólogos, también tendrán que rellenar un formulario, pero en este caso las preguntas serán de un índole profesional. Entre las opciones de este formulario se les pedirá que introduzcan su título; este será revisado por los administradores de la página para verificar que es cierto, y después de un tiempo se les dará la confirmación de que su cuenta ha sido creada y puede proceder a ejercer en la página.</li>

<li><strong>Página para administradores:</strong> Esta página está dirigida, como bien indica el nombre, para los administradores. Esta aparecerá cuando el usuario indique que es un administrador e introduzca sus credenciales. Al entrar, el administrador se encontrará con un menú con varias opciones; desde ahí podrá ver información tanto de los usuarios como de los psicólogos, esto por supuesto sin entrar en información sensible. Podrá revisar incidencias indicadas por los usuarios y psicólogos en relación a la propia página y, por último, podrá ver y cambiar fechas de citas.</li>

<li><strong>Recuperación de contraseña:</strong> Por supuesto, siempre está el problema de que un usuario se olvide de su contraseña, por lo que en la página de inicio de sesión se agregará una opción para recuperar la contraseña. Al pulsar en esta, se redirigirá al usuario a otra página donde este deberá indicar su correo electrónico. Al verificar que ese correo está en nuestra base de datos, se le enviará un código al correo indicado para que, en una nueva página, al introducir este código, le dé la opción de cambiar la contraseña; al cambiarla, por supuesto, también se cambiará en la base de datos.</li>
</ul>

<h3>Extras</h3> 
<ul>
    <li><strong>Gestión de planes:</strong> Teniendo en cuenta que nuestra página se basa en dos planes principales, necesitamos un apartado en el que, al pulsar en este, te muestre una comparativa de ambos planes. En el caso de tener el plan "básico", el usuario podrá decidir si prefiere pasarse al "premium"; en ese caso, al gestionarlo, se deberá guardar la información en la base de datos, indicando qué tipo de plan tiene y las funcionalidades con las que cuenta.</li> 
<li><strong>Psicólogos recomendados:</strong> En esta opción, los usuarios, tras iniciar sesión, verán una lista de psicólogos recomendados adaptados a sus necesidades, con una breve descripción y sus especialidades.</li>
<li><strong>Mailbox:</strong> Ya que queremos que los usuarios se puedan poner en contacto con los psicólogos, deberemos crear o implementar un mailbox para ello. Este mailbox se mostrará en un menú una vez el usuario haya iniciado sesión con éxito; al pulsar, se le redirigirá a otra página donde aparecerán todos los mensajes enviados y recibidos, además de opciones como filtros o redactar correo. Esta opción también será implementada para los psicólogos.</li>
<li><strong>Tablas de padres y psicólogos para el administrador:</strong> Dado que el administrador es el encargado de que toda la página funcione debidamente y de solucionar problemas que puedan surgir tanto a usuarios como a psicólogos, contará con una opción donde podrá buscar la información de tutores y psicólogos por si debe, por ejemplo, borrar alguna cuenta o solucionar problemas de acceso.</li>
</ul>

<h2>Especificaciones técnicas</h2>
<p>
  A continuación, mostraremos una lista con las especificaciones técnicas de los dispositivos que usaremos para este proyecto. Estas funcionalidades son tanto físicas, en el caso del servidor, como virtuales, en el caso de las máquinas virtuales.
</p>   
<ul>
    <li><strong>RAM:</strong> Cada máquina virtual cuenta con 4 GB de memoria RAM. Hemos decidido que todas cuenten con esto, ya que es más que suficiente para el correcto funcionamiento de la máquina.</li> 
<li><strong>Procesadores:</strong> Cada máquina cuenta con un procesador QEMU que proporciona PROXMOX, cuya versión es la x86-64-v2-AES.</li>
<li><strong>Disco duro:</strong> Hemos decidido que todas las máquinas tendrán un disco duro reservado de forma dinámica de 15 GB. Esta capacidad es más que suficiente, ya que no se alojará nada que supere esta capacidad, y a la vez es suficiente para el correcto funcionamiento de la máquina.</li>
<li><strong>Sistema operativo:</strong> Por instrucción de nuestros profesores, contamos con el sistema operativo Ubuntu Server 22.04.2 en todas las máquinas que proporcionan algún servicio. Esta es una variedad de Ubuntu dedicada exclusivamente para servidores y que no funciona de forma gráfica, es decir, que todo lo que configuremos dentro se tendrá que realizar por comandos.</li>
<li><strong>Adaptadores de red:</strong> Contamos con dos adaptadores. El primero es el adaptador vmbr0 con la IP 100.77.20.122/24. Este es el adaptador que nos da por defecto PROXMOX, y por eso cuenta con la misma dirección de red que él. Este adaptador estará conectado a la máquina de router para que pueda acceder al exterior. El segundo con el que contamos es el adaptador de red vmbr1 con la IP 10.20.30.40/24. Este adaptador será el encargado de la red interna; este se conectará con todas las máquinas para poder ofrecer una conexión interna entre todas.</li>
</ul>

<h2>Instalación y configuración de PROXMOX</h2>
<p>
    A continuación, explicaré qué es PROXMOX y para qué lo usaremos, además de los pasos que hemos seguido para su instalación, configuración y creación de las máquinas:
</p>
<ul>
    <li><strong>Instalación mediante un USB booteable:</strong> El primer paso a seguir es conseguir un USB vacío y convertirlo en booteable con PROXMOX. Esto lo hacemos para poder introducir este USB en nuestro servidor e iniciar la instalación. Si no inicia PROXMOX después de introducir el USB y encender la máquina, puede que sea por la BIOS. Para arreglar este problema, debemos entrar en la BIOS de nuestro servidor e ir al apartado de boot options. Una vez ahí, comprobamos que la opción de USB sea la primera en la lista; de esta forma le indicamos a la BIOS que, al iniciar el servidor, el primer lugar donde tiene que buscar un sistema es en el USB. Una vez acabado, reiniciamos el servidor y comprobamos si esta vez funciona.</li> 
<li><strong>Configuración inicial:</strong> Una vez iniciado PROXMOX, nos pedirá rellenar una serie de información. Lo primero es seleccionar el disco duro en el que queremos almacenar toda la información. A continuación, seleccionamos nuestro país, zona horaria y el idioma de nuestro teclado. Después, establecemos una contraseña para poder acceder. También pide agregar un correo electrónico. En nuestro caso, como es para un proyecto y no se usará como servidor profesional, simplemente cambiamos la extensión ".invalid" por ".com" y le damos a siguiente. Lo último será configurar la red; colocamos el hostname que nosotros queramos, que en nuestro caso es "helpaut.local", escribimos la dirección IP deseada (nosotros hemos decidido que será la 100.77.20.122) y, por último, el gateway y el servidor DNS; en ambos casos hemos colocado la dirección 100.77.20.1.</li>
<li><strong>Iniciar PROXMOX en remoto:</strong> Para poder acceder a PROXMOX desde un ordenador diferente en remoto, necesitamos estar en la misma red local. Una vez asegurados de estarlo, solo tenemos que colocar la IP de nuestro servidor en el buscador de Google, seguido de :8006, que es el puerto TCP/UDP. Una vez hecho esto, nos pedirá que iniciemos nuestra sesión con las credenciales que hemos especificado antes.</li>
<li><strong>Crear máquinas virtuales:</strong> Para crear máquinas virtuales es muy sencillo. Lo único que tenemos que hacer es dirigirnos al apartado Create VM, que se sitúa en la parte superior derecha de la página de PROXMOX. Una vez hecho esto, le indicamos la información que se nos pide y confirmamos. Una buena práctica sería que, al ya tener una máquina hecha y con la configuración básica, podamos maquetarla para poder replicarla las veces que nos haga falta. Para esto, le daremos clic derecho en la máquina que queramos y pulsaremos "Create Template".</li>
</ul>

<h2>Configuración de DNS</h2>
<h2>Configuración de ROUTER</h2>
<h3> Configuración de DHCP</h3>
<h2>Configuración NGINX</h2>
<h2>Base de datos</h2>
<h3>Primer diagrama de la Base de datos</h3>

<p>
        Estamos en la fase de desarrollo de nuestra base de datos. Comenzamos definiendo cuidadosamente nuestras ideas y conceptos para los servicios y productos de nuestra empresa web/app, lo cual nos permitió estructurar la información necesaria y garantizar un servicio eficiente. El uso de un mock-up fue fundamental para visualizar el proyecto, los datos, servicios y productos de la web, así como la creación de nuestro primer diagrama de base de datos (BBDD).

Posteriormente, mantuvimos una reunión con Joaquim, quien nos proporcionó una serie de pautas y correcciones bastante extensas. La semana siguiente aplicamos estos cambios y realizamos otra reunión con él para revisar nuestro avance. Actualmente, estamos modificando el nuevo diagrama en base a sus indicaciones. En las imágenes compartidas se pueden ver tanto nuestro primer diagrama de red como el segundo, que hemos dividido en dos partes: el esquema de relaciones entre tablas y el desarrollo inicial de las tablas, en el cual sólo hemos marcado las claves primarias (PK) y claves foráneas (FK). Para la siguiente revisión, estamos desarrollando los atributos completos (tipo de dato: float, boolean, INT, TIME, etc.). En el segundo diagrama también se reflejan las últimas correcciones que Joaquim nos indicó esta semana.

Esta semana hemos comenzado la tercera versión del diagrama de tablas y estamos avanzando en su implementación en MySQL. Tenemos casi listo este nuevo diagrama en el ordenador de clase, y la próxima semana lo subiremos para recibir nuevo feedback de Joaquim. En estas reuniones, también hemos aprendido algunos aspectos técnicos importantes para el desarrollo y la optimización de funciones, como identificar las que requieren soporte de la BBDD y las que no. Por ejemplo, en el caso de la funcionalidad de geolocalización, nos sugirió integrarla directamente en la base de datos para simplificar el desarrollo. Además, Joaquim nos aconsejó externalizar ciertas funcionalidades, como el envío de correos electrónicos, la gestión de cuentas bancarias y los tickets de soporte técnico.

Estos consejos nos están ayudando a mejorar tanto el backend como la funcionalidad de nuestra base de datos, y a su vez, el proyecto en su conjunto.   
    </p>

![Diagrama Base de datos](Img/HELPAUT_DIAG.drawio.png)

<h3>Segundo diagrama de la base de datos con cambios</h3>

[Segundo diagrama](téchico.pdf)

