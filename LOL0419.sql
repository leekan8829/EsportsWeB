-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lol
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `character`
--

DROP TABLE IF EXISTS `character`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `character` (
  `chid` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `feature` varchar(45) DEFAULT NULL,
  `pick_rate` decimal(5,2) DEFAULT NULL,
  `ban_rate` decimal(5,2) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`chid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character`
--

LOCK TABLES `character` WRITE;
/*!40000 ALTER TABLE `character` DISABLE KEYS */;
INSERT INTO `character` VALUES (1,'Zed','mid',0.10,1.00,NULL),(2,'Tresh','sup',0.10,1.00,NULL),(3,'Van','adc',0.10,1.00,NULL),(4,'Garen','top',0.10,1.00,NULL),(5,'LeeSin','jg',0.10,1.00,NULL);
/*!40000 ALTER TABLE `character` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clan`
--

DROP TABLE IF EXISTS `clan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clan` (
  `cid` int NOT NULL,
  `belong` int DEFAULT NULL,
  `rank` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `keyy1_idx` (`belong`),
  CONSTRAINT `dkey_1` FOREIGN KEY (`belong`) REFERENCES `division` (`did`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clan`
--

LOCK TABLES `clan` WRITE;
/*!40000 ALTER TABLE `clan` DISABLE KEYS */;
INSERT INTO `clan` VALUES (1,1,'A','T1','/images/logo/T1logo_profile2.png'),(2,1,'S','DK','/images/logo/DWG_KIAlogo_square.png'),(3,2,'S','TES','/images/logo/Top_Esportslogo_square.png'),(4,2,'B','IG','/images/logo/Invictus_Gaminglogo_square.png');
/*!40000 ALTER TABLE `clan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `division`
--

DROP TABLE IF EXISTS `division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division` (
  `did` int NOT NULL,
  `area_name` varchar(45) DEFAULT NULL,
  `full_name` varchar(45) DEFAULT NULL,
  `founded` int DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division`
--

LOCK TABLES `division` WRITE;
/*!40000 ALTER TABLE `division` DISABLE KEYS */;
INSERT INTO `division` VALUES (1,'LCK','League of Legneds Champions Korea',2013),(2,'LPL','League of Legens Pro League',2013);
/*!40000 ALTER TABLE `division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `pid` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `real_name` varchar(45) DEFAULT NULL,
  `belong_clan` int DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `main` int DEFAULT NULL,
  `world_champ` int DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pid`),
  KEY `p_id_idx` (`belong_clan`),
  KEY `p_id2_idx` (`main`),
  CONSTRAINT `p_id` FOREIGN KEY (`belong_clan`) REFERENCES `clan` (`cid`),
  CONSTRAINT `p_id2` FOREIGN KEY (`main`) REFERENCES `character` (`chid`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'Faker','李相赫',1,'mid',1,3,'/images/T1/T1_Faker_2021_Split_1.png'),(2,'Canna','金彰東',1,'top',4,3,'/images/T1/T1_Canna_2020_Split_1.png'),(3,'Cuzz','文友贊',1,'jg',5,3,'/images/T1/T1_Cuzz_2021_Split_1.png'),(4,'Teddy','朴辰成',1,'adc',3,3,'/images/T1/T1_Teddy_2021_Split_1.png'),(5,'Keria','柳岷析',1,'sup',2,3,'/images/T1/T1_Keria_2021_Split_1.png'),(6,'TheShy','姜承錄',4,'top',4,1,'/images/ig/IG_TheShy_2021_Split_1.png'),(7,'Ning','彭立勛',4,'jg',5,1,'/images/ig/IG_Ning_2020_Split_2.png'),(8,'Rookie','宋義進',4,'mid',1,1,'/images/ig/IG_Rookie_2021_Split_1.png'),(9,'Puff','丁旺',4,'adc',3,1,'/images/ig/IG_Puff_2021_Split_1.png'),(10,'Toyzz','劉偉健',4,'sup',1,1,'/images/ig/IG_Baolan_2021_Split_1.png'),(11,'Baolan','王柳羿',4,'sup',2,1,'/images/ig/IG_Baolan_2021_Split_1.png'),(12,'Mistake','摸使',4,'sup',2,1,'/images/ig/IG_Baolan_2021_Split_1.png');
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-19 17:39:28
