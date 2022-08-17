todo...

> 区块链入门教程 - 阮一峰的网络日志 https://www.ruanyifeng.com/blog/2017/12/blockchain-tutorial.html



## todo :memo:

开发手册（开发者中心）

 

区块浏览器

## networks

?> RPC 节点

https://learnblockchain.cn/article/3232 *一文拥有以太坊系链的rpc公用节点和水龙头信息，还有MetaMask的配置方式*

https://www.toutang.net/shipinjiaocheng/776.html *区块链项目测试网RPC设置和测试币水龙头领取地址*

https://www.tuoniaox.com/news/p-507742.html *最全 | 小狐狸各网络配置梳理及部分网络测试币领取地址*

### public

https://chainlist.org/zh 👍 *Chainlist 是 EVM 网络的列表。 用户可以使用这些信息将他们的钱包和 Web3 中间件提供商连接到适当的Chain ID 和网络 ID，以连接到正确的链。*

---

### ethereum

https://infura.io :us: :cn: *Ethereum API | IPFS API & Gateway | ETH Nodes as a Service | Infura*

http://cw.hubwiz.com/card/c/infura-api/ *Infura开发手册 - 汇智网*

https://blog.csdn.net/fangdengfu123/article/details/82621537 *使用infura 提供的 API获取以太坊交易记录*

https://www.learnblockchain.cn/article/1792 *以太坊可用RPC节点列表*

*---- start*

**节点**

以太坊节点网络

Infura

部署节点服务器

*---- end*

### binance

https://docs.pancakeswap.finance/get-started/connection-guide :us: *Connect Your Wallet to PancakeSwap - PancakeSwap*

全（主）节点 fullNode

- 全节点搭建

  https://learnblockchain.cn/article/3621 *超级详细BSC链智能全节点搭建全教程详细步骤及配置要求等*

测试节点 solidityNode



- 参考文档

  https://benpaodewoniu.github.io/2021/12/06/tomoon9/ *tomoon | 节点的选择*

  https://guide.moonrat.finance/metamask-extension/set-bsc-network-metamask-extension :us: *How to set Binance Smart Chain (BSC) network on MetaMask Extension*





主网 mainGatewayAddress

侧网 sideGatewayAddress



主链 mainchain

侧链 sidechain



公链



## web3

https://github.com/ChainSafe/web3.js

https://github.com/sc0Vu/web3.php



Web3.js API 中文文档 https://web3.tryblockchain.org/index.html



## smart contract

> 智能合约



## github

https://github.com/iexbase :us: *A decentralized application and tool venture production studio*



## platform

### 交易平台

https://www.okx.com <i class="bi bi-ladder"></i> :us: :cn: *全球领先的比特币交易平台_比特币价格行情 | 欧易*

#### 火币

官网：https://www.huobi.com/ <i class="bi bi-ladder"></i> 

火币行情 api https://api.huobi.pro/market/tickers <i class="bi bi-ladder"></i>

API文档：https://huobiapi.github.io/docs/spot/v1/cn/#5ea2e0cde2

Github：https://github.com/huobiapi



### 信息平台

?>
更多内容，可查看网站的友情链接

Tokenview https://tokenview.com/ :cn: :us: *区块链浏览器|以太坊浏览器|比特币浏览器|Tokenview*

金色财经 https://www.jinse.com/ :cn: *金色财经_在这里，读懂区块链*

区块链导航 https://dexnav.com/ :cn: :us: *Dexnav 区块链导航网Dexnav 区块链导航|区块链工具|币圈导航|币圈工具|链上工具币圈导航网*

#### 非小号

官网：https://www.feixiaohao.co/ :cn: *非小号 - 比特币行情价格_专注数字货币行业大数据分析*



## dapp

👀 

https://dontbuymeme.com/

https://p.td/

https://biswap.org/

https://ido.parrot.fi/

https://cryptomines.app/

https://www.yuga.com/



## glossary <i class="ri-fire-line light-red"></i>

👍 以太坊词汇表 https://ethereum.org/zh/glossary/

❓
DEX（去中心化交易所）  
💡
https://ethereum.org/zh/glossary/#dex

❓
DeFi（去中心化金融）  
💡
https://ethereum.org/zh/glossary/#defi

❓
NFT（非同质化代币）  
💡
https://ethereum.org/zh/glossary/#nft



> Question
> ❓
>
> Answer
> 👌
> 💡



## develop

?> api

- 币动
  http://bidong.io/

- CoinDog
  - ~~CoinDog官网~~
    ~~http://www.coindog.com/~~
  - ~~行情接口 https://github.com/CoinDogApi/coindog-api/wiki/%E8%A1%8C%E6%83%85%E6%8E%A5%E5%8F%A3~~
  - ~~币值排行（前100名）*不稳定偶尔会雪崩* http://api.coindog.com/api/v1/currency/ranks~~

- 金色财经
  - api
    https://api.jinse.com/v6/coin/getList?page=1&limit=50&sortby=market_cap&order=desc&search=&currency=CNY
  - 行情 api
    https://api.jinse.com/v6/m/information/list?catelogue_key=fenxishishuo&flag=down&limit=10&information_id=0&version=9.9.9&_source=m
  - 学院 api
    https://api.jinse.com/v6/m/information/list?catelogue_key=xueyuan&flag=down&limit=10&information_id=0&version=9.9.9&_source=m



### 获取 USD/CNY 汇率

https://dncapi.fxhapp.com/api/home/global `data.usdt_price_cny`

https://dncapi.fxhapp.com/api/coin/web-rate `data[12].cny`

https://www.namecheap.com/support/payment/currency-exchange-rates/  - *Namecheap.com - Currency Exchange Rates*

### 获取新闻快讯

https://dncapi.fxhapp.xyz/api/v4/news/hot?per_page=20&webp=1 :cn: via https://www.feixiaohao.co/

https://tokeninsight.com/api/bulletin/findNewsPages?lan=en&page=1&size=8 :cn: :us: via https://tokeninsight.com/
