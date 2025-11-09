-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mangareadingdata
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mangareadingdata
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mangareadingdata` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema user_data
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema user_data
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `user_data` ;
USE `mangareadingdata` ;

-- -----------------------------------------------------
-- Table `user_data`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_data`.`accounts` (
  `user_id` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mangareadingdata`.`reading_summary_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mangareadingdata`.`reading_summary_data` (
  `user_id` INT NOT NULL,
  `manga_read_count` INT NOT NULL,
  `manga_chapters_read_count` INT NOT NULL,
  `current_status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id_accounts`
    FOREIGN KEY (`user_id`)
    REFERENCES `user_data`.`accounts` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mangareadingdata`.`pace_prediction_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mangareadingdata`.`pace_prediction_data` (
  `user_id` INT NOT NULL,
  `average_pace` INT NOT NULL,
  `manga_title` VARCHAR(128) NOT NULL,
  `predicted_finish_day` INT NOT NULL,
  `pace_target` VARCHAR(128) NOT NULL,
  `pace_predicted_average` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mangareadingdata`.`reading_summary_data` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id_account`
    FOREIGN KEY (`user_id`)
    REFERENCES `user_data`.`accounts` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `user_data` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
