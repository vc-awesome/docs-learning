# Ethereum

![](https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9019e/hero.webp)

## Introduction

> 以太坊是一个全球性的、去中心化的金融和新型应用程序平台。在以太坊，我们可以通过代码来控制资产，并建立世界上任何地方皆可访问的应用程序。
>
> <cite>—— [首页 | ethereum.org](https://ethereum.org/zh/)</cite>

![GitHub last commit](https://badgen.net/github/last-commit/ethereum/ethereum-org-website?icon=github&color=blue)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/ethereum/ethereum-org-website?display_date=published_at&logo=github)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ethereum/ethereum-org-website?logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/ethereum/ethereum-org-website?style=social)

## Official

官网：

1. https://ethereum.org/zh/

API：

1. https://cn.etherscan.com/apis

GitHub：

1. https://github.com/ethereum/ - *ethereum · GitHub*
2. https://github.com/ethereum/ethereum-org-website - *GitHub - ethereum/ethereum-org-website: Ethereum.org is a primary online resource for the Ethereum community.*

区块浏览器：

1. https://cn.etherscan.com/

开发者中心：

1. https://ethereum.org/zh/developers/

## Web3

## Infura

> 通俗来讲：以太坊节点服务器
>
> `Infura` 提供了托管的以太坊节点，通过 `Infura` 可以将你的智能合约发布到以太坊网络上，为去中心化应用提供基础架构。易于使用的 API 与开发人员工具，为以太坊和 IPFS 提供安全、可靠、可扩展的访问。
>
> 以太坊网络：以太坊集群节点或者使用 `Infura` 集群节点，由于考虑到自己搭建集群成本和同步节点成本，所以优先选用 `Infura`

<https://infura.io/>

## Book

<https://github.com/ethereumbook/ethereumbook> - *GitHub - ethereumbook/ethereumbook: Mastering Ethereum, by Andreas M. Antonopoulos, Gavin Wood*

![GitHub last commit](https://badgen.net/github/last-commit/ethereumbook/ethereumbook?icon=github&color=blue)
![GitHub Repo stars](https://img.shields.io/github/stars/ethereumbook/ethereumbook?style=social)

1. 配置以太坊节点

密钥 `privite key`

使用椭圆曲线乘法来派生一个公钥：`f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315`

公钥 `public key`

`6e145ccef1033dea239875dd00dfb4fee6e3348b84985c92f103444683bae07b83b5c38e5e2b0c8529d7fa3f64d46daa1ece2d9ac14cab9477d042c84c32ccd0`

> 以太坊地址是 *唯一标识符* *unique identifiers*，它们是使用单向哈希函数（Keccak-256）从公钥或合约派生的。
>
> 在我们之前的例子中，我们从一个私钥开始，并使用椭圆曲线乘法来派生一个公钥：
>
> Private Key *k*:
>
> ```bash
> k = f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315
> ```
>
> Public Key *K* (X and Y coordinates concatenated and shown as hex):
>
> ```bash
> K = 6e145ccef1033dea239875dd00dfb4fee6e3348b84985c92f103444683bae07b83b5c38e5e2b0c8529d7fa3f64d46daa1ece2d9ac14cab9477d042c84c32ccd0
> ```
>
> | Warning | 值得注意的是，在计算地址时，公钥没有用前缀（十六进制）04格式化。 |
> | ------- | ------------------------------------------------------------ |
> |         |                                                              |

以太坊地址 `address`

> 我们使用 Keccak-256 来计算这个公钥的 _hash_：
>
> ```bash
> Keccak256(K) = 2a5bc342ed616b5ba5732269001d3f1ef827552ae1114027bd3ecf1f086ba0f9
> ```
>
> 然后我们只保留最后的 20 个字节（大端序中的最低有效字节），这是我们的以太坊地址：
>
> ```bash
> 001d3f1ef827552ae1114027bd3ecf1f086ba0f9
> ```
>
> 大多数情况下，你会看到带有前缀“0x”的以太坊地址，表明它是十六进制编码，如下所示：
>
> ```bash
> 0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
> ```

合约 `contracts`

`key pair`

以太坊的加密哈希函数 `Keccak-256`

非确定性(随机)钱包 使用 `keystore` 文件保存

确定性(种子)钱包

种子 `seed`

助记词 `mnemonic`

区块

交易
