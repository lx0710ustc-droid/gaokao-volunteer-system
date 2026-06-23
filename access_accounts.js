window.ACCESS_ACCOUNTS = {
  loginRequired: true,
  sessionDays: 7,
  siteTitle: "安徽高考志愿填报系统",
  inviteCodes: ["AH2026", "USTC2026"],
  users: [
    {
      phone: "18855100000",
      name: "管理员",
      role: "admin",
      enabled: true,
      passwordHash: "1543deb3ed66cdfb359817aaa9f8be1dfd1145eedc89e52431b8a28c5d8a14bb",
      note: "默认管理员样例，密码为 Ah@2026-Admin，上线前建议改成你自己的手机号和密码哈希。"
    },
    {
      phone: "18855100001",
      name: "演示用户",
      role: "student",
      enabled: true,
      passwordHash: "744bebfaea04997c27811f8939ede01aa9bfade1447ed2058f651c1bed72623e",
      note: "默认演示账号，密码为 Ah@2026-USTC。"
    }
  ]
};
