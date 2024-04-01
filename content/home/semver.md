# 软件版本

## 简介

使用 NPM 下载和发布代码时都会接触到版本号。NPM 使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为 `X.Y.Z` 三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

如果只是修复 bug，需要更新 Z 位。
如果是新增了功能，但是向下兼容，需要更新 Y 位。
如果有大变动，向下不兼容，需要更新 X 位。
版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如 "argv" :  "0.0.x" 表示依赖于 0.0.x 系列的最新版 argv。

NPM 支持的所有版本号范围指定方式可以查看官方文档。

## 用法

1. https://stylelint.io/about/semantic-versioning - *Semantic versioning | Stylelint*

## 版本

| 序号 | 名称             | 描述                                                         |
| ---- | ---------------- | ------------------------------------------------------------ |
| 1    | *`stable`*         | 稳定版                                                       |
| 2    | *`alpha`*          | 内测，即开发团队内部测试的版本或者有限用户的体验测试版本（内部版本） |
| 3    | *`beta`*           | 公测，即针对所有用户公开的测试版本                           |
| 4    | *`rc`*             | *Release-Candidate*（发行候选版本） 做过一些修改，成为正式发布的候选版本时，以前叫做 *gamma*（即将作为正式版发布） |
| 5    | *`lts`*          | 长期维护版本                                                 |
| 6    | **demo**         | 演示版                                                       |
| 7    | **enhance**      | 增强版                                                       |
| 8    | **free**         | 自由版                                                       |
| 9    | **full version** | 完整版，即正式版                                             |
| 10   | **release**      | 发行版                                                       |
| 11   | **standard**     | 标准版                                                       |
| 12   | **ultimate**     | 旗舰版                                                       |
| 13   | **upgrade**      | 升级版                                                       |
| 14   | **preview**       | 预览版

## 参考

1. 👍 https://semver.org/lang/zh-CN/ - *语义化版本 2.0.0*

2. https://blog.csdn.net/qq_36761831/article/details/83188138 - *软件的Alpha、Beta、GM、OEM、LTS等版本的含义*

3. 👍 https://baike.baidu.com/item/beta/640969 - *beta （英语单词）*

4. https://cloud.tencent.com/developer/article/1341130 - *语义版本号（Semantic Versioning）*

5. https://cloud.tencent.com/developer/article/1178050 - *版本号命名指南*
