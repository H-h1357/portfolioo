/* =========================================================
   data.js — 项目数据
   新增项目：在数组末尾追加一个对象即可，无需改动其他文件。
   版式（A 通栏大图 / B 左图右文 / C 左文右图）会按项目顺序自动交替。

   字段说明：
   title    项目名称
   category 类别（显示为色块标签）
   time     完成时间
   stack    技术栈数组
   desc     一句话简介
   image    配图地址（可换成 assets/ 下的本地图片，如 'assets/p1.jpg'）
   caption  图片下方的杂志式图注
   ========================================================= */

const PROJECTS = [
  {
    title: '星图 · 数据可视化平台',
    category: '数据可视化',
    time: '2025.06',
    stack: ['Vue 3', 'ECharts', 'Node.js'],
    desc: '面向企业的实时数据可视化平台。负责前端架构与核心图表模块，通过虚拟渲染与增量更新方案支持百万级数据流畅展示，已服务 40 余家企业客户。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20data%20analytics%20dashboard%20UI%20on%20dark%20theme%2C%20glowing%20charts%20and%20graphs%2C%20sleek%20interface%20design%2C%20purple%20accent%2C%20professional%20web%20design%20mockup%2C%20high%20quality&image_size=landscape_16_9',
    caption: '平台首页 · 实时数据大屏'
  },
  {
    title: 'Pulse 健身记录 App',
    category: '移动应用',
    time: '2025.01',
    stack: ['Flutter', 'Firebase', 'UI 设计'],
    desc: '从 0 到 1 独立完成的运动记录应用，覆盖交互设计、客户端开发到上线运营全流程，上线首月下载量突破 1 万。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fitness%20tracking%20mobile%20app%20UI%20design%20mockup%2C%20two%20smartphone%20screens%2C%20clean%20modern%20interface%2C%20vibrant%20gradient%20colors%2C%20professional%20app%20showcase&image_size=landscape_4_3',
    caption: '训练计划与数据统计页'
  },
  {
    title: 'Maison 电商品牌官网',
    category: '电商网站',
    time: '2024.09',
    stack: ['Next.js', 'Tailwind', 'Stripe'],
    desc: '为轻奢家居品牌打造的官网与商城。负责前端开发与视觉落地，Lighthouse 性能评分 98，改版后转化率提升 32%。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20e-commerce%20website%20landing%20page%20design%20mockup%2C%20minimalist%20layout%2C%20soft%20shadows%2C%20laptop%20screen%20on%20desk%2C%20modern%20web%20design&image_size=landscape_4_3',
    caption: '品牌官网首页视觉'
  },
  {
    title: '流形 · 3D 交互实验室',
    category: '创意编码',
    time: '2024.05',
    stack: ['Three.js', 'WebGL', 'GLSL'],
    desc: '一系列基于着色器的 3D 创意编码实验，探索图形学与交互设计的边界，获设计平台编辑推荐。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%203D%20geometric%20artwork%2C%20flowing%20gradient%20shapes%2C%20violet%20and%20cyan%20color%20scheme%2C%20cinematic%20lighting%2C%20digital%20art&image_size=landscape_16_9',
    caption: '着色器实验 · 流形系列'
  },
  {
    title: 'Lumen AI 知识库助手',
    category: 'AI 应用',
    time: '2023.11',
    stack: ['React', 'FastAPI', 'LLM'],
    desc: '团队知识库问答工具。负责前端与接口设计，支持多轮对话与引用溯源，将内部资料检索效率提升 3 倍。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20chat%20assistant%20interface%20design%2C%20futuristic%20dark%20UI%20with%20glowing%20elements%2C%20chat%20bubbles%2C%20modern%20tech%20aesthetic&image_size=landscape_4_3',
    caption: '知识库问答界面'
  },
  {
    title: '拾光咖啡 · 品牌焕新',
    category: '品牌视觉',
    time: '2023.03',
    stack: ['Logo', 'VI 系统', '包装'],
    desc: '为本地精品咖啡品牌完成 Logo、VI 与包装的整套视觉焕新，帮助品牌进入城市热门榜 TOP 5。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creative%20branding%20design%20showcase%2C%20business%20cards%20and%20posters%20mockup%2C%20bold%20typography%2C%20modern%20graphic%20design%2C%20studio%20lighting&image_size=landscape_4_3',
    caption: 'VI 系统与包装应用'
  }
];
