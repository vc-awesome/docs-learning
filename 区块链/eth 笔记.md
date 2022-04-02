## Ethereum | 官方文档

<https://ethereum.org/zh/>



## Ethereum | Web3



## Ethereum | 官方API

<https://cn.etherscan.com/apis>



## Ethereum | Infura

> 通俗来讲：以太坊节点服务器
>
> `Infura` 提供了托管的以太坊节点，通过 `Infura` 可以将你的智能合约发布到以太坊网络上，为去中心化应用提供基础架构。易于使用的 API 与开发人员工具，为以太坊和 IPFS 提供安全、可靠、可扩展的访问。
>
> 以太坊网络：以太坊集群节点或者使用`Infura`集群节点，由于考虑到自己搭建集群成本和同步节点成本，所以优先选用 `Infura`

<https://infura.io/>



## Ethereum | 书籍

<https://github.com/ethereumbook/ethereumbook>



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

> 我们使用Keccak-256来计算这个公钥的_hash_：
>
> ```bash
> Keccak256(K) = 2a5bc342ed616b5ba5732269001d3f1ef827552ae1114027bd3ecf1f086ba0f9
> ```
>
> 然后我们只保留最后的20个字节（大端序中的最低有效字节），这是我们的以太坊地址：
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

非确定性(随机)钱包 使用`keystore` 文件保存

确定性(种子)钱包

种子 `seed`

助记词 `mnemonic`

区块

交易