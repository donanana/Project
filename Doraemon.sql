-- MySQL dump 10.13  Distrib 5.7.28, for macos10.14 (x86_64)
--
-- Host: localhost    Database: doraemon
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `cid` int(11) NOT NULL,
  `type` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (0,'其他'),(1,'哆啦Ａ夢'),(2,'大雄'),(3,'靜香'),(4,'小夫'),(5,'胖虎');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main`
--

DROP TABLE IF EXISTS `main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `main` (
  `id` int(11) DEFAULT NULL,
  `hid` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `firstName` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `lastName` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `englishName` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `birthday` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `starSign` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `hobby` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `afraid` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `character` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `intro_img` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`hid`),
  KEY `fk2_idx` (`id`),
  CONSTRAINT `fk2` FOREIGN KEY (`id`) REFERENCES `category` (`cid`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES (4,1,'小夫','小夫','骨川','Suneo','2月29日','雙魚座',135,45,'搜集模型','綁架','常常炫耀家裡很有錢。不相信幽靈和妖怪，經常用科學來解說這些超自然的事物，但其實很懼怕這些東西。善長阿諛奉承，卻對自己的身高太矮小感到苦惱。喜歡追求流行，興趣相當多樣，收藏品也很豐富。','suneoMain'),(3,2,'靜香','靜香','源','Shizuka','5月2日','金牛座',140,40,'拉小提琴','打雷','因為非常愛乾淨，所以很喜歡洗澡。是個可愛的小女生，既優秀，功課又好，很受大家的歡迎，溫柔善良，富有正義感，對於弱小會路見不平，將來的結婚對象還是選擇大雄。','shizukaMain'),(1,3,'哆啦Ａ夢','哆啦Ａ夢',NULL,'Doraemon','西元2112年9月3日','處女座',129,129,'吃銅鑼燒','老鼠','為了滿足大雄的夢想和願望，拿出未來道具幫助大雄，但常常會引發騷動經常在最後會引起不好的效果，耳朵被老鼠咬掉，因此經常被成「狸貓」，這點他本人也很厭惡。與大雄友情深厚。','doraemonMain'),(2,4,'大雄','大雄','野比','Nobita','8月7日','獅子座',140,45,'翻花繩、睡覺','老師','10歲大的小學生，運動和唸書都不在行，雖然是個很喜歡睡午覺的懶惰蟲，不論做什麼事都會失敗，卻非常善解人意、心地善良會為別人的不幸而傷心，會祈求別人幸福的人的小男生。','nobitaMain'),(5,5,'胖虎','武（胖虎）','剛田','Gian','6月15日','雙子座',155,50,'唱歌','媽媽','雖然是個粗暴的孩子王，不過很重視友情。在學校裡總是耀武揚威，一回到家裡卻對媽媽沒有絲毫抵抗能力，對妹妹小珠則是疼愛有加。內心純情，面胴喜歡的女孩會變十分害羞。','gianMain');
/*!40000 ALTER TABLE `main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `cid` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `people_img` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idx` (`cid`),
  CONSTRAINT `fk` FOREIGN KEY (`cid`) REFERENCES `category` (`cid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `people`
--

LOCK TABLES `people` WRITE;
/*!40000 ALTER TABLE `people` DISABLE KEYS */;
INSERT INTO `people` VALUES (1,1,'哆啦Ａ夢','doraemon'),(2,2,'大雄','nobita'),(3,3,'靜香','shizuka'),(4,4,'小夫','suneo'),(5,5,'胖虎','gian'),(6,2,'大雄媽媽','nobitaMa'),(7,2,'大雄爸爸','nobitaFa'),(8,1,'哆啦美','dorami'),(9,5,'胖虎媽媽','gianMa'),(10,3,'靜香媽媽','shizukaMa'),(11,4,'小夫媽媽','suneoMa'),(12,5,'胖虎妹妹','gianSis'),(13,0,'老師','teacher'),(14,0,'出木杉','dekisugi'),(15,0,'雷公','kaminari'),(16,1,'世修','sewashi'),(17,5,'胖虎爸爸','gianFa'),(18,4,'小夫爸爸','suneoFa'),(19,3,'靜香爸爸','shiziFa'),(20,1,'廠長','kojocho'),(21,1,'帕瓦Ａ夢','poweremon'),(22,1,'迷你哆啦','miniDora'),(23,1,'哆啦咪子','noramyaako');
/*!40000 ALTER TABLE `people` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-31  9:49:52
