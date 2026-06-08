const POLICY = {
  year: 2026,
  sourceDate: "2026-05-18",
  updatedAt: "2026-06-06",
  batches: {
    "regular-bachelor": {
      name: "普通本科批",
      maxGroups: 45,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "实行平行志愿，设置 45 个院校专业组志愿。"
    },
    "regular-junior": {
      name: "普通高职（专科）批",
      maxGroups: 45,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "实行平行志愿，设置 45 个院校专业组志愿。"
    },
    "early-parallel": {
      name: "提前批平行类别",
      maxGroups: 20,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "军事、公安、公费师范、优师专项等类型通常分别设置 20 个院校专业组志愿。"
    },
    "special-plan": {
      name: "专项计划",
      maxGroups: 20,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "国家专项、地方专项、高校专项均实行平行志愿，分别设置 20 个院校专业组志愿。"
    },
    "art-unified": {
      name: "艺术类统考批",
      maxGroups: 20,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "艺术统考本科/专科批实行平行志愿，设置 20 个院校专业组志愿。"
    },
    sports: {
      name: "体育类批",
      maxGroups: 20,
      maxMajors: 6,
      parallel: true,
      adjustment: true,
      note: "体育类本科和高职（专科）批均实行平行志愿，设置 20 个院校专业组志愿。"
    }
  },
  summary: [
    ["模式", "普通高考实行“3+1+2”，满分 750 分。"],
    ["志愿单位", "采用“院校专业组”作为志愿填报基本单位。"],
    ["普通批", "本科普通批、专科普通批均为 45 个院校专业组，每组 6 个专业志愿及服从调剂。"],
    ["提前/专项", "平行类别通常为 20 个院校专业组；部分司法、其他类为 1 个院校专业组。"],
    ["投档", "普通类平行志愿按考生总分排序，再按院校专业组志愿顺序检索投档。"],
    ["同分排序", "总分相同时，依次参考语文数学两科之和、语文或数学最高分、外语、首选科目、再选科目最高分。"]
  ]
};

const PROVINCE_GUIDES = [
  ["北京市", "3+3", "https://www.bjeea.cn/", "本科普通批以院校专业组为单位，需关注综合素质评价和专业选考要求。"],
  ["天津市", "3+3", "http://www.zhaokao.net/", "普通本科批实行院校专业组志愿，按考试院公布时间分阶段填报。"],
  ["河北省", "3+1+2", "http://www.hebeea.edu.cn/", "以“专业（类）+学校”为主的平行志愿模式，历史/物理分列计划。"],
  ["山西省", "3+1+2", "http://www.sxkszx.cn/", "2025 年起进入新高考，需按物理/历史和再选科目核对专业要求。"],
  ["内蒙古自治区", "3+1+2", "https://www.nm.zsks.cn/", "2025 年起实行 3+1+2，填报时重点核对动态排名/网报公告。"],
  ["辽宁省", "3+1+2", "https://www.lnzsks.com/", "按物理/历史分列计划，注意专业平行志愿和再选科目要求。"],
  ["吉林省", "3+1+2", "http://www.jleea.edu.cn/", "新高考模式，院校专业组与批次规则以省考试院当年文件为准。"],
  ["黑龙江省", "3+1+2", "https://www.lzk.hl.cn/", "新高考模式，按专业组选科要求检索，艺术体育需看专项公告。"],
  ["上海市", "3+3", "https://www.shmeea.edu.cn/", "本科普通批以院校专业组为单位，专业选考科目要求差异较大。"],
  ["江苏省", "3+1+2", "https://www.jseea.cn/", "院校专业组模式，首选科目、再选科目和专业调剂范围要逐项核对。"],
  ["浙江省", "3+3", "https://www.zjzs.net/", "以“专业（类）+学校”为核心，按专业选考科目和位次进行匹配。"],
  ["安徽省", "3+1+2", "https://www.ahzsks.cn/", "2026 普通本科/专科批均为 45 个院校专业组，每组 6 个专业志愿。"],
  ["福建省", "3+1+2", "https://www.eeafj.cn/", "院校专业组模式，按物理/历史组分别填报和投档。"],
  ["江西省", "3+1+2", "http://www.jxeea.cn/", "新高考模式，批次、专业组数量和征集志愿以考试院公告为准。"],
  ["山东省", "3+3", "https://www.sdzk.cn/", "以“专业（专业类）+学校”为志愿单位，96 个志愿是常见填报口径。"],
  ["河南省", "3+1+2", "https://www.haeea.cn/", "2025 年起实行 3+1+2，首选科目和再选科目会直接影响可报专业。"],
  ["湖北省", "3+1+2", "http://www.hbea.edu.cn/", "院校专业组模式，普通类、技能高考、艺术体育批次规则分开核对。"],
  ["湖南省", "3+1+2", "https://jyt.hunan.gov.cn/jyt/sjyt/hnsjyksy/", "院校专业组模式，专业调剂不跨院校专业组。"],
  ["广东省", "3+1+2", "https://eea.gd.gov.cn/", "院校专业组模式，可关注官方志愿填报辅助系统和历年排位。"],
  ["广西壮族自治区", "3+1+2", "https://www.gxeea.cn/", "新高考模式，批次和院校专业组设置以当年招生工作规定为准。"],
  ["海南省", "3+3", "https://ea.hainan.gov.cn/", "本科普通批以院校专业组为主，综合分与选考要求需分批次查看。"],
  ["重庆市", "3+1+2", "https://www.cqksy.cn/", "以“专业（类）+学校”为志愿单位，注意历史/物理分列计划。"],
  ["四川省", "3+1+2", "https://www.sceea.cn/", "2025 年起实行 3+1+2，老文理分数线不能直接横向套用。"],
  ["贵州省", "3+1+2", "http://zsksy.guizhou.gov.cn/", "新高考模式，院校专业组、批次和征集计划以考试院发布为准。"],
  ["云南省", "3+1+2", "https://www.ynzs.cn/", "2025 年起实行 3+1+2，需重点核对专业选科和批次调整。"],
  ["西藏自治区", "traditional", "http://zsks.edu.xizang.gov.cn/", "仍需按当地普通高招规定核对文理、民族类、区内外计划和政策加分。"],
  ["陕西省", "3+1+2", "https://www.sneea.cn/", "2025 年起实行 3+1+2，院校专业组/专业志愿规则以省考试院为准。"],
  ["甘肃省", "3+1+2", "https://www.ganseea.cn/", "新高考模式，志愿填报入口和唯一网报系统以省考试院公告为准。"],
  ["青海省", "3+1+2", "http://www.qhjyks.com/", "2025 年起实行 3+1+2，需核对批次、投档规则和照顾政策。"],
  ["宁夏回族自治区", "3+1+2", "https://www.nxjyks.cn/", "2025 年起实行 3+1+2，专业组选科要求会影响可报范围。"],
  ["新疆维吾尔自治区", "traditional", "http://www.xjzk.gov.cn/", "重点核对文理、单列类、民族语文、南疆单列等本地政策口径。"]
].map(([province, mode, url, note]) => ({ province, mode, url, note }));

const ELITE_TAGS = {
  "中国科学技术大学": ["985", "211", "双一流", "C9", "中国科学院", "国家重点"],
  "合肥工业大学": ["211", "双一流", "教育部直属"],
  "安徽大学": ["211", "双一流", "省属重点"],
  "南京航空航天大学": ["211", "双一流", "工信部直属"],
  "苏州大学": ["211", "双一流", "省属重点"],
  "北京大学": ["985", "211", "双一流", "C9"],
  "清华大学": ["985", "211", "双一流", "C9"],
  "复旦大学": ["985", "211", "双一流", "C9"],
  "上海交通大学": ["985", "211", "双一流", "C9"],
  "南京大学": ["985", "211", "双一流", "C9"],
  "浙江大学": ["985", "211", "双一流", "C9"],
  "西安交通大学": ["985", "211", "双一流", "C9"],
  "哈尔滨工业大学": ["985", "211", "双一流", "C9"],
  "中国人民大学": ["985", "211", "双一流"],
  "北京航空航天大学": ["985", "211", "双一流"],
  "北京理工大学": ["985", "211", "双一流"],
  "北京师范大学": ["985", "211", "双一流"],
  "南开大学": ["985", "211", "双一流"],
  "天津大学": ["985", "211", "双一流"],
  "东南大学": ["985", "211", "双一流"],
  "同济大学": ["985", "211", "双一流"],
  "华东师范大学": ["985", "211", "双一流"],
  "武汉大学": ["985", "211", "双一流"],
  "华中科技大学": ["985", "211", "双一流"],
  "中山大学": ["985", "211", "双一流"],
  "华南理工大学": ["985", "211", "双一流"],
  "四川大学": ["985", "211", "双一流"],
  "电子科技大学": ["985", "211", "双一流"],
  "重庆大学": ["985", "211", "双一流"],
  "中南大学": ["985", "211", "双一流"],
  "湖南大学": ["985", "211", "双一流"],
  "吉林大学": ["985", "211", "双一流"],
  "大连理工大学": ["985", "211", "双一流"],
  "东北大学": ["985", "211", "双一流"],
  "厦门大学": ["985", "211", "双一流"],
  "山东大学": ["985", "211", "双一流"],
  "中国海洋大学": ["985", "211", "双一流"],
  "兰州大学": ["985", "211", "双一流"],
  "西北工业大学": ["985", "211", "双一流"],
  "西北农林科技大学": ["985", "211", "双一流"],
  "中央民族大学": ["985", "211", "双一流"],
  "国防科技大学": ["985", "211", "双一流"]
};

const SCHOOL_PROFILES = {
  "中国科学技术大学": {
    shortName: "中国科大 / 中科大",
    overview: "中国科学院所属，位于安徽合肥，以前沿科学和高新技术为主，兼有医学、特色管理和人文学科。学校1958年在北京创建，1970年迁至合肥，是首批 985、211 高校，两度入选“双一流”。",
    strengths: ["数学", "物理学", "化学", "天文学", "地球物理学", "生物学", "材料科学与工程", "计算机科学与技术", "核科学与技术", "安全科学与工程"],
    featuredMajors: ["理科试验班类", "工科试验班", "计算机类", "电子信息类", "量子信息科学", "临床医学英才班"],
    outcomes: "本科培养强调基础、科研和长周期拔尖培养，毕业去向以继续深造、科研院所、高新技术企业、国家重点单位等为主；具体就业率和去向以学校信息公开网就业质量报告为准。",
    employment: "学校信息公开网设置“毕业生就业质量年度报告”栏目，已公开近届报告。",
    links: [
      ["学校官网", "https://www.ustc.edu.cn/"],
      ["学校简介", "https://www.ustc.edu.cn/xxgk/xxjj.htm"],
      ["本科招生网", "https://zsb.ustc.edu.cn/"],
      ["招生专业", "https://zsb.ustc.edu.cn/zszy/main.htm"],
      ["历年录取", "https://zsb.ustc.edu.cn/lnlq/list.htm"],
      ["就业质量报告", "https://xxgk.ustc.edu.cn/gxbysjyzlndbg/list.htm"]
    ]
  },
  "合肥工业大学": {
    shortName: "合工大",
    overview: "教育部直属全国重点大学，工科基础强，车辆、机械、电气、管理科学与工程等方向有较强行业影响。",
    strengths: ["机械工程", "电气工程", "管理科学与工程", "车辆工程", "计算机类"],
    featuredMajors: ["车辆工程", "机械设计制造及其自动化", "电气工程及其自动化", "计算机科学与技术", "软件工程"],
    outcomes: "毕业去向以装备制造、汽车、电力电子、软件互联网、央国企和长三角制造业企业为主；就业数据以学校就业质量报告为准。",
    employment: "建议核对学校就业信息网和最新就业质量年度报告。",
    links: [["学校官网", "https://www.hfut.edu.cn/"], ["本科招生", "https://bkzs.hfut.edu.cn/"]]
  },
  "安徽大学": {
    shortName: "安大",
    overview: "安徽省属重点综合性大学，211、双一流高校，文理工法经管等学科覆盖较全。",
    strengths: ["材料科学与工程", "计算机类", "法学", "新闻传播", "汉语言文学"],
    featuredMajors: ["计算机科学与技术", "人工智能", "法学类", "汉语言文学", "新闻传播学类"],
    outcomes: "毕业去向覆盖升学、机关事业单位、金融信息服务、软件信息技术、教育文化传媒等方向；具体以学校就业质量报告为准。",
    employment: "建议核对学校招生网、就业信息网和最新就业质量年度报告。",
    links: [["学校官网", "https://www.ahu.edu.cn/"], ["本科招生", "https://zsb.ahu.edu.cn/"]]
  },
  "安徽医科大学": {
    shortName: "安医大",
    overview: "安徽省属医药类重点高校，临床医学、口腔医学、公共卫生、药学等医学方向是核心报考点。",
    strengths: ["临床医学", "口腔医学", "公共卫生与预防医学", "药学"],
    featuredMajors: ["临床医学", "口腔医学", "麻醉学", "医学影像学", "预防医学"],
    outcomes: "毕业去向以医疗卫生机构、住院医师规范化培训、继续深造、医药健康产业等为主；需关注执业资格和规培路径。",
    employment: "医学类就业质量需结合规培、升学和医院招聘口径阅读。",
    links: [["学校官网", "https://www.ahmu.edu.cn/"], ["本科招生", "https://zs.ahmu.edu.cn/"]]
  },
  "安徽师范大学": {
    shortName: "安师大",
    overview: "安徽省属师范类重点高校，师范教育和基础学科是主要特色。",
    strengths: ["汉语言文学", "历史学", "思想政治教育", "教育学", "化学"],
    featuredMajors: ["汉语言文学（师范）", "思想政治教育（师范）", "历史学（师范）", "英语（师范）"],
    outcomes: "毕业去向以中小学教育、升学、机关事业单位和文化传媒等方向为主；师范类需关注教师资格、编制和定向协议。",
    employment: "建议查看学校就业质量年度报告和地方教师招聘政策。",
    links: [["学校官网", "https://www.ahnu.edu.cn/"], ["本科招生", "https://zsxx.ahnu.edu.cn/"]]
  }
};

const MAJOR_PROFILES = [
  {
    name: "计算机科学与技术",
    category: "工学",
    courses: ["程序设计", "数据结构", "操作系统", "计算机组成原理", "计算机网络", "算法设计", "数据库系统", "人工智能基础"],
    related: ["软件工程", "人工智能", "网络空间安全", "数据科学与大数据技术", "信息安全"],
    outcomes: ["互联网与软件研发", "人工智能/算法工程", "信息安全", "金融科技", "科研院所", "升学深造"],
    rankSchools: ["清华大学", "北京大学", "中国科学技术大学", "浙江大学", "上海交通大学", "南京大学", "哈尔滨工业大学"],
    note: "不同学校会偏理论、工程、AI、系统或安全方向，填报时要看学院和培养方案。"
  },
  {
    name: "临床医学",
    category: "医学",
    courses: ["人体解剖学", "生理学", "病理学", "药理学", "诊断学", "内科学", "外科学", "妇产科学", "儿科学"],
    related: ["口腔医学", "麻醉学", "医学影像学", "预防医学", "基础医学"],
    outcomes: ["医院临床岗位", "住院医师规范化培训", "医学科研", "公共卫生机构", "继续深造"],
    rankSchools: ["北京协和医学院", "北京大学", "复旦大学", "上海交通大学", "中山大学", "浙江大学", "四川大学"],
    note: "医学培养周期长，需关注学制、规培、身体条件限制和是否定向。"
  },
  {
    name: "人工智能",
    category: "工学",
    courses: ["高等数学", "线性代数", "概率统计", "机器学习", "深度学习", "数据结构", "算法设计", "计算机视觉", "自然语言处理"],
    related: ["计算机科学与技术", "软件工程", "数据科学与大数据技术", "自动化", "智能科学与技术"],
    outcomes: ["算法工程师", "AI 产品研发", "智能制造", "自动驾驶/机器人", "科研深造"],
    rankSchools: ["清华大学", "上海交通大学", "浙江大学", "南京大学", "中国科学技术大学", "哈尔滨工业大学"],
    note: "优先看计算机、电子、自动化底子强的学校，不只看专业名称。"
  },
  {
    name: "电子信息工程",
    category: "工学",
    courses: ["电路分析", "模拟电子技术", "数字电子技术", "信号与系统", "通信原理", "电磁场与电磁波", "嵌入式系统"],
    related: ["通信工程", "电子科学与技术", "集成电路设计与集成系统", "自动化", "微电子科学与工程"],
    outcomes: ["通信设备", "集成电路", "嵌入式开发", "智能硬件", "央国企与科研院所"],
    rankSchools: ["电子科技大学", "西安电子科技大学", "清华大学", "北京邮电大学", "上海交通大学", "中国科学技术大学"],
    note: "看学校电子、通信、微电子平台和实习企业资源。"
  },
  {
    name: "量子信息科学",
    category: "理学",
    courses: ["高等数学", "普通物理", "量子力学", "概率统计", "计算机基础", "量子计算", "量子通信", "量子信息实验"],
    related: ["物理学", "计算机科学与技术", "信息安全", "电子信息工程", "光电信息科学与工程"],
    outcomes: ["量子计算/通信科研", "高端芯片与光电技术", "科研院所", "国家重点实验室", "继续深造"],
    rankSchools: ["中国科学技术大学", "清华大学", "北京大学", "南京大学", "上海交通大学"],
    note: "高度交叉且深造比例通常较高，适合数学物理基础强、愿意长期科研训练的学生。"
  },
  {
    name: "法学",
    category: "法学",
    courses: ["法理学", "宪法学", "民法", "刑法", "行政法", "商法", "经济法", "诉讼法", "国际法"],
    related: ["知识产权", "政治学与行政学", "社会学", "公安学类"],
    outcomes: ["律师", "法务", "公务员/司法机关", "金融合规", "继续深造"],
    rankSchools: ["中国人民大学", "中国政法大学", "北京大学", "清华大学", "武汉大学", "华东政法大学"],
    note: "法学就业和法考、公考、实习资源高度相关，城市和平台很重要。"
  },
  {
    name: "汉语言文学",
    category: "文学",
    courses: ["现代汉语", "古代汉语", "中国古代文学", "中国现当代文学", "外国文学", "文学理论", "写作"],
    related: ["汉语国际教育", "新闻学", "历史学", "秘书学", "网络与新媒体"],
    outcomes: ["中小学教师", "公务员/事业单位", "出版传媒", "文案策划", "继续深造"],
    rankSchools: ["北京大学", "北京师范大学", "复旦大学", "南京大学", "华东师范大学", "浙江大学"],
    note: "师范方向要看教师资格、实习基地和本省教师招聘情况。"
  }
];

const BASE_KNOWLEDGE = [
  {
    title: "官方数据优先级",
    summary: "先看省考试院当年招生计划、志愿填报系统和高校招生章程，再参考往年投档线、专业分和第三方排名。"
  },
  {
    title: "平行志愿排序",
    summary: "同一批次内按考生位次检索，系统会顺序扫描志愿；前面的志愿命中后，后续志愿不再检索。"
  },
  {
    title: "冲稳保分数带",
    summary: "院校库先按考分所在大段展示。例如 599 分展示 500-699 分参考带内院校，再按冲、稳、保分层排序。"
  },
  {
    title: "专业组调剂边界",
    summary: "院校专业组模式下，服从调剂通常只在同一院校专业组内生效，不会调剂到另一个专业组。"
  },
  {
    title: "往年数据使用",
    summary: "优先用位次而不是裸分比较；遇到招生计划缩扩、专业组选科变化、专业合并拆分时要降权处理。"
  },
  {
    title: "提前批核验",
    summary: "公安、军队、公费师范、优师、免费医学定向等类型需额外核对政审、体检、户籍、服务协议和违约条款。"
  },
  {
    title: "高风险提示",
    summary: "只用最低投档线无法判断专业录取概率；不服从调剂、单科限制、身体条件和外语语种限制都可能带来退档风险。"
  }
];

const DEFAULT_GROUPS = [
  {
    id: "ustc-001",
    school: "中国科学技术大学",
    groupCode: "001",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["985", "211", "双一流", "C9", "中国科学院", "国家重点"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 96,
    lastRank: 1450,
    scoreRange: [675, 700],
    tuition: "以章程为准",
    source: "演示数据（官网资料已补充）",
    programs: [
      { code: "01", name: "理科试验班类", rank: 1200, scoreRange: [680, 705] },
      { code: "02", name: "工科试验班", rank: 1650, scoreRange: [675, 698] },
      { code: "03", name: "计算机类", rank: 950, scoreRange: [685, 710] },
      { code: "04", name: "电子信息类", rank: 1450, scoreRange: [678, 702] },
      { code: "05", name: "量子信息科学", rank: 800, scoreRange: [688, 715] },
      { code: "06", name: "临床医学英才班", rank: 1800, scoreRange: [672, 695] }
    ],
    website: "https://www.ustc.edu.cn/"
  },
  {
    id: "hfut-001",
    school: "合肥工业大学",
    groupCode: "001",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["双一流", "211", "教育部直属"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 148,
    lastRank: 15500,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "计算机科学与技术", rank: 12000 },
      { code: "02", name: "软件工程", rank: 13800 },
      { code: "03", name: "电子信息工程", rank: 14600 },
      { code: "04", name: "自动化", rank: 15400 },
      { code: "05", name: "机械设计制造及其自动化", rank: 17100 },
      { code: "06", name: "车辆工程", rank: 18000 }
    ],
    website: "https://www.hfut.edu.cn/"
  },
  {
    id: "ahu-002",
    school: "安徽大学",
    groupCode: "002",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "综合",
    tags: ["双一流", "211", "省属重点"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 215,
    lastRank: 23800,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "计算机科学与技术", rank: 18800 },
      { code: "02", name: "人工智能", rank: 20500 },
      { code: "03", name: "电子信息工程", rank: 22000 },
      { code: "04", name: "通信工程", rank: 23600 },
      { code: "05", name: "材料类", rank: 26500 },
      { code: "06", name: "生物科学", rank: 28500 }
    ],
    website: "https://www.ahu.edu.cn/"
  },
  {
    id: "ahu-003",
    school: "安徽大学",
    groupCode: "003",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "综合",
    tags: ["双一流", "211", "省属重点"],
    firstChoice: "历史",
    subjects: [],
    plan: 136,
    lastRank: 4800,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "07", name: "法学类", rank: 3100 },
      { code: "08", name: "汉语言文学", rank: 3600 },
      { code: "09", name: "新闻传播学类", rank: 4600 },
      { code: "10", name: "英语", rank: 5100 },
      { code: "11", name: "工商管理类", rank: 6200 },
      { code: "12", name: "哲学", rank: 6900 }
    ],
    website: "https://www.ahu.edu.cn/"
  },
  {
    id: "ahnu-004",
    school: "安徽师范大学",
    groupCode: "004",
    batch: "regular-bachelor",
    province: "安徽",
    city: "芜湖",
    level: "本科",
    nature: "公办",
    type: "师范",
    tags: ["省属重点", "师范"],
    firstChoice: "历史",
    subjects: ["思想政治"],
    plan: 98,
    lastRank: 9200,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "思想政治教育（师范）", rank: 7800 },
      { code: "02", name: "汉语言文学（师范）", rank: 6200 },
      { code: "03", name: "历史学（师范）", rank: 8400 },
      { code: "04", name: "法学", rank: 9300 },
      { code: "05", name: "社会学", rank: 11500 },
      { code: "06", name: "行政管理", rank: 12800 }
    ],
    website: "https://www.ahnu.edu.cn/"
  },
  {
    id: "ahmu-005",
    school: "安徽医科大学",
    groupCode: "005",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "医药",
    tags: ["省属重点", "医药"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 162,
    lastRank: 28000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "临床医学", rank: 16200 },
      { code: "02", name: "口腔医学", rank: 11800 },
      { code: "03", name: "麻醉学", rank: 23600 },
      { code: "04", name: "医学影像学", rank: 25200 },
      { code: "05", name: "药学", rank: 31500 },
      { code: "06", name: "预防医学", rank: 34000 }
    ],
    website: "https://www.ahmu.edu.cn/"
  },
  {
    id: "ahau-006",
    school: "安徽农业大学",
    groupCode: "006",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "农林",
    tags: ["省属重点", "农林"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 240,
    lastRank: 57000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "茶学", rank: 51800 },
      { code: "02", name: "生物制药", rank: 50000 },
      { code: "03", name: "食品科学与工程", rank: 54000 },
      { code: "04", name: "动物医学", rank: 49500 },
      { code: "05", name: "园林", rank: 61200 },
      { code: "06", name: "智慧农业", rank: 58000 }
    ],
    website: "https://www.ahau.edu.cn/"
  },
  {
    id: "aust-007",
    school: "安徽理工大学",
    groupCode: "007",
    batch: "regular-bachelor",
    province: "安徽",
    city: "淮南",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["省属重点", "理工"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 320,
    lastRank: 65000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "安全工程", rank: 59000 },
      { code: "02", name: "电气工程及其自动化", rank: 43000 },
      { code: "03", name: "自动化", rank: 56000 },
      { code: "04", name: "土木工程", rank: 76000 },
      { code: "05", name: "机械电子工程", rank: 64000 },
      { code: "06", name: "数据科学与大数据技术", rank: 52000 }
    ],
    website: "https://www.aust.edu.cn/"
  },
  {
    id: "ahjzu-008",
    school: "安徽建筑大学",
    groupCode: "008",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["建筑", "城市建设"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 260,
    lastRank: 72000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "建筑学", rank: 52000 },
      { code: "02", name: "城乡规划", rank: 61000 },
      { code: "03", name: "土木工程", rank: 76000 },
      { code: "04", name: "工程管理", rank: 82000 },
      { code: "05", name: "给排水科学与工程", rank: 78000 },
      { code: "06", name: "环境工程", rank: 90000 }
    ],
    website: "https://www.ahjzu.edu.cn/"
  },
  {
    id: "ahut-009",
    school: "安徽工业大学",
    groupCode: "009",
    batch: "regular-bachelor",
    province: "安徽",
    city: "马鞍山",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["省属重点", "理工"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 286,
    lastRank: 69000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "冶金工程", rank: 74000 },
      { code: "02", name: "材料成型及控制工程", rank: 72000 },
      { code: "03", name: "计算机科学与技术", rank: 48000 },
      { code: "04", name: "电气工程及其自动化", rank: 52000 },
      { code: "05", name: "会计学", rank: 61000 },
      { code: "06", name: "机械设计制造及其自动化", rank: 65000 }
    ],
    website: "https://www.ahut.edu.cn/"
  },
  {
    id: "hfu-010",
    school: "合肥大学",
    groupCode: "010",
    batch: "regular-bachelor",
    province: "安徽",
    city: "合肥",
    level: "本科",
    nature: "公办",
    type: "综合",
    tags: ["应用型", "合肥"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 210,
    lastRank: 76000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "计算机科学与技术", rank: 59000 },
      { code: "02", name: "网络工程", rank: 65000 },
      { code: "03", name: "智能制造工程", rank: 73000 },
      { code: "04", name: "通信工程", rank: 75500 },
      { code: "05", name: "食品科学与工程", rank: 88000 },
      { code: "06", name: "生物工程", rank: 91000 }
    ],
    website: "https://www.hfuu.edu.cn/"
  },
  {
    id: "auc-011",
    school: "安徽财经大学",
    groupCode: "011",
    batch: "regular-bachelor",
    province: "安徽",
    city: "蚌埠",
    level: "本科",
    nature: "公办",
    type: "财经",
    tags: ["财经", "省属重点"],
    firstChoice: "历史",
    subjects: [],
    plan: 170,
    lastRank: 12800,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "会计学", rank: 8200 },
      { code: "02", name: "财务管理", rank: 9900 },
      { code: "03", name: "财政学类", rank: 11800 },
      { code: "04", name: "金融学", rank: 10500 },
      { code: "05", name: "经济学", rank: 12600 },
      { code: "06", name: "电子商务", rank: 15800 }
    ],
    website: "https://www.aufe.edu.cn/"
  },
  {
    id: "nuaa-012",
    school: "南京航空航天大学",
    groupCode: "012",
    batch: "regular-bachelor",
    province: "江苏",
    city: "南京",
    level: "本科",
    nature: "公办",
    type: "理工",
    tags: ["双一流", "211", "航空航天"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 58,
    lastRank: 9300,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "航空航天类", rank: 6900 },
      { code: "02", name: "飞行器控制与信息工程", rank: 7600 },
      { code: "03", name: "计算机科学与技术", rank: 7100 },
      { code: "04", name: "电子信息类", rank: 8300 },
      { code: "05", name: "机械工程", rank: 10200 },
      { code: "06", name: "材料科学与工程", rank: 12500 }
    ],
    website: "https://www.nuaa.edu.cn/"
  },
  {
    id: "suda-013",
    school: "苏州大学",
    groupCode: "013",
    batch: "regular-bachelor",
    province: "江苏",
    city: "苏州",
    level: "本科",
    nature: "公办",
    type: "综合",
    tags: ["双一流", "211"],
    firstChoice: "物理",
    subjects: ["化学"],
    plan: 76,
    lastRank: 14500,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "临床医学", rank: 8800 },
      { code: "02", name: "计算机科学与技术", rank: 9600 },
      { code: "03", name: "软件工程", rank: 10800 },
      { code: "04", name: "电子信息工程", rank: 13000 },
      { code: "05", name: "纺织工程", rank: 18500 },
      { code: "06", name: "化学类", rank: 17800 }
    ],
    website: "https://www.suda.edu.cn/"
  },
  {
    id: "hznu-014",
    school: "杭州师范大学",
    groupCode: "014",
    batch: "regular-bachelor",
    province: "浙江",
    city: "杭州",
    level: "本科",
    nature: "公办",
    type: "师范",
    tags: ["师范", "杭州"],
    firstChoice: "历史",
    subjects: [],
    plan: 42,
    lastRank: 9800,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "小学教育（师范）", rank: 8600 },
      { code: "02", name: "汉语言文学（师范）", rank: 7100 },
      { code: "03", name: "英语（师范）", rank: 9300 },
      { code: "04", name: "法学", rank: 10200 },
      { code: "05", name: "公共事业管理", rank: 13600 },
      { code: "06", name: "文化产业管理", rank: 14500 }
    ],
    website: "https://www.hznu.edu.cn/"
  },
  {
    id: "ahvtc-015",
    school: "安徽职业技术学院",
    groupCode: "015",
    batch: "regular-junior",
    province: "安徽",
    city: "合肥",
    level: "高职（专科）",
    nature: "公办",
    type: "综合",
    tags: ["高职", "合肥"],
    firstChoice: "不限",
    subjects: [],
    plan: 520,
    lastRank: 195000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "机电一体化技术", rank: 168000 },
      { code: "02", name: "新能源汽车技术", rank: 176000 },
      { code: "03", name: "计算机网络技术", rank: 159000 },
      { code: "04", name: "大数据与会计", rank: 188000 },
      { code: "05", name: "现代物流管理", rank: 206000 },
      { code: "06", name: "电子商务", rank: 214000 }
    ],
    website: "https://www.uta.edu.cn/"
  },
  {
    id: "ahgy-016",
    school: "安徽公安职业学院",
    groupCode: "016",
    batch: "early-parallel",
    province: "安徽",
    city: "合肥",
    level: "高职（专科）",
    nature: "公办",
    type: "政法",
    tags: ["公安", "提前批"],
    firstChoice: "物理",
    subjects: [],
    plan: 80,
    lastRank: 118000,
    tuition: "以章程为准",
    source: "演示数据",
    programs: [
      { code: "01", name: "刑事侦查", rank: 98000 },
      { code: "02", name: "治安管理", rank: 106000 },
      { code: "03", name: "道路交通管理", rank: 118000 },
      { code: "04", name: "警务指挥与战术", rank: 121000 },
      { code: "05", name: "网络安全与执法", rank: 89000 },
      { code: "06", name: "特警", rank: 135000 }
    ],
    website: "https://www.ahgaxy.edu.cn/"
  }
];

const STORAGE_KEYS = {
  groups: "ah-gaokao-groups-v1",
  draft: "ah-gaokao-draft-v1",
  profile: "ah-gaokao-profile-v1"
};

const state = {
  groups: [],
  draft: [],
  profile: null,
  activeTab: "schools",
  majorExpandMode: "default"
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadState();
  bindEvents();
  renderAll();
});

function cacheElements() {
  Object.assign(els, {
    batch: document.getElementById("batchInput"),
    firstChoice: document.getElementById("firstChoiceInput"),
    score: document.getElementById("scoreInput"),
    scoreBandText: document.getElementById("scoreBandText"),
    rank: document.getElementById("rankInput"),
    chinese: document.getElementById("chineseInput"),
    math: document.getElementById("mathInput"),
    foreign: document.getElementById("foreignInput"),
    cityPreference: document.getElementById("cityPreferenceInput"),
    majorKeyword: document.getElementById("majorKeywordInput"),
    profileStatus: document.getElementById("profileStatus"),
    policyList: document.getElementById("policyList"),
    schoolSearch: document.getElementById("schoolSearchInput"),
    riskFilter: document.getElementById("riskFilterInput"),
    matchFilter: document.getElementById("matchFilterInput"),
    insightStrip: document.getElementById("insightStrip"),
    schoolProfilePanel: document.getElementById("schoolProfilePanel"),
    schoolTableBody: document.querySelector("#schoolTable tbody"),
    nationalMeta: document.getElementById("nationalMeta"),
    nationalSearch: document.getElementById("nationalSearchInput"),
    nationalProvince: document.getElementById("nationalProvinceInput"),
    nationalLevel: document.getElementById("nationalLevelInput"),
    nationalNature: document.getElementById("nationalNatureInput"),
    nationalStats: document.getElementById("nationalStats"),
    nationalProfilePanel: document.getElementById("nationalProfilePanel"),
    nationalCollegeTableBody: document.querySelector("#nationalCollegeTable tbody"),
    historySearch: document.getElementById("historySearchInput"),
    historyYear: document.getElementById("historyYearInput"),
    historyLevel: document.getElementById("historyLevelInput"),
    historyStats: document.getElementById("historyStats"),
    historyTableBody: document.querySelector("#historyTable tbody"),
    provinceGuideGrid: document.getElementById("provinceGuideGrid"),
    majorSearch: document.getElementById("majorSearchInput"),
    majorCategory: document.getElementById("majorCategoryInput"),
    majorStats: document.getElementById("majorStats"),
    majorGrid: document.getElementById("majorGrid"),
    majorExpand: document.getElementById("majorExpandBtn"),
    majorCollapse: document.getElementById("majorCollapseBtn"),
    careerSearch: document.getElementById("careerSearchInput"),
    careerCategory: document.getElementById("careerCategoryInput"),
    careerStats: document.getElementById("careerStats"),
    careerGrid: document.getElementById("careerGrid"),
    knowledgeGrid: document.getElementById("knowledgeGrid"),
    draftCounter: document.getElementById("draftCounter"),
    draftList: document.getElementById("draftList"),
    draftTemplate: document.getElementById("draftItemTemplate"),
    mixMeter: document.getElementById("mixMeter"),
    simulationResult: document.getElementById("simulationResult"),
    validationList: document.getElementById("validationList"),
    importText: document.getElementById("importText"),
    localSourceMeta: document.getElementById("localSourceMeta"),
    localSourceList: document.getElementById("localSourceList")
  });
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      renderTabs();
    });
  });

  document.getElementById("candidateForm").addEventListener("input", (event) => {
    const previousBatch = state.profile.batch;
    state.profile = readProfile();
    if (event.target.id === "batchInput" && state.profile.batch !== previousBatch) {
      state.draft = [];
      saveDraft();
    }
    persistProfile();
    renderAll();
  });

  [els.schoolSearch, els.riskFilter, els.matchFilter].forEach((input) => {
    input.addEventListener("input", renderSchoolTable);
  });

  [els.nationalSearch, els.nationalProvince, els.nationalLevel, els.nationalNature].forEach((input) => {
    input.addEventListener("input", renderNationalColleges);
  });

  [els.majorSearch, els.majorCategory].forEach((input) => {
    input.addEventListener("input", () => {
      state.majorExpandMode = "auto";
      renderMajors();
    });
  });

  if (els.majorExpand) {
    els.majorExpand.addEventListener("click", () => {
      state.majorExpandMode = "all";
      renderMajors();
    });
  }

  if (els.majorCollapse) {
    els.majorCollapse.addEventListener("click", () => {
      state.majorExpandMode = "collapsed";
      renderMajors();
    });
  }

  [els.careerSearch, els.careerCategory].filter(Boolean).forEach((input) => {
    input.addEventListener("input", renderCareers);
  });

  [els.historySearch, els.historyYear, els.historyLevel].forEach((input) => {
    input.addEventListener("input", renderHistory);
  });

  document.querySelectorAll("[data-guide-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-guide-filter]").forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      renderProvinceGuides(btn.dataset.guideFilter);
    });
  });

  document.getElementById("simulateBtn").addEventListener("click", () => {
    runSimulation();
    setActiveTab("simulation");
  });
  document.getElementById("simulateTopBtn").addEventListener("click", () => {
    runSimulation();
    setActiveTab("simulation");
  });
  document.getElementById("exportDraftBtn").addEventListener("click", exportDraft);
  document.getElementById("printDraftBtn").addEventListener("click", () => window.print());
  document.getElementById("autoSortBtn").addEventListener("click", autoSortDraft);
  document.getElementById("clearDraftBtn").addEventListener("click", clearDraft);
  document.getElementById("resetDataBtn").addEventListener("click", resetData);
  document.getElementById("loadSampleCsvBtn").addEventListener("click", loadSampleCsv);
  document.getElementById("importJsonBtn").addEventListener("click", importData);
  document.getElementById("exportDataBtn").addEventListener("click", exportData);
  document.getElementById("exportNationalBtn").addEventListener("click", () => downloadJson("national-colleges-2025.json", getNationalColleges()));
}

function loadState() {
  state.groups = dedupeGroups([...readJson(STORAGE_KEYS.groups, []), ...DEFAULT_GROUPS]);
  saveJson(STORAGE_KEYS.groups, state.groups);
  state.draft = readJson(STORAGE_KEYS.draft, []);
  state.profile = readJson(STORAGE_KEYS.profile, null) || readProfile();
  writeProfileToForm(state.profile);
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function renderAll() {
  renderPolicy();
  renderProfileStatus();
  renderScoreBand();
  renderTabs();
  renderNationalFilters();
  renderMajorFilters();
  renderSchoolTable();
  renderNationalColleges();
  renderMajors();
  renderCareers();
  renderHistory();
  renderProvinceGuides();
  renderKnowledge();
  renderLocalSources();
  renderDraft();
  renderValidation();
}

function renderPolicy() {
  els.policyList.innerHTML = "";
  POLICY.summary.forEach(([term, detail]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = detail;
    row.append(dt, dd);
    els.policyList.append(row);
  });
}

function readProfile() {
  const seconds = Array.from(document.querySelectorAll('input[name="secondChoice"]:checked')).map((item) => item.value);
  return {
    batch: els.batch.value,
    firstChoice: els.firstChoice.value,
    secondChoices: seconds,
    score: Number(els.score.value) || 0,
    rank: Number(els.rank.value) || 0,
    chinese: Number(els.chinese.value) || 0,
    math: Number(els.math.value) || 0,
    foreign: Number(els.foreign.value) || 0,
    cityPreference: els.cityPreference.value,
    majorKeyword: els.majorKeyword.value.trim()
  };
}

function writeProfileToForm(profile) {
  els.batch.value = profile.batch;
  els.firstChoice.value = profile.firstChoice;
  els.score.value = profile.score;
  els.rank.value = profile.rank;
  els.chinese.value = profile.chinese;
  els.math.value = profile.math;
  els.foreign.value = profile.foreign;
  els.cityPreference.value = profile.cityPreference;
  els.majorKeyword.value = profile.majorKeyword;
  document.querySelectorAll('input[name="secondChoice"]').forEach((checkbox) => {
    checkbox.checked = profile.secondChoices.includes(checkbox.value);
  });
}

function persistProfile() {
  saveJson(STORAGE_KEYS.profile, state.profile);
}

function renderProfileStatus() {
  const ok = state.profile.score > 0 && state.profile.rank > 0 && state.profile.secondChoices.length === 2;
  els.profileStatus.textContent = ok ? "已完整" : "需补全";
  els.profileStatus.classList.toggle("valid", ok);
}

function renderScoreBand() {
  if (!els.scoreBandText) return;
  const band = getScoreBand(state.profile.score);
  els.scoreBandText.textContent = `${band.low} - ${band.high}`;
}

function getScoreBand(score) {
  const value = Number(score) || 0;
  const low = Math.max(0, Math.floor(value / 100) * 100);
  const high = Math.min(750, low + 199);
  return {
    low,
    high,
    sprint: [Math.min(750, value + 1), high],
    steady: [Math.max(0, value - 40), Math.min(750, value + 40)],
    safe: [low, Math.max(0, value - 1)]
  };
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === state.activeTab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const id = panel.id.replace("Panel", "");
    panel.classList.toggle("active", id === state.activeTab);
  });
}

function setActiveTab(tabName) {
  state.activeTab = tabName;
  renderTabs();
}

function getBatchConfig() {
  return POLICY.batches[state.profile.batch] || POLICY.batches["regular-bachelor"];
}

function filteredGroups() {
  const q = els.schoolSearch.value.trim().toLowerCase();
  const riskFilter = els.riskFilter.value;
  const matchFilter = els.matchFilter.value;
  const scoreBand = getScoreBand(state.profile.score);
  return buildSchoolCatalogRows()
    .map((group) => ({
      ...group,
      eligibility: checkEligibility(group, state.profile),
      risk: assessRisk(group, state.profile),
      preference: assessPreference(group, state.profile)
    }))
    .filter((group) => {
      const range = scoreRangeForGroup(group);
      if (range && !rangesOverlap(range, [scoreBand.low, scoreBand.high])) return false;
      if (matchFilter === "eligible" && !group.eligibility.ok) return false;
      if (riskFilter !== "all" && group.risk.key !== riskFilter) return false;
      if (!q) return true;
      const haystack = [
        group.school,
        group.groupCode,
        group.city,
        group.province,
        group.type,
        ...group.tags,
        ...group.programs.map((p) => p.name)
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    })
    .sort((a, b) => riskWeight(a.risk.key) - riskWeight(b.risk.key) || b.preference.score - a.preference.score || a.lastRank - b.lastRank);
}

function buildSchoolCatalogRows() {
  const batchLevel = getBatchLevelFilter();
  const realGroups = state.groups
    .filter((group) => group.batch === state.profile.batch)
    .filter((group) => !batchLevel || group.level === batchLevel);
  const existingKeys = new Set(realGroups.map((group) => `${group.school}-${group.groupCode}`));
  const existingSchools = new Set(realGroups.map((group) => group.school));
  const nationalRows = getNationalColleges()
    .filter((college) => !batchLevel || college.level === batchLevel || (batchLevel === "高职（专科）" && college.level === "专科"))
    .filter((college) => !existingSchools.has(college.name))
    .map(nationalCollegeToCatalogRow)
    .filter((row) => !existingKeys.has(`${row.school}-${row.groupCode}`));
  return [...realGroups, ...nationalRows];
}

function getCatalogGroupById(groupId) {
  return buildSchoolCatalogRows().find((group) => group.id === groupId) || null;
}

function getBatchLevelFilter() {
  if (state.profile.batch === "regular-bachelor") return "本科";
  if (state.profile.batch === "regular-junior") return "高职（专科）";
  return "";
}

function nationalCollegeToCatalogRow(college) {
  const tags = inferCollegeTags(college);
  const profile = getSchoolProfile(college.name);
  const scoreRange = estimateCollegeScoreRange(college);
  const programs = inferProgramsForCollege(college, profile);
  return {
    id: `national-${college.code}`,
    school: college.name,
    groupCode: "参考",
    batch: state.profile.batch,
    province: college.province,
    city: college.city,
    level: college.level === "专科" ? "高职（专科）" : college.level,
    nature: college.remark?.includes("民办") || college.nature?.includes("民办") ? "民办" : "公办",
    type: inferCollegeType(college.name, profile, programs),
    tags,
    firstChoice: "不限",
    subjects: [],
    plan: 0,
    lastRank: estimateRankFromScore(Math.round((scoreRange[0] + scoreRange[1]) / 2)),
    scoreRange,
    tuition: "以章程为准",
    source: "教育部院校名单 + 参考分数带，非官方投档线",
    programs,
    website: profile?.links?.[0]?.[1] || "",
    isNationalOnly: true
  };
}

function renderSchoolTable() {
  const groups = filteredGroups();
  if (!els.schoolSearch.value.trim() && els.schoolProfilePanel) {
    els.schoolProfilePanel.classList.remove("active");
    els.schoolProfilePanel.innerHTML = "";
  }
  renderInsights(groups);
  els.schoolTableBody.innerHTML = "";

  if (!groups.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.className = "empty-state";
    td.textContent = "没有匹配的院校专业组。";
    tr.append(td);
    els.schoolTableBody.append(tr);
    const q = els.schoolSearch.value.trim();
    const national = q ? getNationalColleges().find((college) => college.name.includes(q)) : null;
    if (national) showSchoolProfile(national.name, false);
    return;
  }

  groups.forEach((group) => {
    const tr = document.createElement("tr");
    const alreadyAdded = state.draft.some((item) => item.groupId === group.id);
    const canAdd = group.eligibility.ok && !alreadyAdded;
    const addLabel = alreadyAdded ? "已加入" : group.isNationalOnly ? "参考加入" : "加入";
    tr.innerHTML = `
      <td>
        <p class="school-name">${escapeHtml(group.school)} ${escapeHtml(group.groupCode)}组</p>
        <p class="school-sub">${escapeHtml(POLICY.batches[group.batch]?.name || group.batch)} · 计划 ${group.plan || "-"} 人</p>
      </td>
      <td>
        <div class="tag-row">${[group.province, group.city, group.level, group.nature, group.type, ...group.tags].map(renderTag).join("")}</div>
        <p class="school-sub">${escapeHtml(group.source || "演示数据")} · <a href="${escapeAttr(group.website || "#")}" target="_blank" rel="noreferrer">官网</a></p>
      </td>
      <td>
        <span class="match-badge ${group.eligibility.ok ? "yes" : "no"}">${group.eligibility.ok ? "可报" : "不匹配"}</span>
        <p class="school-sub">${formatRequirement(group)}</p>
        <p class="school-sub">${escapeHtml(group.eligibility.reason)}</p>
      </td>
      <td><div class="program-list">${group.programs.slice(0, 6).map((p) => renderTag(p.name)).join("")}</div></td>
      <td>
        ${renderRankReference(group)}
      </td>
      <td><span class="risk-chip ${group.risk.key}">${group.risk.label}</span><p class="school-sub">${escapeHtml(group.risk.reason)}</p></td>
      <td>
        <button class="text-button primary add-btn" data-id="${escapeAttr(group.id)}" ${canAdd ? "" : "disabled"}>${escapeHtml(addLabel)}</button>
        <button class="text-button detail-btn" data-school="${escapeAttr(group.school)}">详情</button>
      </td>
    `;
    els.schoolTableBody.append(tr);
  });

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToDraft(btn.dataset.id));
  });
  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", () => showSchoolProfile(btn.dataset.school));
  });
  maybeShowProfileForSearch(groups);
}

function renderInsights(groups) {
  const counts = groups.reduce(
    (acc, group) => {
      acc.total += 1;
      acc[group.risk.key] = (acc[group.risk.key] || 0) + 1;
      if (group.preference.score > 0) acc.preference += 1;
      return acc;
    },
    { total: 0, sprint: 0, steady: 0, safe: 0, high: 0, unknown: 0, preference: 0 }
  );
  const batch = getBatchConfig();
  const scoreBand = getScoreBand(state.profile.score);
  const cards = [
    ["院校数", counts.total, `当前分数段 ${scoreBand.low}-${scoreBand.high}`],
    ["冲", counts.sprint, "参考分数带高于当前分"],
    ["稳", counts.steady, "参考分数带接近当前分"],
    ["保", counts.safe, "参考分数带低于当前分"]
  ];
  els.insightStrip.innerHTML = cards
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${escapeHtml(String(value))}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");
}

function maybeShowProfileForSearch(groups) {
  const q = els.schoolSearch.value.trim();
  if (!q) return;
  const exact = groups.find((group) => group.school === q || group.school.includes(q));
  if (exact) showSchoolProfile(exact.school, false);
}

function showSchoolProfile(schoolName, scrollIntoView = true) {
  if (!els.schoolProfilePanel) return;
  const profile = getSchoolProfile(schoolName);
  const national = getNationalColleges().find((college) => college.name === schoolName);
  const group = state.groups.find((item) => item.school === schoolName);
  const tags = inferCollegeTags({ ...(national || {}), ...(group || {}), name: schoolName, school: schoolName });
  const strengths = profile?.strengths || group?.programs?.map((program) => program.name).slice(0, 6) || [];
  const featured = profile?.featuredMajors || group?.programs?.map((program) => program.name).slice(0, 6) || [];
  const links = profile?.links || (group?.website ? [["学校官网", group.website]] : []);
  els.schoolProfilePanel.classList.add("active");
  els.schoolProfilePanel.innerHTML = `
    <h3>${escapeHtml(schoolName)} ${profile?.shortName ? `<span class="muted">· ${escapeHtml(profile.shortName)}</span>` : ""}</h3>
    <div class="tag-row">${tags.map(renderTag).join("") || renderTag("资料待补充")}</div>
    <div class="profile-grid">
      <section class="profile-block">
        <p>${escapeHtml(profile?.overview || buildNationalOverview(national, group))}</p>
        <p><strong>专业优势：</strong>${escapeHtml(strengths.length ? strengths.join("、") : "待导入学校官网/招生章程资料")}</p>
        <p><strong>特色专业：</strong>${escapeHtml(featured.length ? featured.join("、") : "待导入")}</p>
      </section>
      <section class="profile-block">
        <p><strong>毕业去向：</strong>${escapeHtml(profile?.outcomes || "待导入就业质量报告。建议先看学校就业质量年度报告，再结合专业、城市和行业周期判断。")}</p>
        <p><strong>就业信息：</strong>${escapeHtml(profile?.employment || "就业率、升学率和单位流向以学校最新就业质量报告为准。")}</p>
        <div class="profile-links">
          ${links.map(([label, url]) => `<a href="${escapeAttr(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}
          <a href="https://gaokao.chsi.com.cn/" target="_blank" rel="noreferrer">阳光高考</a>
        </div>
      </section>
    </div>
  `;
  if (scrollIntoView) els.schoolProfilePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getSchoolProfile(schoolName) {
  return SCHOOL_PROFILES[schoolName] || null;
}

function buildNationalOverview(national, group) {
  if (national) {
    return `${national.name}位于${national.province}${national.city ? national.city : ""}，办学层次为${national.level}，主管部门为${national.authority || "未标注"}，备注为${national.remark || "无"}。`;
  }
  if (group) {
    return `${group.school}位于${group.province}${group.city}，${group.level}层次，${group.nature}${group.type}类院校。`;
  }
  return "教育部基础院校信息可在全国院校库中检索；官网简介、专业优势和就业报告可通过数据维护继续补充。";
}

function getNationalColleges() {
  return Array.isArray(window.NATIONAL_COLLEGES) ? window.NATIONAL_COLLEGES : [];
}

function getNationalMeta() {
  return window.NATIONAL_COLLEGE_META || {
    total: getNationalColleges().length,
    undergraduate: 0,
    junior: 0,
    provinceStats: []
  };
}

function renderNationalFilters() {
  if (!els.nationalProvince || els.nationalProvince.dataset.ready) return;
  const meta = getNationalMeta();
  const provinces = (meta.provinceStats || []).map((item) => item.province);
  els.nationalProvince.innerHTML = [
    `<option value="all">全部省份</option>`,
    ...provinces.map((province) => `<option value="${escapeAttr(province)}">${escapeHtml(province)}</option>`)
  ].join("");
  els.nationalProvince.dataset.ready = "true";
}

function filteredNationalColleges() {
  const q = els.nationalSearch.value.trim().toLowerCase();
  const province = els.nationalProvince.value;
  const level = els.nationalLevel.value;
  const nature = els.nationalNature.value;
  return getNationalColleges().filter((college) => {
    if (province !== "all" && college.province !== province) return false;
    if (level !== "all" && college.level !== level) return false;
    if (nature === "private" && !college.nature.includes("民办")) return false;
    if (nature === "public" && college.nature.includes("民办")) return false;
    if (!q) return true;
    const haystack = [college.name, college.code, college.authority, college.city, college.province, college.level, college.remark].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function renderNationalColleges() {
  if (!els.nationalCollegeTableBody) return;
  const meta = getNationalMeta();
  const colleges = filteredNationalColleges();
  const currentProvinceStats = meta.provinceStats?.find((item) => item.province === els.nationalProvince.value);
  els.nationalMeta.textContent = `教育部口径：普通高校 ${formatNumber(meta.total || 0)} 所，本科 ${formatNumber(meta.undergraduate || 0)} 所，专科 ${formatNumber(meta.junior || 0)} 所。当前筛选 ${formatNumber(colleges.length)} 所。`;
  const privateCount = colleges.filter((college) => college.nature.includes("民办")).length;
  const stats = [
    ["当前结果", colleges.length, "符合筛选条件的院校"],
    ["本科", colleges.filter((college) => college.level === "本科").length, "本科层次院校"],
    ["专科", colleges.filter((college) => college.level === "专科").length, "高职（专科）层次院校"],
    ["民办/独立", privateCount, currentProvinceStats ? `${currentProvinceStats.province} 共 ${currentProvinceStats.actualCount} 所` : "按主管部门和备注识别"]
  ];
  els.nationalStats.innerHTML = stats
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${formatNumber(value)}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");

  const visible = colleges.slice(0, 300);
  els.nationalCollegeTableBody.innerHTML = visible
    .map(
      (college) => {
        const tags = inferCollegeTags(college);
        return `
      <tr>
        <td><p class="school-name">${escapeHtml(college.name)}</p><p class="school-sub">序号 ${college.no}</p></td>
        <td>${escapeHtml(college.province)} · ${escapeHtml(college.city || "-")}</td>
        <td><span class="tag">${escapeHtml(college.level)}</span></td>
        <td><div class="tag-row">${tags.map(renderTag).join("")}</div></td>
        <td>${escapeHtml(college.authority || "-")}</td>
        <td><span class="tag">${escapeHtml(college.nature)}</span>${college.remark ? `<p class="school-sub">${escapeHtml(college.remark)}</p>` : ""}</td>
        <td>${escapeHtml(college.code)}</td>
        <td><button class="text-button national-detail-btn" data-school="${escapeAttr(college.name)}">详情</button></td>
      </tr>
    `;
      }
    )
    .join("");
  if (colleges.length > visible.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 8;
    td.className = "muted";
    td.textContent = `仅展示前 ${visible.length} 条，完整 ${colleges.length} 条可用“导出全国院校”。`;
    tr.append(td);
    els.nationalCollegeTableBody.append(tr);
  }
  document.querySelectorAll(".national-detail-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showNationalCollegeProfile(btn.dataset.school);
    });
  });
}

function showNationalCollegeProfile(schoolName) {
  if (!els.nationalProfilePanel) return;
  const national = getNationalColleges().find((college) => college.name === schoolName);
  const group = state.groups.find((item) => item.school === schoolName);
  const profile = getSchoolEnrichment(schoolName);
  const legacy = getSchoolProfile(schoolName);
  const tags = inferCollegeTags({ ...(national || {}), ...(group || {}), name: schoolName, school: schoolName });
  const advantageMajors = profile?.advantageMajors || (legacy?.strengths || []).map((name) => ({ name, intro: "该方向来自已维护的学校优势专业摘要，需结合学校官网和招生章程继续核验。" }));
  els.nationalProfilePanel.classList.add("active");
  els.nationalProfilePanel.innerHTML = `
    <div class="national-profile-head">
      <div>
        <h3>${escapeHtml(schoolName)}</h3>
        <p>${escapeHtml(profile?.overview || legacy?.overview || buildNationalOverview(national, group))}</p>
      </div>
      <div class="tag-row">${tags.map(renderTag).join("") || renderTag("资料待维护")}</div>
    </div>
    ${renderNationalProfileMetrics(profile)}
    <div class="profile-grid deep-profile-grid">
      <section class="profile-block">
        <h4>优势专业介绍</h4>
        ${renderAdvantageMajors(advantageMajors, schoolName)}
      </section>
      <section class="profile-block">
        <h4>重点实验室 / 科研平台</h4>
        ${renderLabList(profile, schoolName)}
      </section>
      <section class="profile-block">
        <h4>院士、杰青等师资指标</h4>
        ${renderFacultyList(profile, schoolName)}
      </section>
      <section class="profile-block">
        <h4>保研率、考研率、升学就业</h4>
        ${renderProgression(profile, schoolName)}
      </section>
      <section class="profile-block wide">
        <h4>学院官网</h4>
        ${renderCollegeSites(profile, schoolName)}
      </section>
      <section class="profile-block wide">
        <h4>信息来源</h4>
        <div class="profile-links">${renderProfileSources(profile, schoolName)}</div>
      </section>
    </div>
  `;
  els.nationalProfilePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getSchoolEnrichment(schoolName) {
  return window.SCHOOL_ENRICHMENT?.[schoolName] || null;
}

function renderNationalProfileMetrics(profile) {
  const labs = profile?.metrics?.labs || (profile?.labs?.count ? `${formatNumber(profile.labs.count)} 个` : "待导入");
  const academy = profile?.metrics?.academy || "待导入";
  const talent = profile?.metrics?.talent || "待导入";
  const progression = profile?.metrics?.progression || "待导入";
  const cards = [
    ["重点实验室", labs, "全国/国家级平台"],
    ["院士", academy, "以官方实时名录为准"],
    ["杰青", talent, "按学校/学院公开口径核验"],
    ["升学去向", progression, "保研、考研、出境深造分口径核对"]
  ];
  return `
    <div class="insight-strip compact-strip">
      ${cards.map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${escapeHtml(value)}</strong><p>${escapeHtml(hint)}</p></div>`).join("")}
    </div>
  `;
}

function renderAdvantageMajors(items, schoolName) {
  if (!items.length) {
    return `<p>${escapeHtml(schoolName)}的优势专业、国家级一流本科专业、特色专业和学科评估结果尚未导入。请先查看学校招生网、专业介绍页和本科教学质量报告。</p>`;
  }
  return `
    <div class="advantage-list">
      ${items.slice(0, 8).map((item) => `
        <div class="advantage-item">
          <strong>${escapeHtml(item.name)}</strong>
          <p>${escapeHtml(item.intro || "需结合学校官网、招生章程和专业培养方案核验。")}</p>
          ${item.source ? `<a href="${escapeAttr(item.source)}" target="_blank" rel="noreferrer">来源</a>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function renderLabList(profile, schoolName) {
  if (!profile?.labs?.items?.length) {
    return `<p>${escapeHtml(schoolName)}的国家级/省部级重点实验室和科研平台尚未导入。建议从学校官网“科学研究、科研平台、信息公开”栏目核验。</p>`;
  }
  return `
    <p>${escapeHtml(profile.labs.summary || "")}</p>
    <div class="lab-list">
      ${profile.labs.items.slice(0, 10).map((lab) => `
        <a href="${escapeAttr(lab.url)}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(lab.name)}</strong>
          ${lab.leader ? `<span>负责人：${escapeHtml(lab.leader)}</span>` : ""}
        </a>
      `).join("")}
    </div>
  `;
}

function renderFacultyList(profile, schoolName) {
  if (!profile?.faculty?.length) {
    return `<p>${escapeHtml(schoolName)}的院士、国家杰青、长江学者、万人计划等师资指标尚未导入。该类数据变动较大，应以学校人事处、科研部和学院师资页为准。</p>`;
  }
  return `
    <div class="info-list">
      ${profile.faculty.map((item) => `
        <p><strong>${escapeHtml(item.label)}：</strong>${escapeHtml(item.value)} ${item.source ? `<a href="${escapeAttr(item.source)}" target="_blank" rel="noreferrer">核验</a>` : ""}</p>
      `).join("")}
    </div>
  `;
}

function renderProgression(profile, schoolName) {
  const progression = profile?.progression;
  if (!progression) {
    return `<p>${escapeHtml(schoolName)}的保研率、考研率、升学率和就业质量报告尚未导入。不同学校口径差异很大，不能把“升学率”直接等同于“保研率”。</p>`;
  }
  return `
    <div class="info-list">
      <p><strong>就业率：</strong>${escapeHtml(progression.employmentRate || "待核验")}</p>
      <p><strong>升学率：</strong>${escapeHtml(progression.postgraduateRate || "待核验")}</p>
      <p><strong>考研/保研拆分：</strong>${escapeHtml(progression.graduateExamRate || "待核验")}</p>
      ${progression.source ? `<p><a href="${escapeAttr(progression.source)}" target="_blank" rel="noreferrer">质量报告 / 信息公开入口</a></p>` : ""}
    </div>
  `;
}

function renderCollegeSites(profile, schoolName) {
  if (!profile?.collegeSites?.length) {
    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(`${schoolName} 学院 官网`)}`;
    return `<p>学院官网目录尚未导入。</p><div class="profile-links"><a href="${escapeAttr(searchUrl)}" target="_blank" rel="noreferrer">检索学院官网</a></div>`;
  }
  return `
    <div class="college-link-grid">
      ${profile.collegeSites.map((site) => `<a href="${escapeAttr(site.url)}" target="_blank" rel="noreferrer">${escapeHtml(site.name)}</a>`).join("")}
    </div>
  `;
}

function renderProfileSources(profile, schoolName) {
  const sources = profile?.sources || [];
  const defaults = [
    { label: "阳光高考", url: "https://gaokao.chsi.com.cn/" },
    { label: "学校官网检索", url: `https://www.bing.com/search?q=${encodeURIComponent(`${schoolName} 官网 学校简介`)}` },
    { label: "招生网检索", url: `https://www.bing.com/search?q=${encodeURIComponent(`${schoolName} 本科招生网 专业介绍`)}` },
    { label: "科研平台检索", url: `https://www.bing.com/search?q=${encodeURIComponent(`${schoolName} 重点实验室 科研平台`)}` },
    { label: "就业质量报告检索", url: `https://www.bing.com/search?q=${encodeURIComponent(`${schoolName} 本科教学质量报告 就业质量报告`)}` }
  ];
  return [...sources, ...defaults]
    .map((item) => `<a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderMajorFilters() {
  if (!els.majorCategory || els.majorCategory.dataset.ready) return;
  const categories = (window.MAJOR_CATALOG_META?.disciplines || []).map((item) => item.name);
  els.majorCategory.innerHTML = [
    `<option value="all">全部门类</option>`,
    `<option value="recent">近五年新增</option>`,
    ...categories.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`)
  ].join("");
  els.majorCategory.dataset.ready = "true";
}

function filteredMajors() {
  const q = els.majorSearch.value.trim().toLowerCase();
  const category = els.majorCategory.value;
  return getMajorCatalog().filter((major) => {
    if (category === "recent" && !major.recent) return false;
    if (category !== "all" && category !== "recent" && major.discipline !== category) return false;
    if (!q) return true;
    const detail = getMajorDetail(major.name);
    const haystack = [
      major.name,
      major.code,
      major.discipline,
      major.className,
      major.degree,
      major.recent,
      major.note,
      ...(detail?.courses || []),
      ...(detail?.related || []),
      ...(detail?.outcomes || []),
      ...(detail?.rankSchools || []),
      detail?.note || ""
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function renderMajors() {
  if (!els.majorGrid) return;
  const majors = filteredMajors();
  renderMajorStats(majors);
  if (!majors.length) {
    els.majorGrid.innerHTML = `<div class="empty-state">没有匹配的专业。后续可在数据维护中继续导入专业库。</div>`;
    return;
  }
  els.majorGrid.innerHTML = majors
    .map(
      (major) => {
        const detail = getMajorDetail(major.name);
        const tags = [
          major.discipline,
          major.className,
          major.isSpecial ? "特设" : "",
          major.isControlled ? "国控" : "",
          major.recent
        ].filter(Boolean);
        return `
      <article class="major-card">
        <div class="draft-title-row">
          <h3>${escapeHtml(major.name)}</h3>
          <span class="status-pill valid">${escapeHtml(major.code)}</span>
        </div>
        <div class="tag-row">${tags.map(renderTag).join("")}</div>
        <p><strong>学位：</strong>${escapeHtml(major.degree || "按高校设置")} ${major.note ? `· ${escapeHtml(major.note)}` : ""}</p>
        <p><strong>主要课程：</strong>${escapeHtml(detail?.courses?.join("、") || genericCoursesForMajor(major))}</p>
        <p><strong>相近专业：</strong>${escapeHtml(detail?.related?.join("、") || genericRelatedForMajor(major))}</p>
        <p><strong>毕业去向：</strong>${escapeHtml(detail?.outcomes?.join("、") || genericOutcomesForMajor(major))}</p>
        <p><strong>优势高校参考：</strong>${escapeHtml(detail?.rankSchools?.join("、") || "需结合院校专业实力、学科评估、招生计划和就业报告核对")}</p>
        <p>${escapeHtml(detail?.note || "目录信息来自教育部 2026 本科专业目录；具体课程、培养方向和就业口径以高校培养方案/招生章程为准。")}</p>
      </article>
    `;
      }
    )
    .join("");
}

function getMajorCatalog() {
  return Array.isArray(window.MAJOR_CATALOG) ? window.MAJOR_CATALOG : MAJOR_PROFILES.map((item, index) => ({
    code: `demo-${index + 1}`,
    name: item.name,
    discipline: item.category,
    className: item.category,
    degree: item.category,
    recent: "",
    note: ""
  }));
}

function getMajorDetail(name) {
  return MAJOR_PROFILES.find((item) => item.name === name) || null;
}

function renderMajorStats(majors) {
  if (!els.majorStats) return;
  const meta = window.MAJOR_CATALOG_META || {};
  const cards = [
    ["当前结果", majors.length, "符合筛选条件的专业"],
    ["目录总数", meta.total || getMajorCatalog().length, "教育部 2026 本科专业目录"],
    ["学科门类", meta.disciplines?.length || 0, "按教育部门类划分"],
    ["近五年新增", majors.filter((item) => item.recent).length, `目录标记 ${meta.recentCount || 0} 个`]
  ];
  els.majorStats.innerHTML = cards
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${formatNumber(value)}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");
}

function genericCoursesForMajor(major) {
  if (major.discipline === "工学") return "高等数学、大学物理、程序/工程基础、专业基础课、专业核心课、实践实验";
  if (major.discipline === "理学") return "高等数学、基础科学课程、实验课程、专业理论课、科研训练";
  if (major.discipline === "医学") return "基础医学、临床/专业基础、实验实训、专业核心课程、实践训练";
  if (major.discipline === "文学") return "语言文字基础、文学/传播基础、写作与表达、专业方向课程";
  if (major.discipline === "法学") return "法学/社会科学基础、专业核心课程、案例研习、实践训练";
  if (major.discipline === "管理学") return "管理学、经济学、统计/数据基础、专业核心课、案例与实践";
  if (major.discipline === "经济学") return "微观经济学、宏观经济学、统计学、计量/数据基础、专业核心课";
  if (major.discipline === "教育学") return "教育学、心理学、课程教学论、教育实践、专业方向课程";
  if (major.discipline === "艺术学") return "艺术基础、专业技法、创作实践、作品/项目训练、艺术史论";
  return "通识课程、专业基础课程、专业核心课程、实践训练";
}

function genericRelatedForMajor(major) {
  const catalog = getMajorCatalog();
  return catalog
    .filter((item) => item.classCode === major.classCode && item.code !== major.code)
    .slice(0, 5)
    .map((item) => item.name)
    .join("、") || "同一专业类下暂无更多目录专业";
}

function genericOutcomesForMajor(major) {
  if (major.discipline === "工学") return "工程技术、研发设计、制造与信息技术企业、央国企、科研院所、继续深造";
  if (major.discipline === "理学") return "科研深造、教育科研、数据分析、技术研发、交叉学科方向";
  if (major.discipline === "医学") return "医疗卫生、公共卫生、医药健康产业、规培/继续深造";
  if (major.discipline === "文学") return "教育、传媒出版、文化传播、公务员/事业单位、继续深造";
  if (major.discipline === "法学") return "法律服务、司法机关、公务员、企业合规、继续深造";
  if (major.discipline === "管理学") return "企业管理、咨询、金融与运营、公共管理、数据管理、继续深造";
  if (major.discipline === "经济学") return "金融、财税、咨询、数据分析、政府与企事业单位、继续深造";
  if (major.discipline === "教育学") return "教育教学、培训教研、教育管理、体育/心理等相关行业";
  if (major.discipline === "艺术学") return "设计创作、文娱传媒、艺术教育、文化产业、继续深造";
  return "专业相关行业、企事业单位、科研或继续深造";
}

function renderMajorFilters() {
  if (!els.majorCategory || els.majorCategory.dataset.ready) return;
  const categories = (window.MAJOR_CATALOG_META?.disciplines || []).map((item) => item.name);
  els.majorCategory.innerHTML = [
    `<option value="all">全部门类</option>`,
    `<option value="recent">近五年新增</option>`,
    ...categories.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`)
  ].join("");
  els.majorCategory.dataset.ready = "true";
}

function filteredMajors() {
  const q = els.majorSearch.value.trim().toLowerCase();
  const category = els.majorCategory.value;
  return getMajorCatalog().filter((major) => {
    if (category === "recent" && !major.recent) return false;
    if (category !== "all" && category !== "recent" && major.discipline !== category) return false;
    if (!q) return true;
    const detail = getMajorDetail(major.name);
    const courseRef = getCourseReferenceForMajor(major);
    const courseText = (courseRef?.courses || [])
      .map((course) => [course.name, course.org, course.abstract].filter(Boolean).join(" "))
      .join(" ");
    const haystack = [
      major.name,
      major.code,
      major.discipline,
      major.className,
      major.degree,
      major.recent,
      major.note,
      courseRef?.major || "",
      courseText,
      ...(detail?.courses || []),
      ...(detail?.related || []),
      ...(detail?.outcomes || []),
      ...(detail?.rankSchools || []),
      detail?.note || ""
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

function renderMajors() {
  if (!els.majorGrid) return;
  const majors = filteredMajors();
  renderMajorStats(majors);
  if (!majors.length) {
    els.majorGrid.innerHTML = `<div class="empty-state">没有匹配的专业。可换用专业名称、课程、就业方向或优势高校关键词检索。</div>`;
    return;
  }
  const tree = buildMajorTree(majors);
  const shouldAutoOpen = Boolean(els.majorSearch.value.trim()) || els.majorCategory.value !== "all";
  els.majorGrid.innerHTML = `
    <div class="major-tree">
      ${tree.map((discipline, index) => renderMajorDiscipline(discipline, index, shouldAutoOpen)).join("")}
    </div>
  `;
}

function buildMajorTree(majors) {
  const disciplineMap = new Map();
  majors.forEach((major) => {
    const disciplineKey = major.discipline || "未分类";
    if (!disciplineMap.has(disciplineKey)) {
      disciplineMap.set(disciplineKey, { name: disciplineKey, count: 0, classes: new Map() });
    }
    const discipline = disciplineMap.get(disciplineKey);
    discipline.count += 1;
    const classKey = major.classCode || major.className || "other";
    if (!discipline.classes.has(classKey)) {
      discipline.classes.set(classKey, {
        code: major.classCode || "",
        name: major.className || "其他专业类",
        count: 0,
        majors: []
      });
    }
    const classGroup = discipline.classes.get(classKey);
    classGroup.count += 1;
    classGroup.majors.push(major);
  });
  return Array.from(disciplineMap.values()).map((discipline) => ({
    ...discipline,
    classes: Array.from(discipline.classes.values())
  }));
}

function renderMajorDiscipline(discipline, index, shouldAutoOpen) {
  const open = state.majorExpandMode === "all" || shouldAutoOpen || (state.majorExpandMode === "default" && index === 0);
  return `
    <details class="major-discipline" ${open ? "open" : ""}>
      <summary>
        <span class="major-summary-title">${escapeHtml(discipline.name)}</span>
        <span class="major-summary-meta">${formatNumber(discipline.count)} 个专业 · ${formatNumber(discipline.classes.length)} 个专业类</span>
      </summary>
      <div class="major-class-list">
        ${discipline.classes.map((classGroup, classIndex) => renderMajorClass(classGroup, index, classIndex, shouldAutoOpen)).join("")}
      </div>
    </details>
  `;
}

function renderMajorClass(classGroup, disciplineIndex, classIndex, shouldAutoOpen) {
  const open =
    state.majorExpandMode === "all" ||
    shouldAutoOpen ||
    (state.majorExpandMode === "default" && disciplineIndex === 0 && classIndex === 0);
  const classLabel = [classGroup.code, classGroup.name].filter(Boolean).join(" ");
  return `
    <details class="major-class" ${open ? "open" : ""}>
      <summary>
        <span class="major-summary-title">${escapeHtml(classLabel || "其他专业类")}</span>
        <span class="major-summary-meta">${formatNumber(classGroup.count)} 个专业</span>
      </summary>
      <div class="major-leaf-list">
        ${classGroup.majors.map((major) => renderMajorLeaf(major, shouldAutoOpen)).join("")}
      </div>
    </details>
  `;
}

function renderMajorLeaf(major, shouldAutoOpen) {
  const detail = getMajorDetail(major.name);
  const tags = [
    major.discipline,
    major.className,
    major.isSpecial ? "特设专业" : "",
    major.isControlled ? "国家控制布点" : "",
    major.recent ? `新增：${major.recent}` : ""
  ].filter(Boolean);
  const open = state.majorExpandMode === "all" || shouldAutoOpen;
  return `
    <details class="major-leaf" ${open ? "open" : ""}>
      <summary>
        <span>
          <strong>${escapeHtml(major.name)}</strong>
          <span class="major-code">${escapeHtml(major.code)}</span>
        </span>
        <span class="major-degree">${escapeHtml(major.degree || "按高校设置")}学位</span>
      </summary>
      <div class="tag-row">${tags.map(renderTag).join("")}</div>
      ${renderMajorDetailPanel(major, detail)}
    </details>
  `;
}

function renderMajorDetailPanel(major, detail) {
  const courseRef = getCourseReferenceForMajor(major);
  const courseNames = courseRef ? formatCourseNames(courseRef) : genericCoursesForMajor(major).split("、");
  const related = detail?.related?.length ? detail.related : genericRelatedForMajor(major).split("、").filter(Boolean);
  const outcomes = detail?.outcomes?.length ? detail.outcomes : genericOutcomesForMajor(major).split("、").filter(Boolean);
  const rankSchools = detail?.rankSchools?.length
    ? detail.rankSchools
    : ["结合教育部学科评估、软科/校友会等公开排名、院校就业质量报告和当年招生计划核对"];
  const sourceNote = courseRef
    ? `课程参考来自 EduBigdata 公开课程大纲样本：${courseRef.major}；不同高校培养方案会有差异。`
    : "课程为按教育部专业门类整理的通用参考，具体课程以高校培养方案和招生章程为准。";
  return `
    <div class="major-detail-panel">
      <div>
        <h4>主要课程</h4>
        <div class="course-chip-row">${courseNames.map((name) => `<span class="course-chip">${escapeHtml(name)}</span>`).join("")}</div>
        <p class="source-note">${escapeHtml(sourceNote)}</p>
      </div>
      <div>
        <h4>相近专业</h4>
        <p>${escapeHtml(related.join("、"))}</p>
      </div>
      <div>
        <h4>毕业去向</h4>
        <p>${escapeHtml(outcomes.join("、"))}</p>
      </div>
      <div>
        <h4>优势高校参考</h4>
        <p>${escapeHtml(rankSchools.join("、"))}</p>
      </div>
      <div>
        <h4>目录备注</h4>
        <p>${escapeHtml([major.note, detail?.note].filter(Boolean).join("；") || "依据教育部《普通高等学校本科专业目录（2026年）》归类。")}</p>
      </div>
    </div>
  `;
}

function getCourseReferenceForMajor(major) {
  const refs = Array.isArray(window.MAJOR_COURSE_REFERENCES) ? window.MAJOR_COURSE_REFERENCES : [];
  if (!refs.length || !major?.name) return null;
  const normalizedName = normalizeMajorName(major.name);
  if (!normalizedName) return null;
  const exact = refs.find((item) => normalizeMajorName(item.major) === normalizedName);
  if (exact) return exact;
  return refs.find((item) => {
    const refName = normalizeMajorName(item.major);
    if (!refName || refName.length < 2) return false;
    return refName.includes(normalizedName) || normalizedName.includes(refName);
  }) || null;
}

function normalizeMajorName(value) {
  return String(value || "")
    .replace(/[（）()]/g, "")
    .replace(/[^\p{Letter}\p{Number}]/gu, "")
    .toLowerCase();
}

function formatCourseNames(courseRef) {
  const names = Array.from(new Set((courseRef?.courses || []).map((course) => course.name).filter(Boolean)));
  return names.slice(0, 14);
}

function renderMajorStats(majors) {
  if (!els.majorStats) return;
  const meta = window.MAJOR_CATALOG_META || {};
  const courseMatched = majors.filter((major) => getCourseReferenceForMajor(major)).length;
  const courseMeta = window.MAJOR_COURSE_META || {};
  const cards = [
    ["当前结果", majors.length, "符合筛选条件的专业"],
    ["目录总数", meta.total || getMajorCatalog().length, "教育部 2026 本科专业目录"],
    ["学科门类", meta.disciplines?.length || 0, "按门类和专业类分组"],
    ["课程样本", courseMatched, `EduBigdata 已导入 ${courseMeta.majorCount || 0} 个课程组`]
  ];
  els.majorStats.innerHTML = cards
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${formatNumber(value)}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");
}

function genericCoursesForMajor(major) {
  const byDiscipline = {
    工学: "高等数学、大学物理、工程制图/程序设计、专业基础课、专业核心课、实验实训、毕业设计",
    理学: "高等数学、基础科学课程、实验课程、专业理论课、科研训练、数据分析",
    医学: "基础医学、临床/专业基础、实验实训、专业核心课程、见习实习、规范化训练",
    文学: "语言文字基础、文学/传播基础、写作与表达、专业方向课程、实践采写/翻译",
    法学: "法学/社会科学基础、专业核心课程、案例研习、法律文书、实践训练",
    管理学: "管理学、经济学、统计/数据基础、专业核心课、案例分析、项目实践",
    经济学: "微观经济学、宏观经济学、统计学、计量/数据基础、金融财税方向课",
    教育学: "教育学、心理学、课程教学论、教育实践、专业方向课程",
    艺术学: "艺术基础、专业技法、创作实践、作品/项目训练、艺术史论",
    农学: "生物学基础、农业科学基础、专业核心课、实验实训、生产实践",
    历史学: "史学理论、中国史/世界史基础、文献阅读、考古/档案方法、专题研习",
    哲学: "哲学导论、逻辑学、伦理学、中西哲学史、经典研读、专题研讨",
    交叉学科: "数学/数据基础、相关学科导论、交叉专业核心课、项目实践、科研训练"
  };
  return byDiscipline[major.discipline] || "通识课程、专业基础课程、专业核心课程、实践训练";
}

function genericRelatedForMajor(major) {
  const catalog = getMajorCatalog();
  return catalog
    .filter((item) => item.classCode === major.classCode && item.code !== major.code)
    .slice(0, 6)
    .map((item) => item.name)
    .join("、") || "同一专业类下暂无更多目录专业";
}

function genericOutcomesForMajor(major) {
  const byDiscipline = {
    工学: "工程技术、研发设计、制造与信息技术企业、央国企、科研院所、继续深造",
    理学: "科研深造、教育科研、数据分析、技术研发、交叉学科方向",
    医学: "医疗卫生、公共卫生、医药健康产业、规培/继续深造",
    文学: "教育、传媒出版、文化传播、公务员/事业单位、继续深造",
    法学: "法律服务、司法机关、公务员、企业合规、继续深造",
    管理学: "企业管理、咨询、金融与运营、公共管理、数据管理、继续深造",
    经济学: "金融、财税、咨询、数据分析、政府与企事业单位、继续深造",
    教育学: "教育教学、培训教研、教育管理、体育/心理等相关行业",
    艺术学: "设计创作、文娱传媒、艺术教育、文化产业、继续深造",
    农学: "农业科技、种业与食品、生态环境、农林企事业单位、基层农技推广、继续深造",
    历史学: "教育科研、文博考古、档案文献、文化遗产保护、出版传媒、继续深造",
    哲学: "教育科研、党政机关、文化出版、咨询策划、继续深造",
    交叉学科: "跨学科研发、数据与智能产业、科研院所、新兴产业岗位、继续深造"
  };
  return byDiscipline[major.discipline] || "专业相关行业、企事业单位、科研或继续深造";
}

function renderCareers() {
  if (!els.careerGrid) return;
  renderCareerFilters();
  const careers = filteredCareers();
  const meta = window.CAREER_CATALOG_META || {};
  const middleCount = careers.reduce((sum, item) => sum + item.categories.length, 0);
  const cards = [
    ["当前大类", careers.length, "符合筛选的大类"],
    ["当前中类", middleCount, "符合筛选的职业中类"],
    ["大典职业", meta.occupations || 1636, "2022 版细类职业"],
    ["工种", meta.workTypes || 2967, "职业下设工种"]
  ];
  els.careerStats.innerHTML = cards
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${formatNumber(value)}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");
  if (!careers.length) {
    els.careerGrid.innerHTML = `<div class="empty-state">没有匹配的职业类别。</div>`;
    return;
  }
  const hasQuery = Boolean(els.careerSearch?.value.trim());
  els.careerGrid.innerHTML = careers
    .map((career, index) => renderCareerCategory(career, hasQuery || index === 0))
    .join("");
}

function renderCareerFilters() {
  if (!els.careerCategory || els.careerCategory.dataset.ready) return;
  const careers = getCareerCatalog();
  els.careerCategory.innerHTML = [
    `<option value="all">全部职业大类</option>`,
    ...careers.map((item) => `<option value="${escapeAttr(item.code)}">${escapeHtml(item.code)} ${escapeHtml(item.name)}</option>`)
  ].join("");
  els.careerCategory.dataset.ready = "true";
}

function getCareerCatalog() {
  return Array.isArray(window.CAREER_CATALOG) ? window.CAREER_CATALOG : [];
}

function filteredCareers() {
  const q = els.careerSearch?.value.trim().toLowerCase() || "";
  const category = els.careerCategory?.value || "all";
  return getCareerCatalog()
    .filter((item) => category === "all" || item.code === category)
    .map((item) => {
      if (!q) return item;
      const categories = item.categories.filter((name) => {
        const haystack = [item.code, item.name, name, ...(item.majors || [])].join(" ").toLowerCase();
        return haystack.includes(q);
      });
      const selfMatch = [item.code, item.name, ...(item.majors || [])].join(" ").toLowerCase().includes(q);
      return selfMatch ? item : { ...item, categories };
    })
    .filter((item) => item.categories.length);
}

function renderCareerCategory(career, open) {
  return `
    <details class="career-category" ${open ? "open" : ""}>
      <summary>
        <span class="major-summary-title">${escapeHtml(career.code)} ${escapeHtml(career.name)}</span>
        <span class="major-summary-meta">${formatNumber(career.categories.length)} 个中类 · 细类职业 ${formatNumber(career.count)}</span>
      </summary>
      <div class="career-detail">
        <p><strong>关联专业：</strong>${escapeHtml((career.majors || []).join("、"))}</p>
        <p class="source-note">来源口径：2022 版职业分类大典共 8 个大类、79 个中类、449 个小类、1636 个细类职业、2967 个工种。当前页面先展示到中类。</p>
        <div class="career-subgrid">
          ${career.categories.map((name) => renderCareerMiddleCategory(career, name)).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderCareerMiddleCategory(career, name) {
  const majors = career.majors || [];
  return `
    <article class="career-middle-card">
      <h3>${escapeHtml(name)}</h3>
      <p><strong>可重点了解专业：</strong>${escapeHtml(majors.slice(0, 8).join("、") || "按具体岗位要求核对")}</p>
      <p>${escapeHtml(careerGuidanceForCategory(career.name, name))}</p>
    </article>
  `;
}

function careerGuidanceForCategory(majorName, middleName) {
  if (/工程|制造|设备|电气|电子|机械|建筑|采矿|化学|计算机|信息/.test(middleName)) return "填报时重点看专业课程、实验平台、实习基地、产业城市和是否有强制身体条件。";
  if (/卫生|健康|医学|护理|药/.test(middleName)) return "重点核对学制、执业资格、规培路径、身体条件和医院/公共卫生就业渠道。";
  if (/教学|教育/.test(middleName)) return "重点核对师范认证、公费师范/优师专项、教师资格、地方招教和学科岗位需求。";
  if (/金融|经济|法律|社会|宗教|新闻|文化|文学|艺术|体育/.test(middleName)) return "重点看院校平台、实习资源、资格证书、语言写作能力和升学深造路径。";
  if (/农业|林业|畜牧|渔业/.test(middleName)) return "重点看现代农业、种业、食品、生态环境、基层服务和涉农科研平台。";
  if (/负责人|办事|安全|消防|服务|商务|居民|交通|仓储|邮政/.test(middleName + majorName)) return "重点看岗位准入、职业资格、实践经验、沟通组织能力和城市就业资源。";
  return "建议结合岗位说明、职业资格、专业课程、院校平台和地区产业需求综合判断。";
}

function renderProvinceGuides(filter = document.querySelector("[data-guide-filter].active")?.dataset.guideFilter || "all") {
  if (!els.provinceGuideGrid) return;
  const stats = getNationalMeta().provinceStats || [];
  const statMap = new Map(stats.map((item) => [item.province, item]));
  const guides = PROVINCE_GUIDES.filter((guide) => filter === "all" || guide.mode === filter);
  els.provinceGuideGrid.innerHTML = guides
    .map((guide) => {
      const stat = statMap.get(guide.province);
      const counts = stat ? `高校 ${stat.actualCount} 所，本科 ${stat.undergraduate}，专科 ${stat.junior}` : "院校统计待导入";
      const modeText = guide.mode === "traditional" ? "传统文理/本地政策" : guide.mode;
      return `
        <article class="guide-card">
          <div class="draft-title-row">
            <h3>${escapeHtml(guide.province)}</h3>
            <span class="status-pill valid">${escapeHtml(modeText)}</span>
          </div>
          <p>${escapeHtml(counts)}</p>
          <p>${escapeHtml(guide.note)}</p>
          <a href="${escapeAttr(guide.url)}" target="_blank" rel="noreferrer">省考试院官网</a>
        </article>
      `;
    })
    .join("");
}

function buildHistoryRecords() {
  const records = [];
  state.groups.forEach((group) => {
    const year = Number(group.year || group.admissionYear || 2024);
    if (group.lastRank) {
      records.push({
        year,
        school: group.school,
        groupCode: group.groupCode,
        level: group.level,
        city: group.city,
        major: "专业组最低投档",
        rank: group.lastRank,
        source: group.source || "演示数据"
      });
    }
    (group.programs || []).forEach((program) => {
      if (!program.rank) return;
      records.push({
        year,
        school: group.school,
        groupCode: group.groupCode,
        level: group.level,
        city: group.city,
        major: program.name,
        rank: program.rank,
        source: group.source || "演示数据"
      });
    });
  });
  return records;
}

function filteredHistoryRecords() {
  const q = els.historySearch.value.trim().toLowerCase();
  const year = els.historyYear.value;
  const level = els.historyLevel.value;
  return buildHistoryRecords()
    .filter((record) => year === "all" || String(record.year) === year)
    .filter((record) => level === "all" || record.level === level)
    .filter((record) => {
      if (!q) return true;
      const haystack = [record.school, record.groupCode, record.city, record.major, record.source].join(" ").toLowerCase();
      return haystack.includes(q);
    })
    .sort((a, b) => a.rank - b.rank || a.school.localeCompare(b.school, "zh-CN"));
}

function renderHistory() {
  if (!els.historyTableBody) return;
  const records = filteredHistoryRecords();
  const sources = window.LOCAL_SOURCE_FILES || [];
  const blockedSources = sources.filter((file) => /投档|专业分|计划|报考指导/.test(file.name) && file.status !== "可读取").length;
  const colleges = new Set(records.map((record) => `${record.school}-${record.groupCode}`)).size;
  const stats = [
    ["当前记录", records.length, "专业组最低与专业位次"],
    ["院校专业组", colleges, "当前可展示记录"],
    ["可导入来源", sources.filter((file) => /投档|专业分|计划/.test(file.name)).length, "本地资料夹相关文件"],
    ["待下载资料", blockedSources, "OneDrive 占位或不可解析"]
  ];
  els.historyStats.innerHTML = stats
    .map(([label, value, hint]) => `<div class="insight-card"><p>${escapeHtml(label)}</p><strong>${formatNumber(value)}</strong><p>${escapeHtml(hint)}</p></div>`)
    .join("");
  const visible = records.slice(0, 300);
  els.historyTableBody.innerHTML = visible
    .map(
      (record) => `
      <tr>
        <td>${record.year}</td>
        <td><p class="school-name">${escapeHtml(record.school)} ${escapeHtml(record.groupCode)}组</p></td>
        <td>${escapeHtml(record.level)} · ${escapeHtml(record.city || "-")}</td>
        <td>${escapeHtml(record.major)}</td>
        <td><strong>${formatNumber(record.rank)}</strong></td>
        <td><span class="tag">${escapeHtml(record.source)}</span></td>
      </tr>
    `
    )
    .join("");
}

function renderKnowledge() {
  if (!els.knowledgeGrid) return;
  const localNotes = (window.CONSULTING_NOTES || []).map((item) => ({
    title: item.title,
    summary: item.summary,
    source: item.source
  }));
  const cards = [...BASE_KNOWLEDGE, ...localNotes];
  els.knowledgeGrid.innerHTML = cards
    .map(
      (item) => `
      <article class="knowledge-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        ${item.source ? `<span class="tag">${escapeHtml(item.source)}</span>` : ""}
      </article>
    `
    )
    .join("");
}

function renderLocalSources() {
  if (!els.localSourceList) return;
  const meta = window.LOCAL_SOURCE_META || { totalFiles: 0, readable: 0, placeholders: 0 };
  const files = window.LOCAL_SOURCE_FILES || [];
  els.localSourceMeta.textContent = `扫描 ${meta.totalFiles} 个文件，可直接读取 ${meta.readable} 个，疑似 OneDrive 占位 ${meta.placeholders} 个。`;
  els.localSourceList.innerHTML = files
    .map(
      (file) => `
      <div class="source-file">
        <div>
          <strong title="${escapeAttr(file.relativePath)}">${escapeHtml(file.name)}</strong>
          <small>${escapeHtml(file.category)} · ${escapeHtml(file.relativePath)}</small>
        </div>
        <span>${formatBytes(file.size)}</span>
        <span>${escapeHtml(file.status)}</span>
      </div>
    `
    )
    .join("");
}

function addToDraft(groupId) {
  const batch = getBatchConfig();
  if (state.draft.length >= batch.maxGroups) {
    showMessage(`当前批次最多 ${batch.maxGroups} 个院校专业组。`);
    return;
  }
  if (state.draft.some((item) => item.groupId === groupId)) {
    showMessage("该院校专业组已在草表中。");
    return;
  }
  const group = getCatalogGroupById(groupId);
  if (!group) return;
  state.draft.push({
    groupId,
    selectedPrograms: group.programs.slice(0, Math.min(3, group.programs.length)).map((p) => p.code),
    adjustment: true
  });
  saveDraft();
  renderSchoolTable();
  renderDraft();
  renderValidation();
  showMessage(`${group.school} ${group.groupCode}组已加入志愿表。`);
}

function renderDraft() {
  const batch = getBatchConfig();
  const draftGroups = getDraftGroups();
  els.draftCounter.textContent = `${state.draft.length} / ${batch.maxGroups} 个院校专业组`;
  renderMixMeter(draftGroups);
  els.draftList.innerHTML = "";

  if (!state.draft.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "志愿表为空。点击院校库里的“加入/参考加入”，系统会按点击顺序生成志愿表。";
    els.draftList.append(empty);
    return;
  }

  state.draft.forEach((item, index) => {
    const group = getCatalogGroupById(item.groupId);
    if (!group) return;
    const risk = assessRisk(group, state.profile);
    const node = els.draftTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".draft-order").textContent = String(index + 1).padStart(2, "0");
    const orderInput = node.querySelector(".order-jump-input");
    orderInput.value = String(index + 1);
    orderInput.max = String(state.draft.length);
    orderInput.addEventListener("change", () => moveDraftTo(index, Number(orderInput.value) - 1));
    orderInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        moveDraftTo(index, Number(orderInput.value) - 1);
      }
    });
    node.querySelector("h3").textContent = `${group.school} ${group.groupCode}组`;
    const ranks = getRankReference(group);
    node.querySelector("p").textContent = `${POLICY.batches[group.batch]?.name || group.batch} · ${formatRequirement(group)} · ${group.city} · 2026预测位次 ${formatNumber(ranks.rank2026)}`;
    const chip = node.querySelector(".risk-chip");
    chip.textContent = risk.label;
    chip.className = `risk-chip ${risk.key}`;
    const picker = node.querySelector(".major-picker");
    group.programs.slice(0, 6).forEach((program) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = item.selectedPrograms.includes(program.code);
      checkbox.addEventListener("change", () => toggleProgram(index, program.code, checkbox.checked));
      label.append(checkbox, `${program.code} ${program.name}`);
      picker.append(label);
    });
    const adjustInput = node.querySelector(".adjust-input");
    adjustInput.checked = item.adjustment;
    adjustInput.disabled = !batch.adjustment;
    adjustInput.addEventListener("change", () => {
      state.draft[index].adjustment = adjustInput.checked;
      saveDraft();
      renderValidation();
    });
    node.querySelector(".move-up").disabled = index === 0;
    node.querySelector(".move-down").disabled = index === state.draft.length - 1;
    node.querySelector(".move-up").addEventListener("click", () => moveDraft(index, -1));
    node.querySelector(".move-down").addEventListener("click", () => moveDraft(index, 1));
    node.querySelector(".remove").addEventListener("click", () => removeDraft(index));
    els.draftList.append(node);
  });
}

function getDraftGroups() {
  return state.draft
    .map((item) => getCatalogGroupById(item.groupId))
    .filter(Boolean)
    .map((group) => ({ ...group, risk: assessRisk(group, state.profile), eligibility: checkEligibility(group, state.profile) }));
}

function toggleProgram(index, code, checked) {
  const item = state.draft[index];
  const batch = getBatchConfig();
  const next = new Set(item.selectedPrograms);
  if (checked) {
    if (next.size >= batch.maxMajors) {
      renderDraft();
      showMessage(`每个院校专业组最多 ${batch.maxMajors} 个专业志愿。`);
      return;
    }
    next.add(code);
  } else {
    next.delete(code);
  }
  item.selectedPrograms = Array.from(next);
  saveDraft();
  renderValidation();
}

function moveDraft(index, direction) {
  const target = index + direction;
  moveDraftTo(index, target);
}

function moveDraftTo(index, target) {
  const normalizedTarget = Math.max(0, Math.min(state.draft.length - 1, Number(target)));
  if (!Number.isFinite(normalizedTarget)) {
    renderDraft();
    return;
  }
  if (normalizedTarget < 0 || normalizedTarget >= state.draft.length || normalizedTarget === index) {
    renderDraft();
    return;
  }
  const [item] = state.draft.splice(index, 1);
  state.draft.splice(normalizedTarget, 0, item);
  saveDraft();
  renderDraft();
  renderValidation();
}

function removeDraft(index) {
  state.draft.splice(index, 1);
  saveDraft();
  renderDraft();
  renderValidation();
}

function clearDraft() {
  if (!state.draft.length) return;
  state.draft = [];
  saveDraft();
  renderDraft();
  renderValidation();
}

function autoSortDraft() {
  state.draft.sort((a, b) => {
    const ga = getCatalogGroupById(a.groupId);
    const gb = getCatalogGroupById(b.groupId);
    if (!ga || !gb) return 0;
    return riskWeight(assessRisk(ga, state.profile).key) - riskWeight(assessRisk(gb, state.profile).key);
  });
  saveDraft();
  renderDraft();
}

function renderMixMeter(draftGroups) {
  const total = Math.max(draftGroups.length, 1);
  const counts = draftGroups.reduce(
    (acc, group) => {
      acc[group.risk.key] = (acc[group.risk.key] || 0) + 1;
      return acc;
    },
    { sprint: 0, steady: 0, safe: 0, high: 0 }
  );
  const items = [
    ["冲", counts.sprint, "sprint"],
    ["稳", counts.steady, "steady"],
    ["保", counts.safe, "safe"],
    ["高风险", counts.high, "high"]
  ];
  els.mixMeter.innerHTML = items
    .map(([label, count, key]) => {
      const pct = Math.round((count / total) * 100);
      return `<div class="mix-item"><p>${label} · ${count} 个</p><div class="bar"><span class="${key}" style="width:${pct}%"></span></div></div>`;
    })
    .join("");
}

function renderValidation() {
  const batch = getBatchConfig();
  const messages = [];
  const draftGroups = getDraftGroups();
  const invalidSubjects = draftGroups.filter((group) => !group.eligibility.ok);
  const emptyMajors = state.draft.filter((item) => !item.selectedPrograms.length);
  const overMajors = state.draft.filter((item) => item.selectedPrograms.length > batch.maxMajors);
  const duplicates = findDuplicates(state.draft.map((item) => item.groupId));
  messages.push({
    type: state.draft.length <= batch.maxGroups ? "ok" : "fail",
    text: `院校专业组数量：${state.draft.length}/${batch.maxGroups}`
  });
  messages.push({
    type: invalidSubjects.length ? "fail" : "ok",
    text: invalidSubjects.length ? `有 ${invalidSubjects.length} 个专业组选科不匹配` : "选科要求均匹配"
  });
  messages.push({
    type: emptyMajors.length ? "warn" : "ok",
    text: emptyMajors.length ? `有 ${emptyMajors.length} 个专业组未选择专业` : `每组专业志愿不超过 ${batch.maxMajors} 个`
  });
  messages.push({
    type: overMajors.length ? "fail" : "ok",
    text: overMajors.length ? `有 ${overMajors.length} 个专业组超出专业数限制` : "专业数量符合规则"
  });
  messages.push({
    type: duplicates.length ? "fail" : "ok",
    text: duplicates.length ? "存在重复院校专业组" : "没有重复院校专业组"
  });
  messages.push({
    type: state.profile.secondChoices.length === 2 ? "ok" : "fail",
    text: `再选科目：${state.profile.secondChoices.length}/2`
  });

  els.validationList.innerHTML = messages.map((msg) => `<li class="${msg.type}">${escapeHtml(msg.text)}</li>`).join("");
}

function runSimulation() {
  const errors = getDraftGroups().filter((group) => !group.eligibility.ok);
  if (!state.draft.length) {
    els.simulationResult.className = "simulation-result empty-state";
    els.simulationResult.textContent = "草表为空。";
    renderValidation();
    return;
  }
  if (errors.length) {
    els.simulationResult.className = "simulation-result";
    els.simulationResult.innerHTML = `<h3>无法完成模拟</h3><p class="muted">草表中存在选科不匹配的院校专业组，请先调整。</p>`;
    renderValidation();
    return;
  }

  let accepted = null;
  const checked = [];
  for (let i = 0; i < state.draft.length; i += 1) {
    const item = state.draft[i];
    const group = getCatalogGroupById(item.groupId);
    if (!group) continue;
    const risk = assessRisk(group, state.profile);
    const can投档 = passesGroupLine(group, state.profile);
    checked.push({ order: i + 1, group, risk, can投档 });
    if (can投档) {
      accepted = allocateMajor(group, item, state.profile, i + 1, risk);
      break;
    }
  }

  els.simulationResult.className = "simulation-result";
  if (!accepted) {
    els.simulationResult.innerHTML = `
      <h3>模拟未检索到可投档专业组</h3>
      <p class="muted">当前位次未达到草表中的预测专业组线。真实投档取决于当年招生计划、实际报考人数、调档比例和高校录取规则。</p>
      ${renderCheckedPath(checked)}
    `;
    renderValidation();
    return;
  }

  const adjustmentText = accepted.adjusted ? "服从调剂后模拟分配" : "专业志愿模拟命中";
  const退档 = accepted.major ? "风险较低" : "退档风险";
  els.simulationResult.innerHTML = `
    <h3>第 ${accepted.order} 志愿模拟投档：${escapeHtml(accepted.group.school)} ${escapeHtml(accepted.group.groupCode)}组</h3>
    <p class="muted">${escapeHtml(adjustmentText)}。该结果基于预测位次线，不代表官方录取结论。</p>
    <div class="result-grid">
      <div class="result-cell"><p>院校专业组</p><strong>${escapeHtml(accepted.group.school)} ${escapeHtml(accepted.group.groupCode)}组</strong></div>
      <div class="result-cell"><p>模拟专业</p><strong>${escapeHtml(accepted.major ? accepted.major.name : "未命中且未调剂")}</strong></div>
      <div class="result-cell"><p>提示</p><strong>${escapeHtml(退档)}</strong></div>
    </div>
    ${accepted.major ? "" : `<p class="source-note">已投档但所选专业均未达到预测专业线，且未服从专业调剂，存在被高校退档的模拟风险。</p>`}
    ${renderCheckedPath(checked)}
  `;
  renderValidation();
}

function renderCheckedPath(checked) {
  if (!checked.length) return "";
  const rows = checked
    .map(
      (item) => `
      <tr>
        <td>${item.order}</td>
        <td>${escapeHtml(item.group.school)} ${escapeHtml(item.group.groupCode)}组</td>
        <td>${escapeHtml(item.risk.label)}</td>
        <td>${item.can投档 ? "达到预测位次线" : "未达到预测位次线"}</td>
      </tr>
    `
    )
    .join("");
  return `
    <div class="table-wrap" style="max-height:none;margin-top:14px;">
      <table class="data-table" style="min-width:620px;">
        <thead><tr><th>顺序</th><th>检索志愿</th><th>风险</th><th>结果</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function allocateMajor(group, draftItem, profile, order, risk) {
  const selected = group.programs.filter((program) => draftItem.selectedPrograms.includes(program.code));
  const major = selected.find((program) => !program.rank || profile.rank <= program.rank);
  if (major) return { group, order, risk, major, adjusted: false };
  if (draftItem.adjustment) {
    const adjustedMajor = group.programs.find((program) => !program.rank || profile.rank <= program.rank) || group.programs[group.programs.length - 1];
    return { group, order, risk, major: adjustedMajor, adjusted: true };
  }
  return { group, order, risk, major: null, adjusted: false };
}

function passesGroupLine(group, profile) {
  if (profile.rank) {
    const ranks = getRankReference(group);
    return Boolean(ranks.rank2026 && profile.rank <= Math.round(ranks.rank2026 * 1.02));
  }
  const range = scoreRangeForGroup(group);
  if (profile.score && range) return profile.score >= range[0] - 3;
  return Boolean(profile.rank && group.lastRank && profile.rank <= group.lastRank);
}

function checkEligibility(group, profile) {
  if (!group) return { ok: false, reason: "专业组不存在" };
  if (group.isNationalOnly) return { ok: true, reason: "基础院校信息，选科需按当年招生计划核对" };
  const firstOk = group.firstChoice === "不限" || group.firstChoice === profile.firstChoice;
  if (!firstOk) return { ok: false, reason: `需首选${group.firstChoice}` };
  const missing = (group.subjects || []).filter((subject) => !profile.secondChoices.includes(subject));
  if (missing.length) return { ok: false, reason: `缺少${missing.join("、")}` };
  return { ok: true, reason: "符合选考科目要求" };
}

function assessRisk(group, profile) {
  if (group && profile.rank) {
    const ranks = getRankReference(group);
    if (ranks.rank2026) {
      const ratio = profile.rank / ranks.rank2026;
      if (ratio <= 0.82) return { key: "safe", label: "保", reason: `位次明显优于2026预测线 ${formatNumber(ranks.rank2026)}` };
      if (ratio <= 1.03) return { key: "steady", label: "稳", reason: `位次接近2026预测线 ${formatNumber(ranks.rank2026)}` };
      if (ratio <= 1.16) return { key: "sprint", label: "冲", reason: `位次略弱于2026预测线 ${formatNumber(ranks.rank2026)}` };
      return { key: "high", label: "高风险", reason: `位次低于2026预测线较多 ${formatNumber(ranks.rank2026)}` };
    }
  }
  const range = scoreRangeForGroup(group);
  if (group && profile.score && range) {
    const midpoint = Math.round((range[0] + range[1]) / 2);
    const diff = midpoint - profile.score;
    if (diff > 40) return { key: "high", label: "高风险", reason: `超出建议冲刺带，参考分数带 ${formatScoreRange(range)}` };
    if (diff > 20) return { key: "sprint", label: "冲", reason: `位于冲刺带，参考分数带 ${formatScoreRange(range)}` };
    if (diff >= -20) return { key: "steady", label: "稳", reason: `位于稳妥带，参考分数带 ${formatScoreRange(range)}` };
    if (diff >= -40) return { key: "safe", label: "保", reason: `位于保底带，参考分数带 ${formatScoreRange(range)}` };
    return { key: "safe", label: "保", reason: `低于保底带，可作为保底或调整顺序，参考分数带 ${formatScoreRange(range)}` };
  }
  if (!group || !profile.rank || !group.lastRank) {
    return { key: "unknown", label: "未知", reason: "缺少位次数据" };
  }
  const ratio = profile.rank / group.lastRank;
  if (ratio <= 0.82) return { key: "safe", label: "保", reason: "位次明显优于演示线" };
  if (ratio <= 1.03) return { key: "steady", label: "稳", reason: "位次接近演示线" };
  if (ratio <= 1.16) return { key: "sprint", label: "冲", reason: "位次略弱于演示线" };
  return { key: "high", label: "高风险", reason: "位次低于演示线较多" };
}

function scoreRangeForGroup(group) {
  if (!group) return null;
  if (Array.isArray(group.scoreRange) && group.scoreRange.length === 2) return group.scoreRange;
  if (!group.lastRank) return null;
  const approx = estimateScoreFromRank(group.lastRank);
  return [Math.max(0, approx - 8), Math.min(750, approx + 8)];
}

function estimateCollegeScoreRange(college) {
  const tags = inferCollegeTags(college);
  const name = college.name || "";
  const isPrivate = tags.includes("民办") || college.remark?.includes("民办");
  const isVocational本科 = name.includes("职业技术大学") || name.includes("职业大学");
  if (college.level === "专科") {
    if (name.includes("医学") || name.includes("电力") || name.includes("铁路") || name.includes("职业技术大学")) return [420, 560];
    if (isPrivate) return [220, 430];
    return [280, 500];
  }
  if (tags.includes("C9")) return [660, 730];
  if (tags.includes("985")) return [630, 710];
  if (tags.includes("211")) return [580, 690];
  if (tags.includes("双一流")) return [560, 680];
  if (tags.includes("教育部直属") || tags.includes("工信部直属") || tags.includes("中国科学院")) return [560, 680];
  if (isVocational本科) return [430, 560];
  if (isPrivate) return [380, 540];
  if (name.includes("医科") || name.includes("医学") || name.includes("财经") || name.includes("政法") || name.includes("师范")) return [500, 640];
  if (name.includes("大学")) return [490, 630];
  return [460, 600];
}

function estimateRankFromScore(score) {
  const value = Number(score) || 0;
  if (value >= 690) return 1200;
  if (value >= 670) return 5000;
  if (value >= 650) return 12000;
  if (value >= 620) return 26000;
  if (value >= 590) return 42000;
  if (value >= 560) return 65000;
  if (value >= 530) return 90000;
  if (value >= 500) return 125000;
  if (value >= 460) return 170000;
  if (value >= 420) return 220000;
  return 280000;
}

function renderRankReference(group) {
  const ranks = getRankReference(group);
  return `
    <strong>${formatNumber(ranks.rank2026)}</strong>
    <p class="school-sub">2026预测位次</p>
    <p class="school-sub">2025：${formatNumber(ranks.rank2025)}</p>
    <p class="school-sub">2024：${formatNumber(ranks.rank2024)}</p>
    <p class="school-sub">${escapeHtml(ranks.note)}</p>
  `;
}

function getRankReference(group) {
  const imported2025 = Number(group.rank2025 || group["2025位次"] || group.history2025 || 0);
  const imported2024 = Number(group.rank2024 || group["2024位次"] || group.history2024 || 0);
  const baseline = imported2025 || Number(group.lastRank || 0) || estimateRankFromScore(midpointScoreForGroup(group));
  const rank2025 = imported2025 || baseline;
  const rank2024 = imported2024 || adjustRankBySeed(baseline, group.id || group.school, 2024);
  const imported2026 = Number(group.rank2026 || group["2026位次"] || group.projectedRank || group.predictedRank || 0);
  const trend = rank2025 - rank2024;
  const projected = imported2026 || Math.max(1, Math.round(rank2025 + trend * 0.35 + seededOffset(group.id || group.school, 2026) * 0.018 * rank2025));
  const note = imported2026
    ? "2026为导入数据"
    : group.isNationalOnly
      ? "2026暂按院校参考分数带估算"
      : imported2025 || imported2024
        ? "2026暂按近两年位次趋势估算"
        : "2024/2025暂用演示位次估算";
  return {
    rank2026: projected,
    rank2025,
    rank2024,
    note
  };
}

function midpointScoreForGroup(group) {
  const range = scoreRangeForGroup(group);
  if (range) return Math.round((range[0] + range[1]) / 2);
  return state.profile?.score || 560;
}

function adjustRankBySeed(rank, seed, year) {
  const offset = seededOffset(seed, year);
  return Math.max(1, Math.round(Number(rank || 1) * (1 + offset * 0.055)));
}

function seededOffset(seed, salt = 0) {
  const text = `${seed || ""}-${salt}`;
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return (hash % 2001) / 1000 - 1;
}

function rangesOverlap(a, b) {
  return a[0] <= b[1] && b[0] <= a[1];
}

function inferProgramsForCollege(college, profile) {
  if (profile?.featuredMajors?.length) {
    return profile.featuredMajors.slice(0, 6).map((name, index) => ({ code: String(index + 1).padStart(2, "0"), name }));
  }
  const name = college.name || "";
  let names;
  if (name.includes("医")) names = ["临床医学", "口腔医学", "医学影像学", "药学", "预防医学", "护理学"];
  else if (name.includes("师范")) names = ["汉语言文学（师范）", "数学与应用数学（师范）", "英语（师范）", "思想政治教育", "小学教育", "历史学"];
  else if (name.includes("财经")) names = ["会计学", "金融学", "经济学", "财政学", "财务管理", "审计学"];
  else if (name.includes("政法")) names = ["法学", "知识产权", "行政管理", "社会学", "政治学与行政学", "侦查学"];
  else if (name.includes("农业") || name.includes("农林")) names = ["农学", "动物医学", "食品科学与工程", "园林", "生物技术", "智慧农业"];
  else if (name.includes("航空") || name.includes("航天")) names = ["航空航天类", "飞行器设计与工程", "自动化", "电子信息工程", "计算机科学与技术", "机械工程"];
  else if (name.includes("外国语") || name.includes("外语")) names = ["英语", "翻译", "商务英语", "日语", "国际经济与贸易", "汉语国际教育"];
  else if (name.includes("艺术")) names = ["视觉传达设计", "环境设计", "音乐学", "美术学", "动画", "数字媒体艺术"];
  else if (college.level === "专科") names = ["计算机应用技术", "大数据与会计", "机电一体化技术", "新能源汽车技术", "电子商务", "现代物流管理"];
  else names = ["计算机科学与技术", "电子信息工程", "软件工程", "自动化", "机械设计制造及其自动化", "数据科学与大数据技术"];
  return names.map((program, index) => ({ code: String(index + 1).padStart(2, "0"), name: program }));
}

function inferCollegeType(name, profile, programs) {
  if (name.includes("医")) return "医药";
  if (name.includes("师范")) return "师范";
  if (name.includes("财经")) return "财经";
  if (name.includes("政法")) return "政法";
  if (name.includes("农业") || name.includes("农林")) return "农林";
  if (name.includes("艺术")) return "艺术";
  if (name.includes("体育")) return "体育";
  if (name.includes("外国语") || name.includes("外语")) return "语言";
  if (profile?.strengths?.some((item) => /物理|计算机|材料|电子|工程/.test(item)) || programs.some((item) => /计算机|电子|机械|自动化|工程/.test(item.name))) return "理工";
  return "综合";
}

function estimateScoreFromRank(rank) {
  const value = Number(rank) || 0;
  if (value <= 1500) return 688;
  if (value <= 6000) return 665;
  if (value <= 15000) return 640;
  if (value <= 30000) return 610;
  if (value <= 60000) return 570;
  if (value <= 90000) return 535;
  if (value <= 140000) return 495;
  if (value <= 200000) return 440;
  return 390;
}

function formatScoreRange(range) {
  if (!range) return "分数带待导入";
  return `${range[0]} - ${range[1]} 分`;
}

function assessPreference(group, profile) {
  let score = 0;
  const hits = [];
  if (profile.cityPreference && profile.cityPreference !== "不限" && group.city === profile.cityPreference) {
    score += 1;
    hits.push("城市");
  }
  if (profile.majorKeyword) {
    const keyword = profile.majorKeyword.toLowerCase();
    const matched = group.programs.some((program) => program.name.toLowerCase().includes(keyword));
    if (matched) {
      score += 2;
      hits.push("专业");
    }
  }
  return { score, hits };
}

function riskWeight(key) {
  return { sprint: 1, steady: 2, safe: 3, high: 4, unknown: 5 }[key] || 9;
}

function inferCollegeTags(college) {
  const name = college.name || college.school;
  const tags = new Set(ELITE_TAGS[name] || []);
  const authority = college.authority || "";
  const remark = college.remark || "";
  const nature = college.nature || "";
  if (authority.includes("教育部")) tags.add("教育部直属");
  if (authority.includes("中国科学院")) tags.add("中国科学院");
  if (authority.includes("工业和信息化部")) tags.add("工信部直属");
  if (authority.includes("中央") || authority.includes("国务院") || authority.includes("交通运输部")) tags.add("中央部门");
  if (authority.endsWith("省") || authority.includes("自治区") || authority.includes("市")) tags.add("省属/市属");
  if (remark.includes("民办") || nature.includes("民办")) tags.add("民办");
  if (remark.includes("中外合作")) tags.add("中外合作");
  if (college.level === "本科" || college.level === "高职（专科）") tags.add(college.level);
  return Array.from(tags).slice(0, 8);
}

function formatRequirement(group) {
  const first = group.firstChoice || "不限";
  const seconds = group.subjects?.length ? group.subjects.join("+") : "再选不限";
  return `${first} · ${seconds}`;
}

function findDuplicates(values) {
  const seen = new Set();
  const dupes = new Set();
  values.forEach((value) => {
    if (seen.has(value)) dupes.add(value);
    seen.add(value);
  });
  return Array.from(dupes);
}

function saveDraft() {
  saveJson(STORAGE_KEYS.draft, state.draft);
}

function exportDraft() {
  const payload = state.draft.map((item, index) => {
    const group = getCatalogGroupById(item.groupId);
    return {
      order: index + 1,
      school: group?.school,
      groupCode: group?.groupCode,
      batch: group?.batch,
      selectedPrograms: group?.programs.filter((p) => item.selectedPrograms.includes(p.code)).map((p) => p.name) || [],
      adjustment: item.adjustment
    };
  });
  downloadJson("anhui-volunteer-draft.json", payload);
}

function exportData() {
  downloadJson("anhui-school-groups.json", state.groups);
}

function downloadJson(filename, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function loadSampleCsv() {
  els.importText.value = [
    "school,groupCode,batch,city,firstChoice,subjects,plan,lastRank,rank2026,rank2025,rank2024,scoreRange,programs",
    "示例大学,017,regular-bachelor,合肥,物理,化学,120,68000,,68000,70500,535-560,计算机科学与技术|电子信息工程|自动化|机械工程|材料科学与工程|环境工程",
    "示例师范大学,018,regular-bachelor,芜湖,历史,,80,13500,,13500,14200,610-630,汉语言文学（师范）|英语（师范）|历史学（师范）|小学教育|法学|社会工作"
  ].join("\n");
}

function importData() {
  const raw = els.importText.value.trim();
  if (!raw) return;
  try {
    const parsed = raw.startsWith("[") ? JSON.parse(raw) : parseCsv(raw);
    const normalized = parsed.map(normalizeImportedGroup).filter(Boolean);
    if (!normalized.length) throw new Error("没有有效数据");
    state.groups = dedupeGroups([...state.groups, ...normalized]);
    saveJson(STORAGE_KEYS.groups, state.groups);
    renderAll();
    showMessage(`已导入 ${normalized.length} 个院校专业组。`);
  } catch (error) {
    showMessage(`导入失败：${error.message}`);
  }
}

function parseCsv(raw) {
  const [headerLine, ...lines] = raw.split(/\r?\n/).filter(Boolean);
  const headers = headerLine.split(",").map((h) => h.trim());
  return lines.map((line) => {
    const cols = splitCsvLine(line);
    return headers.reduce((obj, key, index) => {
      obj[key] = cols[index] || "";
      return obj;
    }, {});
  });
}

function splitCsvLine(line) {
  const cols = [];
  let current = "";
  let inQuote = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      inQuote = !inQuote;
    } else if (char === "," && !inQuote) {
      cols.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  cols.push(current.trim());
  return cols;
}

function normalizeImportedGroup(input, index) {
  const school = input.school || input.院校 || input.院校名称;
  const groupCode = input.groupCode || input.专业组代码 || input.group || input.组代码;
  if (!school || !groupCode) return null;
  const rawPrograms = Array.isArray(input.programs)
    ? input.programs
    : String(input.programs || input.专业 || "")
        .split("|")
        .filter(Boolean);
  const programs = rawPrograms.map((program, i) => {
    if (typeof program === "object" && program !== null) {
      return {
        code: String(program.code || i + 1).padStart(2, "0"),
        name: String(program.name || program.专业名称 || "").trim(),
        rank: Number(program.rank || program.位次 || input.lastRank || 0)
      };
    }
    return {
      code: String(i + 1).padStart(2, "0"),
      name: String(program).trim(),
      rank: Number(input.lastRank) || 0
    };
  });
  return {
    id: input.id || `${slug(school)}-${slug(groupCode)}-${Date.now()}-${index}`,
    school,
    groupCode: String(groupCode),
    batch: input.batch || "regular-bachelor",
    province: input.province || input.省份 || "安徽",
    city: input.city || input.城市 || "",
    level: input.level || input.层次 || "本科",
    nature: input.nature || input.性质 || "",
    type: input.type || input.类型 || "",
    tags: Array.isArray(input.tags) ? input.tags : String(input.tags || "").split("|").filter(Boolean),
    firstChoice: input.firstChoice || input.首选科目 || "不限",
    subjects: Array.isArray(input.subjects) ? input.subjects : String(input.subjects || input.再选科目 || "").split("|").filter(Boolean),
    plan: Number(input.plan || input.计划 || 0),
    lastRank: Number(input.lastRank || input.模拟位次 || input.位次 || 0),
    rank2026: Number(input.rank2026 || input["2026位次"] || input.预测位次 || 0),
    rank2025: Number(input.rank2025 || input["2025位次"] || input.二零二五位次 || 0),
    rank2024: Number(input.rank2024 || input["2024位次"] || input.二零二四位次 || 0),
    scoreRange: parseScoreRange(input.scoreRange || input.分数带 || input.分数区间 || ""),
    tuition: input.tuition || "以章程为准",
    source: input.source || "导入数据",
    programs: programs.slice(0, 12),
    website: input.website || ""
  };
}

function parseScoreRange(value) {
  if (Array.isArray(value) && value.length === 2) return value.map(Number);
  const text = String(value || "");
  const nums = text.match(/\d+/g)?.map(Number) || [];
  return nums.length >= 2 ? [nums[0], nums[1]] : undefined;
}

function dedupeGroups(groups) {
  const map = new Map();
  groups.forEach((group) => map.set(group.id, group));
  return Array.from(map.values());
}

function resetData() {
  state.groups = structuredClone(DEFAULT_GROUPS);
  state.draft = [];
  saveJson(STORAGE_KEYS.groups, state.groups);
  saveDraft();
  renderAll();
}

function showMessage(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.right = "18px";
  toast.style.bottom = "18px";
  toast.style.zIndex = "50";
  toast.style.maxWidth = "320px";
  toast.style.padding = "12px 14px";
  toast.style.border = "1px solid var(--line)";
  toast.style.borderRadius = "8px";
  toast.style.background = "#fff";
  toast.style.boxShadow = "var(--shadow)";
  toast.style.fontWeight = "700";
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2600);
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

function formatBytes(value) {
  const size = Number(value) || 0;
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function renderTag(value) {
  return `<span class="tag">${escapeHtml(value || "-")}</span>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");
}
