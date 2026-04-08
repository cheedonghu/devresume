export const SAMPLE_YAML = `
basics:
  name: 姓名
  label: 求职岗位
  email: youremail@gmail.com
  phone: (+86) 136-8888-8888
  url: https://www.yourblog.com
  summary: >
    熟练掌握全栈开发和敏捷开发方法，具备 10 年以上的软件开发经验，
    拥有扎实的架构设计能力和跨团队协作经验。
  profiles:
    - network: github
      url: https://github.com/yourname

responsibilitiesAndAchievements:
  - title: "**对账系统重构与解耦**"
    highlights:
      - 针对 N:N 复杂对账逻辑高度耦合问题，引入依赖倒置原则，抽象“核对方式”与“核对渠道”，显著提升代码可读性与扩展性
      - 基于发布订阅模式 + RabbitMQ 广播机制，拆分对账后通知、分账、充值、开票等流程，实现业务解耦
  - title: "**稳定性与交付效率优化**"
    highlights:
      - 推动关键链路监控与告警治理，缩短线上问题定位时间，提升系统稳定性
      - 梳理研发协作流程，减少重复沟通成本，提升需求交付效率

work:
  - name: FLAG 公司
    position: 软件工程师
    location: 上海，中国
    url: http://piedpiper.example.com
    summary: 负责核心业务模块开发与系统优化。
    startDate: 2013-12
    endDate: 2014-11
    highlights:
      - 设计并优化数据库结构，将查询时间降低 20%。
      - 推动复杂业务场景落地，提升系统扩展能力。
      - 参与性能优化，将关键接口响应时间从 7 秒降低到 2 秒。

projects:
  - name: Pied Piper 音频压缩算法
    description: 一种全新的音频压缩算法，能够提供高效且无损的音频压缩解决方案。
    startDate: 2016-08
    endDate: 2018-08
    url: http://missdirection.example.com
    highlights:
      - 要点 1
      - 要点 2
      - 要点 3

education:
  - institution: 燕京大学
    url: https://www.ou.edu/
    area: 计算机科学 学士
    startDate: 2014-06

awards:
  - title: 与工作有关的证书
    date: 2014-11
    awarder: 颁发者
    summary: 证书效果描述
  - title: 你的博客
    awarder: 博客专注领域
    summary: 访问量等数据

skills:
  - name: 编程语言
    keywords: ["Java", "Python", "JavaScript"]
  - name: 数据库
    keywords: ["MySQL", "MongoDB"]
  - name: 网络通信
    keywords: ["HTTP", "RPC"]

volunteer:
  - organization: CoderDojo
    position: Teacher
    url: http://coderdojo.example.com/
    startDate: 2012-01
    endDate: 2013-01
    highlights:
      - Awarded 'Teacher of the Month'
`;
