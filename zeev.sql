

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'general'),(2,'rock'),(3,'pop'),(4,'folk'),(5,'Eurovision'),(6,'hebrew');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (4,'The Director\'s Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now! “Rammstein: Paris” is ...','https://i.ytimg.com/vi/W3q8Od5qJio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZDa4rTaZKPSiZdzz_dQ6sdTu4eg','The Director\'s Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now! “Rammstein: Paris” is ...','https://www.youtube.com/watch?v=U5HAEzEk8QM',1),(5,'o show é legalzinho...','https://i.ytimg.com/vi/LZQdWd_vdoM/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARgdIDgofzAP&rs=AOn4CLBM2bHa4irDZ4tUuLqGCOltOYrkqg','Blue Man Group - part 01','https://www.youtube.com/watch?v=LZQdWd_vdoM',2),(6,'עקב שוואקי - ישתבח שמו Yaakov Shwekey - Yishtabach Shemo Lyrics by Miriam Israeli Composed by Yitzy Waldner Arranged by ...','https://i.ytimg.com/vi/E_hzOuAK5gY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmYI2j_1OiiVPS_QMPdas6oRHX-Q','יעקב שוואקי - ישתבח שמו','https://www.youtube.com/watch?v=E_hzOuAK5gY',3),(24,'Frankie & Red Lobster | Gabriel Iglesias','https://i.ytimg.com/vi/DpBt__zOd8E/mqdefault.jpg','Gabriel Iglesias','https://www.youtube.com/watch?v=DpBt__zOd8E',1);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
