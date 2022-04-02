/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : service

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 15/03/2021 11:03:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ev_money_in
-- ----------------------------
DROP TABLE IF EXISTS `ev_money_in`;
CREATE TABLE `ev_money_in`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `order_num` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统交易单号',
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户地址',
  `currency_id` int(11) NULL DEFAULT 1 COMMENT '交易币种',
  `money` decimal(20, 8) NULL DEFAULT NULL COMMENT '金额',
  `status` tinyint(1) NULL DEFAULT 0 COMMENT '状态 1为完成 2转账中',
  `hash_fee` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手续费交易ID',
  `status_fee` tinyint(1) NULL DEFAULT 0 COMMENT '手续费状态 0未处理 2转手续费 1 手续费到账',
  `fee_money` decimal(20, 8) NULL DEFAULT NULL COMMENT '手续费金额',
  `in_hash` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '转入的交易ID',
  `fromaddress` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '金额来源地址',
  `all_address` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '总账户地址',
  `create_time` int(11) NULL DEFAULT NULL COMMENT '创建时间',
  `fee_time` int(11) NULL DEFAULT NULL COMMENT '手续费ID',
  `hash` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '划款的交易ID',
  `pay_time` int(11) NULL DEFAULT NULL COMMENT '划款时间',
  `num` int(11) NULL DEFAULT NULL,
  `fee_gas` int(10) NULL DEFAULT NULL COMMENT '燃料',
  `nonce` int(10) NULL DEFAULT 0,
  `is_withdrawal` int(1) NULL DEFAULT 0 COMMENT '是否为提现',
  `transaction_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `block_number` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `token_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `relation_id` int(10) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `mid`(`user_id`) USING BTREE,
  INDEX `status_free`(`status_fee`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `fee_time`(`fee_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
