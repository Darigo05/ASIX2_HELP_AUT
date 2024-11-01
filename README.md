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
        <li><strong>Front-end:</strong> Para el front-end es decir nuestra pagina usaremos HTML como la base de nuestro proyecto, CSS para hacer que sea mucho mas bonito a la vista y Javascript para añadir diferentes funiciones y vincular con nuestra base de datos. A parte de esto por recomendación de nuestros profesores estaremos usando Bootstrap para que nos facilite la creación de la página y podamos hacerla reactive.</li>
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

    
![Logotipo](Img/LogoHelpAut.png)

    
<h2>Funcionalidades de la página (Susceptible a futuros cambios)</h2>
<p>
    Debemos pensar en diferentes funcionalidades paara nuestra página, estas deben ir desde la mas simples y que toda página tiene hasta algunas mas comlicadas y dirigidas a nuestra idea, para ello nos hemos repartido la creación de estas. Cada integrante deberá hacer obligatoriamente tres funcionalidades básicas, es decir estas debe estar si o si para el buen uso de la página y su funcionamiento y otras funcionalidades "extras" estas como ya he comentado son funcionalidades que no són obligatorias pero pueden suponer una gran mejora en nuestro proyecto, por esto mismo las funcionalidades "extras" estan pensadas a futuro, es decir que si logramos implementarlas perfecto pero si no lo logramos antes de la entrega del proyecto se tendrán que agregar en la siguiente entrega.
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
  A continuación mostraremos una lista con las especificaciónes tecnicas de los dispositivos que usaremos para este proyecto, estas funcionalidades son tanto físicas en el caso del servidor como virtuales en caso de las máquinas virtuales
</p>   
<ul>
    <li><strong>RAM:</strong> Cada máquina virtual cuenta con 4GB de memoria RAM, hemos decidido que cuenten todas con esto ya que es mas que suficiente para el correcto funcionamiento de la máquina.</li> 
    <li><strong>Procesadores:</strong> Cada máquina cuenta con un procesador QEMU que proporciona PROXMOX cuya version es la x86-64-v2-AES.</li>
    <li><strong>Disco duro:</strong> Hemos decidido que todas las máquinas tendrán un disco duro reservado de forma dinámica de 15GB esta capacidad es mas que suficiente ya que no se alojara nada que supere esta capacidad y a la vez es suficiente para el correcto funcionamiento de la máquina.</li>
    <li><strong>Sistema operativo:</strong> Por instrucción de nuestros profesores contamos con el sistema operativo Ubuntu Server 22.04.2 en todas las maquinas que proporcionan algún servicio, esta es una variedad de Ubuntu dedicado exlusivamente para servidores y que no funciona de forma gráfica es decir que todo lo que configuremos dentro se tendrá que realizar por comandos.</li>
    <li><strong>Adaptadores de red:</strong> Contamos con dos adaptadores, el primero es el adaptador vmbr0 con la IP 100.77.20.122/24 este es el adaptador que nos da por defecto PROXMOX y por eso cuenta con la misma dirección de red que el mismo, este adaptador estará conectado a la maquina de router para que pueda acceder al exterior, el segundo con el que contamos es el adaptador de red vmbr1 con la IP 10.20.30.40/24 este adaptador sera el encargado de la red interna, este se conectara con todas las maquinas para poder ofreer una conexión interna entre todas</li>
</ul>

<h2>Instalación y configuración de PROXMOX</h2>
<p>
    A continuación explicare que es PROXMOX y para que lo usaremos, además de los pasos que hemos seguido para su instalación, configuración y creación de las máquinas:
</p>
<ul>
    <li><strong>Instalación mediante un USB booteable:</strong> El primer paso a seguir es conseguir un usb vacio y convertirlo en booteable con PROXMOX esto lo hacemos para poder introducir este USB en nuestro servidor e iniciar la instalación, si no inicia PROXMOX después de introducir el USB y encender la máquina puede que sea por la BIOS, para arreglar este problema debemos entrar en la BIOS de nuestro servidor e ir al apartado de boot options, una vez ahi comprobamos que la opción de USB sea la primera en la lista, de esta forma le indicamos a la BIOS que al iniciar el servidor el primer lugar donde tiene que buscar un sistema es en el USB. Una vez acabado reinciamos el servidor y comprobamos si esta vez funciona</li> 
    <li><strong>Configuración inicia:</strong> Una vez inciado PROXMOX nos pedirá rellenar una serie de información, lo primero es seleccionar el disco duro en el que queremos almacenar toda la información, a continuación seleccionamos nuestro país, zona horaria y el idioma de nuestro teclado, después establecemos una contraseña para poder acceder, también pide agregar un correo electrónico, en nuestro caso como es para un proyecto y no se usara como servidor profesional simplemente cambiomos la extension ".invalid" por ".com y le damos a siguiente, lo ultimo sera configurar la red, colocamos el hostname que nosotros queramos que en nuestro caso es "helpaut.local", escribimos la dirección IP deseada, nosotros hemos decidido que sera la 100.77.20.122 y por ultimo el gateway y el servidor DNS en ambos casos hemos colocado la dirección 100.77.20.1</li>
    <li><strong>Inicar PROXMOX en remoto:</strong> Para poder acceder a PROXMOX desde un ordenador diferente en remoto necesitamos estar en la misma red local, una vez asegurados de estarlo solo tenemos que colocar la IP de nuestro servidor en el buscador de google seguido de :8006 que es el puerto TCP/UDP, una vez hecho esto nos pedirá que iniciemos nuestra sesión con las credenciales que hemos especificado antes.</li>
    <li><strong>Crear maquinas virtuales</strong>Para crear maquinas virtuales es muy sencillo lo unico que tenemos que hacer es dirigirnos al apartado Create VM que se situa en la parte superior derecha de la página de PROXMOX una vez hecho esto le indicamos la información que se nos pide y confirmamos. Una buena práctica seria que al ya tener una máquina hecha y con la configuración básica podemos maquetarla para poder replicarla las veces que nos haga falta, para esto le darmeos click derecho en la máquina que queramos y pulsaremos a create template.  </li>
</ul>

<h2>Configuración de DNS</h2>
<h2>Configuración de ROUTER</h2>
<h3> Configuracion de DHCP</h3>
<h2>Configuracion NGINX</h2>
<h2>Base de datos</h2>
<h3>Primer diagrama de la base de datos</h3>

<p>
        Estamos en la fase de desarrollo de nuestra base de datos. Comenzamos definiendo cuidadosamente nuestras ideas y conceptos para los servicios y productos de nuestra empresa web/app, lo cual nos permitió estructurar la información necesaria y garantizar un servicio eficiente. El uso de un mock-up fue fundamental para visualizar el proyecto, los datos, servicios y productos de la web, así como la creación de nuestro primer diagrama de base de datos (BBDD).

Posteriormente, mantuvimos una reunión con Joaquim, quien nos proporcionó una serie de pautas y correcciones bastante extensas. La semana siguiente aplicamos estos cambios y realizamos otra reunión con él para revisar nuestro avance. Actualmente, estamos modificando el nuevo diagrama en base a sus indicaciones. En las imágenes compartidas se pueden ver tanto nuestro primer diagrama de red como el segundo, que hemos dividido en dos partes: el esquema de relaciones entre tablas y el desarrollo inicial de las tablas, en el cual sólo hemos marcado las claves primarias (PK) y claves foráneas (FK). Para la siguiente revisión, estamos desarrollando los atributos completos (tipo de dato: float, boolean, INT, TIME, etc.). En el segundo diagrama también se reflejan las últimas correcciones que Joaquim nos indicó esta semana.

Esta semana hemos comenzado la tercera versión del diagrama de tablas y estamos avanzando en su implementación en MySQL. Tenemos casi listo este nuevo diagrama en el ordenador de clase, y la próxima semana lo subiremos para recibir nuevo feedback de Joaquim. En estas reuniones, también hemos aprendido algunos aspectos técnicos importantes para el desarrollo y la optimización de funciones, como identificar las que requieren soporte de la BBDD y las que no. Por ejemplo, en el caso de la funcionalidad de geolocalización, nos sugirió integrarla directamente en la base de datos para simplificar el desarrollo. Además, Joaquim nos aconsejó externalizar ciertas funcionalidades, como el envío de correos electrónicos, la gestión de cuentas bancarias y los tickets de soporte técnico.

Estos consejos nos están ayudando a mejorar tanto el backend como la funcionalidad de nuestra base de datos, y a su vez, el proyecto en su conjunto.   
    </p>

![Diagrama Base de datos](Img/HELPAUT_DIAG.drawio.png)

<h3>Segundo diagrama de la base de datos con cambios</h3>

[Segundo diagrama](téchico.pdf)

