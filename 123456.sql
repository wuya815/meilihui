-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 18 日 09:10
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `meilihui`
--
CREATE DATABASE `meilihui` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `meilihui`;

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `title_en` varchar(30) CHARACTER SET utf8 NOT NULL,
  `title_cn` varchar(40) CHARACTER SET utf8 NOT NULL,
  `price` varchar(20) CHARACTER SET utf8 NOT NULL,
  `url` varchar(150) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=109 ;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`sid`, `title_en`, `title_cn`, `price`, `url`) VALUES
(37, 'KENZO', '17新款  女士黑色眼睛图案长袖套头衫', '￥\n        2,999', 'https://cdn13.mei.com/product/ZWF-113-00039/CB00034-1831701831349a.jpg@480w_640h_2e_80q'),
(38, 'KENZO', '17新款 男士白色虎头图案卫衣', '￥\n        1,999', 'https://cdn14.mei.com/product/ZWF-213-00088/CB00034-1621701620588a.jpg@480w_640h_2e_80q'),
(39, 'KENZO', '17新款 男士灰色虎头图案卫衣', '￥\n        1,399', 'https://cdn15.mei.com/product/ZWF-213-00082/CB00034-1621701620583a.jpg@480w_640h_2e_80q'),
(40, 'KENZO', '17新款 男士虎头图案刺绣套头长袖针织衫', '￥\n        1,689', 'https://cdn13.mei.com/product/KV2-215-00002/CB00051-3603679007478t.jpg@480w_640h_2e_80q'),
(41, 'KENZO', '17新款  女士黑色虎头图案长袖上衣', '￥\n        2,999', 'https://cdn12.mei.com/product/ZWF-113-00043/CB00034-1831701831352a.jpg@480w_640h_2e_80q'),
(42, 'KENZO', '17新款 纯棉后背字母印花图案男士卫衣', '￥\n        1,249', 'https://cdn14.mei.com/product/KV2-213-00014/CB00051-3603678641703t.jpg@480w_640h_2e_80q'),
(43, 'KENZO', '17新款 纯棉后背字母印花图案男士卫衣', '￥\n        1,249', 'https://cdn12.mei.com/product/KV2-213-00018/CB00051-3603678960668t.jpg@480w_640h_2e_80q'),
(44, 'KENZO', 'KENZO男士袖口logo印花卫衣', '￥\n        969', 'https://cdn15.mei.com/product/KV2-213-00032/CB00051-3603678633098a.jpg@480w_640h_2e_80q'),
(45, 'KENZO', '17新款黑色logo印花运动连帽衫', '￥\n        2,099', 'https://cdn12.mei.com/product/ZWF-102-00006/CB00034-1831701831221a.jpg@480w_640h_2e_80q'),
(46, 'KENZO', '17新款 纯棉虎头刺绣图案女士套头长袖卫衣', '￥\n        1,249', 'https://cdn12.mei.com/product/KV2-113-00017/CB00051-3603679030469t.jpg@480w_640h_2e_80q'),
(47, 'KENZO', '17新款 女士绿色字母logo蝙蝠衫', '￥\n        1,699', 'https://cdn12.mei.com/product/ZWF-113-00061/CB00034-1831701831224a.jpg@480w_640h_2e_80q'),
(48, 'KENZO', '17新款男士海军蓝色印有logo羊毛毛衣', '￥\n        1,899', 'https://cdn15.mei.com/product/ZWF-154-00006/CB00034-1831701831182a.jpg@480w_640h_2e_80q'),
(49, 'KENZO', '17新款男士黑色虎头图案短款外套', '￥\n        3,699', 'https://cdn12.mei.com/product/ZWF-202-00010/CB00034-1831701831171a.jpg@480w_640h_2e_80q'),
(50, 'KENZO', '17新款男士蓝色虎头图案运动衫', '￥\n        2,599', 'https://cdn15.mei.com/product/ZWF-213-00021/CB00034-1831701831280a.jpg@480w_640h_2e_80q'),
(51, 'KENZO', '17新款男士黑色字母logo卫衣', '￥\n        1,599', 'https://cdn12.mei.com/product/ZWF-213-00034/CB00034-1831701831199a.jpg@480w_640h_2e_80q'),
(52, 'KENZO', '17新款女士虎头印花字母logo卫衣', '￥\n        1,699', 'https://cdn15.mei.com/product/ZWF-213-00073/CB00034-1831701831164a.jpg@480w_640h_2e_80q'),
(53, 'KENZO', '17新款男士黑色虎头图案运动衫', '￥\n        1,899', 'https://cdn13.mei.com/product/ZWF-213-00055/CB00034-1831701831274a.jpg@480w_640h_2e_80q'),
(54, 'KENZO', '17新款男士绿色字母logo夹克衫', '￥\n        2,099', 'https://cdn13.mei.com/product/ZWF-213-00039/CB00034-1831701831218a.jpg@480w_640h_2e_80q'),
(55, 'KENZO', '17新款黑色老虎图案卫衣', '￥\n        2,099', 'https://cdn13.mei.com/product/ZWF-213-00043/CB00034-1831701831215a.jpg@480w_640h_2e_80q'),
(56, 'KENZO', '17新款女士红色羊毛贴花套头帽子', '\n        469', 'https://cdn13.mei.com/product/ZWF-420-00001/CB00034-1621701620593a.jpg@480w_640h_2e_80q'),
(57, 'KENZO', '17新款 女士灰色羊毛贴花套头帽子', '\n        469', 'https://cdn15.mei.com/product/ZWF-420-00002/CB00034-1621701620594a.jpg@480w_640h_2e_80q'),
(58, 'KENZO', '17新款女士黑色羊毛贴花套头帽子', '\n        469', 'https://cdn15.mei.com/product/ZWF-420-00003/CB00034-1621701620595a.jpg@480w_640h_2e_80q'),
(59, 'KENZO', '17新款 男士灰色虎头印花图案半袖T恤', '\n        879', 'https://cdn12.mei.com/product/ZWF-209-00078/CB00034-1831701831299a.jpg@480w_640h_2e_80q'),
(60, 'KENZO', '17新款男士黑色印有图案半袖上衣', '\n        1,299', 'https://cdn12.mei.com/product/ZWF-209-00096/CB00034-1831701831284a.jpg@480w_640h_2e_80q'),
(61, 'KENZO', '17新款 女士纯色牛仔长裤', '￥\n        1,249', 'https://cdn14.mei.com/product/KV2-104-00002/CB00051-3603679048013t.jpg@480w_640h_2e_80q'),
(62, 'KENZO', '17新款 字母花朵图案女士长袖卫衣', '￥\n        1,249', 'https://cdn13.mei.com/product/KV2-113-00003/CB00051-3603679059576t.jpg@480w_640h_2e_80q'),
(63, 'KENZO', '17新款 拼色设计女士虎头刺绣套头长袖针织衫', '￥\n        1,549', 'https://cdn13.mei.com/product/KV2-113-00021/CB00051-3603679034726t.jpg@480w_640h_2e_80q'),
(64, 'KENZO', '17新款 拼色设计女士长袖针织开衫', '￥\n        1,759', 'https://cdn13.mei.com/product/KV2-113-00025/CB00051-3603679031992t.jpg@480w_640h_2e_80q'),
(65, 'KENZO', '17新款 拼色设计女士长袖针织开衫', '￥\n        1,759', 'https://cdn15.mei.com/product/KV2-113-00027/CB00051-3603679031879t.jpg@480w_640h_2e_80q'),
(66, 'KENZO', '17新款 纯色女士长袖卫衣', '￥\n        969', 'https://cdn12.mei.com/product/KV2-113-00031/CB00051-3603679039202t.jpg@480w_640h_2e_80q'),
(67, 'KENZO', '17新款 字母花朵图案女士长袖卫衣', '￥\n        1,249', 'https://cdn12.mei.com/product/KV2-113-00035/CB00051-3603679059644t.jpg@480w_640h_2e_80q'),
(68, 'KENZO', 'KENZO女士K黑白针织毛衣', '￥\n        2,459', 'https://cdn14.mei.com/product/KV2-115-00002/CB00051-L1076932899401a.jpg@480w_640h_2e_80q'),
(69, 'KENZO', 'KENZO女士虎头logo拼色针织开衫', '￥\n        2,459', 'https://cdn13.mei.com/product/KV2-115-00009/CB00051-L1077081903193a.jpg@480w_640h_2e_80q'),
(70, 'KENZO', 'KENZO女士Tiger彩色条纹针织毛衣', '￥\n        2,139', 'https://cdn13.mei.com/product/KV2-115-00013/CB00051-L1076544903474a.jpg@480w_640h_2e_80q'),
(71, 'KENZO', '17新款 字母印花两面穿男士连帽休闲外套', '￥\n        2,319', 'https://cdn13.mei.com/product/KV2-202-00006/CB00051-3603678979448t.jpg@480w_640h_2e_80q'),
(72, 'KENZO', '17新款 纯棉印花字母图案男士长袖衬衫', '￥\n        1,069', 'https://cdn13.mei.com/product/KV2-206-00004/CB00051-3603678979301t.jpg@480w_640h_2e_80q'),
(73, 'SK-II', '护肤精华露230ml', '￥\n        999', 'https://cdn15.mei.com/product/20170726/20170726105906532.jpg@480w_640h_2e_80q'),
(74, 'sisley', '全能乳液125ml', '￥\n        1,199', 'https://cdn12.mei.com/product/20170915/20170915155927085.jpg@480w_640h_2e_80q'),
(75, 'THE HISTORY OF WHOO', '后天气丹花献系列及护肤品礼盒78ml', '￥\n        358', 'https://cdn15.mei.com/product/TWM-520-00026/TWM-520-00026a.jpg@480w_640h_2e_80q'),
(76, 'Lancôme', '兰蔻清滢柔肤水（粉水）400ml', '￥\n        329', 'https://cdn15.mei.com/product/LVT-502-00002/LVT-502-00002a.jpg@480w_640h_2e_80q'),
(77, 'SHISEIDO', '资生堂红色蜜露精华化妆液200ml', '￥\n        499', 'https://cdn15.mei.com/product/SUL-504-00003/SUL-504-00003a.jpg@480w_640h_2e_80q'),
(78, 'HELENA RUBINSTEIN', '悦活新生修护精华露30ml', '￥\n        899', 'https://cdn13.mei.com/product/HR4-504-00003/HR4-504-00003a.jpg@480w_640h_2e_80q'),
(79, 'Lancôme', '兰蔻柔皙轻透露 50ml', '￥\n        499', 'https://cdn13.mei.com/product/20170915/20170915161258024.jpg@480w_640h_2e_80q'),
(80, 'IPSA', '茵芙莎流金岁月凝润美肤水200ml', '￥\n        325', 'https://cdn15.mei.com/product/IXB-502-00001/IXB-502-00001a.jpg@480w_640h_2e_80q'),
(81, 'Elizabeth Arden', '伊丽莎白雅顿金致胶囊精华液30粒 14ml', '￥\n        360', 'https://cdn13.mei.com/product/EA2-504-00015/EA2-504-00015a.jpg@480w_640h_2e_80q'),
(82, 'ALBION', '爽肤精萃液330ml「健康水拯救问题肌」', '￥\n        588', 'https://cdn15.mei.com/product/AB9-502-00002/AB9-502-00002a.jpg@480w_640h_2e_80q'),
(83, 'la prairie', '莱珀妮鱼子精华琼贵面霜50ml', '\n        3,299', 'https://cdn13.mei.com/product/LUC-503-00001/LUC-503-00001a.jpg@480w_640h_2e_80q'),
(84, 'Lancôme', '兰蔻新精华肌底液75ml', '\n        1,099', 'https://cdn13.mei.com/product/LVT-504-00003/LVT-504-00003a.jpg@480w_640h_2e_80q'),
(85, 'YVES SAINT LAURENT', '纯口红 52#3.8g', '￥\n        318', 'https://cdn15.mei.com/product/20170818/20170818174329511.jpg@480w_640h_2e_80q'),
(86, 'TOM FORD', '烈焰幻魅唇膏#09 Ture Coral 3g', '￥\n        428', 'https://cdn14.mei.com/product/20170818/20170818173610604.jpg@480w_640h_2e_80q'),
(87, 'Dior', '魅惑釉唇膏 877#3.2g', '￥\n        268', 'https://cdn14.mei.com/product/20170818/20170818182341681.jpg@480w_640h_2e_80q'),
(88, 'Dior', '克丽丝汀迪奥凝脂恒久气垫粉底010 SPF40PA+++15g', '￥\n        428', 'https://cdn15.mei.com/product/DR4-503-00015/DR4-503-00015a.jpg@480w_640h_2e_80q'),
(89, 'FANCL', 'FANCL果味饮料（含胶原蛋白）50ml*10', '￥\n        348', 'https://cdn14.mei.com/product/FC5-515-00004/FC5-515-00004b.jpg@480w_640h_2e_80q'),
(90, 'FANCL', 'FANCL果味饮料（含朝鲜蓟）50ml*10', '￥\n        348', 'https://cdn13.mei.com/product/FC5-515-00010/FC5-515-00010a.jpg@480w_640h_2e_80q'),
(91, 'LA MER', '精华面霜60ml', '￥\n        2,268', 'https://cdn13.mei.com/product/LM1-504-00004/LM1-504-00004a.jpg@480w_640h_2e_80q'),
(92, 'LA MER', '修护精萃液150ml', '￥\n        999', 'https://cdn15.mei.com/product/lamer20140928/b/LM1-502-00002a.jpg@480w_640h_2e_80q'),
(93, 'TriPollar', 'Tripollar Stop 射频美容仪 黑色', '￥\n        2,888', 'https://cdn15.mei.com/product/TP6-917-00007/TP6-917-00007a.jpg@480w_640h_2e_80q'),
(94, 'Estée  Lauder', '雅诗兰黛特润修护肌透精华露50ml', '￥\n        599', 'https://cdn15.mei.com/product/20170612/20170612110852011.jpg@480w_640h_2e_80q'),
(95, 'Estée  Lauder', '雅诗兰黛肌透修护眼部精华霜15ml', '￥\n        388', 'https://cdn15.mei.com/product/20170612/20170612110834316.jpg@480w_640h_2e_80q'),
(96, 'SHISEIDO', '红妍肌活眼部精华露15ml', '￥\n        448', 'https://cdn15.mei.com/product/SH5-518-00013/SH5-518-00013a.jpg@480w_640h_2e_80q'),
(97, 'sisley', '瞬间紧致眼膜30ml', '￥\n        759', 'https://cdn15.mei.com/product/20170915/20170915200552485.jpg@480w_640h_2e_80q'),
(98, 'Clé de Peau Beauté', '沁肌紧肤蜜170ml 「水磨精华液」', '￥\n        768', 'https://cdn15.mei.com/product/20170428/20170428183656093.jpg@480w_640h_2e_80q'),
(99, 'SHISEIDO', '安热沙防晒露SPF30+ 60ml', '￥\n        229', 'https://cdn13.mei.com/product/20170915/20170915161209541.jpg@480w_640h_2e_80q'),
(100, 'SHISEIDO', '【蓝胖子】新艳阳夏臻效水动力防护乳50ml', '￥\n        288', 'https://cdn13.mei.com/product/SVF-519-00002/SVF-519-00002a.jpg@480w_640h_2e_80q'),
(101, 'Estée  Lauder', '雅诗兰黛鲜活亮采果萃水（滋润型）200ml', '￥\n        349', 'https://cdn15.mei.com/product/EXB-502-00004/EXB-502-00004a.jpg@480w_640h_2e_80q'),
(102, 'Clé de Peau Beauté', '肌肤之钥奢雅极洗颜皂 100g', '￥\n        788', 'https://cdn13.mei.com/product/CY8-579-00001/CY8-579-00001a.jpg@480w_640h_2e_80q'),
(103, 'PETERTHOMASROTH', 'PTR彼得罗夫玫 瑰舒润瞬采修护面膜150ml 焕采补水提亮', '￥\n        228', 'https://cdn13.mei.com/product/PT3-529-00012/PT3-529-00012a.jpg@480w_640h_2e_80q'),
(104, 'KéRASTASE', '黑钻凝时香氛修护油120ml', '￥\n        538', 'https://cdn15.mei.com/product/KYU-525-00050/KYU-525-00050a.jpg@480w_640h_2e_80q'),
(105, 'KéRASTASE', '黑钻凝时洗发水1L', '￥\n        888', 'https://cdn15.mei.com/product/KYU-525-00052/KYU-525-00052a.jpg@480w_640h_2e_80q'),
(106, 'KéRASTASE', 'KERASTASE卡诗 双重菁纯修护液100ml', '￥\n        338', 'https://cdn13.mei.com/product/KYU-525-00053/KYU-525-00053a.jpg@480w_640h_2e_80q'),
(107, 'ERNO LASZLO', '水滢冰白面膜4x37ml 4x5.5g', '￥\n        448', 'https://cdn12.mei.com/product/20170919/20170919103547837.jpg@480w_640h_2e_80q'),
(108, 'DECORTÉ', '赋活精华露170ml', '￥\n        628', 'https://cdn15.mei.com/product/DZR-503-00007/DZR-503-00007a.jpg@480w_640h_2e_80q');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) NOT NULL,
  `phone` char(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=131 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `username`, `password`, `phone`) VALUES
(125, '33', '182be0c5cdcd5072bb1864cdee4d3d6e', '33'),
(126, '11', '6512bd43d9caa6e02c990b0a82652dca', '11'),
(127, '', 'd41d8cd98f00b204e9800998ecf8427e', ''),
(128, '1', 'd41d8cd98f00b204e9800998ecf8427e', ''),
(129, '22', 'b6d767d2f8ed5d21a44b0e5886680cb9', '22'),
(130, '13711111111', 'e10adc3949ba59abbe56e057f20f883e', '13711111111');
