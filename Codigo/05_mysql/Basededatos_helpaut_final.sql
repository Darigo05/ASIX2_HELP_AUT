-- DROP database Helpaut;
-- -----------------------------------------------------
-- Base de datos `Helpaut`
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `Helpaut`;
USE `Helpaut`;

-- -----------------------------------------------------
-- Tabla `PACIENTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PACIENTES` (
  `id_paciente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  `fecha_nacimiento` DATETIME NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `espectro_tipo_autismo` VARCHAR(45) NOT NULL,
  `tratamiento` TINYINT NOT NULL,
  `activacion_plan` TINYINT NOT NULL,
  `intereses_y_actividades` VARCHAR(100) NOT NULL,
  `manejo_emociones` VARCHAR(100) NOT NULL,
  `interaccion_social_y_comunicacion` VARCHAR(100) NOT NULL,
  `terapia_anterior` TINYINT NOT NULL,
  `descripcion_terapia_anterior` VARCHAR(100) NOT NULL,
  `id_padres_hijos` INT NOT NULL,
  `id_psicologo_asignado` INT NOT NULL,
  `tipo_de_plan` INT NOT NULL,
  PRIMARY KEY (`id_paciente`),
  INDEX `id_psicologo_asignado_idx` (`id_psicologo_asignado` ASC),
  INDEX `id_plan_idx` (`tipo_de_plan` ASC),
  INDEX `id_padres_hijos_idx` (`id_padres_hijos` ASC)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `PADRES-HIJOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PADRES-HIJOS` (
  `id_padres_hijos` INT NOT NULL AUTO_INCREMENT,
  `tipo_paciente` VARCHAR(50) NOT NULL,
  `id_padre_madre` INT NOT NULL,
  `id_hijo` INT NOT NULL,
  PRIMARY KEY (`id_padres_hijos`),
  INDEX `id_padre_madre_idx` (`id_padre_madre` ASC),
  INDEX `id_hijo_idx` (`id_hijo` ASC),
  CONSTRAINT `fk_padre_madre`
    FOREIGN KEY (`id_padre_madre`)
    REFERENCES `PACIENTES` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_hijo`
    FOREIGN KEY (`id_hijo`)
    REFERENCES `PACIENTES` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `PSICOLOGOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PSICOLOGOS` (
  `id_psicologo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(25) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  `tipo_terapia` VARCHAR(50) NOT NULL,
  `estudios` VARCHAR(100) NOT NULL,
  `especialidad` VARCHAR(50) NOT NULL,
  `experiencia_especialidad` INT NOT NULL,
  `anos_trabajo` INT NOT NULL,
  `fecha_nacimiento` DATETIME NOT NULL,
  `telefono` VARCHAR(15) NOT NULL,
  `tipo_via` VARCHAR(45) NOT NULL,
  `nombre_via` VARCHAR(45) NOT NULL,
  `numero_via` VARCHAR(45) NOT NULL,
  `piso` INT NOT NULL,
  `puerta` INT NOT NULL,
  `codigo_postal` INT NOT NULL,
  PRIMARY KEY (`id_psicologo`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `ADMINS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ADMINS` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `PLANES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PLANES` (
  `id_plan` INT NOT NULL AUTO_INCREMENT,
  `precio` DECIMAL(10,2) NOT NULL,
  `oferta` TINYINT NOT NULL,
  `descuento_oferta` FLOAT NOT NULL,
  `tipo_de_plan` TINYINT NOT NULL,
  `descripcion_servicios` VARCHAR(70) NOT NULL,
  `id_admin` INT NOT NULL,
  PRIMARY KEY (`id_plan`),
  INDEX `id_admin_idx` (`id_admin` ASC),
  CONSTRAINT `fk_plan_admin`
    FOREIGN KEY (`id_admin`)
    REFERENCES `ADMINS` (`id_admin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `AGENDA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AGENDA` (
  `id_cita` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `comentarios` VARCHAR(45) NOT NULL,
  `id_psicologo` INT NOT NULL,
  `id_paciente` INT NOT NULL,
  PRIMARY KEY (`id_cita`),
  INDEX `id_psicologo_idx` (`id_psicologo` ASC),
  INDEX `id_paciente_idx` (`id_paciente` ASC),
  CONSTRAINT `fk_agenda_psicologo`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `PSICOLOGOS` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_agenda_paciente`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `PACIENTES` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `ENTRADAS_BLOG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ENTRADAS_BLOG` (
  `id_blog` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `cuerpo` VARCHAR(5000) NOT NULL,
  `enlace_imagen` VARCHAR(45) NOT NULL,
  `aprobado` TINYINT NOT NULL,
  `id_psicologo` INT NOT NULL,
  PRIMARY KEY (`id_blog`),
  INDEX `id_psicologo_idx` (`id_psicologo` ASC),
  CONSTRAINT `fk_blog_psicologo`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `PSICOLOGOS` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `REGISTRO_SESIONES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `REGISTRO_SESIONES` (
  `id_registro_sesion` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `id_paciente` INT NOT NULL,
  `id_psicologo` INT NOT NULL,
  `resumen` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_registro_sesion`),
  INDEX `id_psicologo_idx` (`id_psicologo` ASC),
  INDEX `id_paciente_idx` (`id_paciente` ASC),
  CONSTRAINT `fk_sesion_psicologo`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `PSICOLOGOS` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sesion_paciente`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `PACIENTES` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `DOCUMENTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DOCUMENTOS` (
  `id_documento` INT NOT NULL AUTO_INCREMENT,
  `ruta` VARCHAR(250) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_documento`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `PSICOLOGOS_DOCUMENTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PSICOLOGOS_DOCUMENTOS` (
  `id_psicologo_documento` INT NOT NULL AUTO_INCREMENT,
  `id_psicologo` INT NOT NULL,
  `id_documento` INT NOT NULL,
  PRIMARY KEY (`id_psicologo_documento`),
  INDEX `id_psicologo_idx` (`id_psicologo` ASC),
  INDEX `id_documento_idx` (`id_documento` ASC),
  CONSTRAINT `fk_psicologo_documento`
    FOREIGN KEY (`id_psicologo`)
    REFERENCES `PSICOLOGOS` (`id_psicologo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_documento_psicologo`
    FOREIGN KEY (`id_documento`)
    REFERENCES `DOCUMENTOS` (`id_documento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Tabla `PACIENTES_DOCUMENTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `PACIENTES_DOCUMENTOS` (
  `id_paciente_documento` INT NOT NULL AUTO_INCREMENT,
  `id_paciente` INT NOT NULL,
  `id_documento` INT NOT NULL,
  PRIMARY KEY (`id_paciente_documento`),
  INDEX `id_paciente_idx` (`id_paciente` ASC),
  INDEX `id_documento_idx` (`id_documento` ASC),
  CONSTRAINT `fk_paciente_documento`
    FOREIGN KEY (`id_paciente`)
    REFERENCES `PACIENTES` (`id_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_documento_paciente`
    FOREIGN KEY (`id_documento`)
    REFERENCES `DOCUMENTOS` (`id_documento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
