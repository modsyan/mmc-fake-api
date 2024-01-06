const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001; // You can change the port as needed

app.use(bodyParser.json());
// allow cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const db = {
  users: [
    { id: 0, name: "muhammad hamdy ", isAdmin: true },
    { id: 1, name: "abdulrahman", isAdmin: true },
  ],
  repairRequests: [
    {
      id: 1,
      reportNumber: "1",
      reportingDate: "2023-01-15",
      location: "Building A",
      office: "Main Office",
      officeNumber: 1,
      floorNumber: 3,
      flatNumber: 301,
      faultType: "Electrical",
      faultLocation: "Meeting Room 1",
      description: "Power outage",
      attendsAt: "16-1-2023",
      attendsOn: "09:30 AM",
      technicianName: "John Doe",
      supervisorName: "Jane Smith",
      assetName: "Generator XYZ",
      contractorReportingDate: "2023-01-15",
      fixed: false,
      cause: "Faulty wiring",
      employeeName: "Alice Johnson",
      employeeDate: "2023-01-15",
      employeeNotes: "Replaced damaged cables.",
      employeeSatisfiedFixing: true,
      adminName: "Admin User",
      adminDate: "2023-01-15",
      adminNotes: "Reviewed and closed the report.",
      contractorNotes: "Replaced damaged cables.",
    },
    {
      id: 2,
      reportNumber: "1",
      reportingDate: "2023-01-15",
      location: "Building A",
      office: "Main Office",
      officeNumber: 1,
      floorNumber: 3,
      flatNumber: 301,
      faultType: "Electrical",
      faultLocation: "Meeting Room 1",
      description: "Power outage",
      attendsAt: "16-1-2023",
      attendsOn: "09:30 AM",
      technicianName: "John Doe",
      supervisorName: "Jane Smith",
      assetName: "Generator XYZ",
      contractorReportingDate: "2023-01-15",
      fixed: false,
      cause: "Faulty wiring",
      employeeName: "Alice Johnson",
      employeeDate: "2023-01-15",
      employeeNotes: "Replaced damaged cables.",
      employeeSatisfiedFixing: true,
      adminName: "Admin User",
      adminDate: "2023-01-15",
      adminNotes: "Reviewed and closed the report.",
      contractorNotes: "Replaced damaged cables.",
    },
  ],
  technicalReports: [
    {
      id: 1,
      title: "إصلاح أعطال الشبكة الكهربائية",
      technicianName: "عبدالله الفقير",
      date: "2023-01-15",
      content:
        "السلام عليكم ورحمة الله وبركاته هنا سيتم كتابة تقرير فني بواسطة المهندس عبدالله الفقير حول إصلاح أعطال الشبكة الكهربائية. تم استبدال الأسلاك التالفة وإجراء الصيانة اللازمة لضمان الأمان والاستقرار في التيار الكهربائي.",
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      title: "تركيب أجهزة الإنارة الحديثة",
      technicianName: "محمد حسن",
      date: "2023-02-01",
      content:
        "السلام عليكم ورحمة الله وبركاته تم تنفيذ مهمة تركيب أجهزة الإنارة الحديثة بواسطة المهندس محمد حسن. تم تحديد الأماكن المناسبة لتركيب الأجهزة وضبط الإعدادات لتحقيق أفضل أداء في إنارة المنطقة.",
      createdAt: "2023-02-01",
    },
    {
      id: 3,
      title: "تصليح أعطال المصعد",
      technicianName: "فاطمة علي",
      date: "2023-03-10",
      content:
        "السلام عليكم ورحمة الله وبركاته تمت عملية تصليح أعطال المصعد بنجاح من قبل فنيي الصيانة، وقامت المهندسة فاطمة علي بفحص وإصلاح الأعطال الطارئة وضبط الآليات لضمان سلامة استخدام المصعد.",
      createdAt: "2023-03-10",
    },
    {
      id: 4,
      title: "صيانة أنظمة التكييف",
      technicianName: "يوسف أحمد",
      date: "2023-04-22",
      content:
        "السلام عليكم ورحمة الله وبركاته تمت صيانة شاملة لأنظمة التكييف بواسطة المهندس يوسف أحمد. تم تنظيف المراوح، وإزالة الغبار والرواسب، وشحم الأجزاء المتحركة لتحسين أداء وكفاءة أجهزة التكييف.",
      createdAt: "2023-04-22",
    },
    {
      id: 5,
      title: "إصلاح التسريبات في أنابيب المياه",
      technicianName: "سارة عبدالرحمن",
      date: "2023-05-07",
      content:
        "السلام عليكم ورحمة الله وبركاته تمت عملية إصلاح فوري لتسريبات في أنابيب المياه. قامت المهندسة سارة عبدالرحمن بتحديد مواقع التسريب وإجراء الإصلاحات اللازمة لضمان تدفق المياه بشكل آمن وفعال.",
      createdAt: "2023-05-07",
    },
  ],
  maintenance: [
    {
      id: 0,
      tabName: "صيانة الدور الأرضي",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "daily",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "daily",
    },
    {
      id: 0,
      tabName: "صيانة الدور الأرضي",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "monthly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "monthly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "quarterly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "quarterly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "yearly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "yearly",
    },
  ],
  cleaning: [
    {
      id: 0,
      tabName: "صيانة الدور الأرضي",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "daily",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "daily",
    },
    {
      id: 0,
      tabName: "صيانة الدور الأرضي",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "monthly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "monthly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "quarterly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "quarterly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "yearly",
    },
    {
      id: 0,
      tabName: "صيانة دورات المياة",
      options: [
        { name: "option One", check: false },
        { name: "option Two", check: false },
      ],
      type: "yearly",
    },
  ],

  qrCodes: [
    {
      id: 2,
      level: "eldoor al2wl",
      levelId: 0,
      area: "engineering room",
      date: "2023-01-15",
    },
  ],

  facilities: [
    {
      id: 1,
      uuid: "1234-5678-91011",
      name: "مبنى السفارة السعودية في القاهرة",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: 2,
      uuid: "1234-5678-91011",
      name: "مبنى ال cic",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: 3,
      uuid: "1234-5678-91011",
      name: "مبنى شركة عبود ع الحدود",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: 4,
      uuid: "1234-5678-91011",
      name: "شركة السلام للتأمين",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: 5,
      uuid: "1234-5678-91011",
      name: "شركة احنا ع الله إن شاء الله",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: 6,
      uuid: "1234-5678-91011",
      name: "الشاذلي للملابس",
      levels: [
        {
          id: 1,
          uuid: "1111-2222-3333",
          name: "الطابق الأرضي",
        },
        {
          id: 2,
          uuid: "2929-3030-3131",
          name: "الطابق الأول",
        },
        {
          id: 3,
          uuid: "4444-4545-4646",
          name: "الطابق الثاني",
        },
      ],
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
  ],
  dashboard: {
    totalTechnicalReports: 20,
    totalRepairRequests: 10,
    totalFixed: 5,
    totalUnfixed: 5,
    totalAssets: 10,
    totalFacilities: 3,
    totalUsers: 10,
  },
  areas: [
    {
      id: 1,
      uuid: "1",
      name: "الاستقبال",
      level: { id: 1, name: "الدور الأرضي", uuid: "1" },
      resourceAssetTypes: [
        {
          id: 1,
          uuid: "1",
          name: "كهرباء",
        },
        {
          id: 2,
          uuid: "2",
          name: "ماء",
        },
      ],
    },
  ],
  resouceAssetTypes: [
    {
      id: 1,
      uuid: "1",
      name: "كهرباء",
      area: {
        id: 1,
        uuid: "1",
        name: "الاستقبال",
      },

      resourceAssets: [
        {
          id: 1,
          uuid: "1",
          name: "مكيف 1",
        },
        {
          id: 2,
          uuid: "2",
          name: "مكيف 2",
        },
      ],
    },
    {
      id: 2,
      uuid: "2",
      name: "ماء",
      area: {
        id: 1,
        uuid: "1",
        name: "الاستقبال",
      },
      resourceAssets: [
        {
          id: 1,
          uuid: "1",
          name: "مكيف 3",
        },
        {
          id: 2,
          uuid: "2",
          name: "مكيف 4",
        },
      ],
    },
  ],
  levels: [
    {
      id: 1,
      uuid: "a",
      name: "الطابق الأرضي",
      facility: {
        id: 101,
        uuid: "منشأة-1-معرف",
        name: "منشأة 1 - المستوى 1",
      },
      areas: [
        {
          id: 1,
          uuid: "المنطقة-1-1-معرف",
          name: "المنطقة 1 - المستوى 1",
        },
        {
          id: 2,
          uuid: "المنطقة-1-2-معرف",
          name: "المنطقة 2 - المستوى 1",
        },
        {
          id: 3,
          uuid: "المنطقة-1-3-معرف",
          name: "المنطقة 3 - المستوى 1",
        },
        {
          id: 4,
          uuid: "المنطقة-1-4-معرف",
          name: "المنطقة 4 - المستوى 1",
        },
      ],
    },
    {
      id: 2,
      uuid: "مستوى-2-معرف",
      name: "المستوى 2",
      facility: {
        id: 102,
        uuid: "منشأة-2-معرف",
        name: "منشأة 2 - المستوى 2",
      },
      areas: [
        {
          id: 1,
          uuid: "المنطقة-2-1-معرف",
          name: "المنطقة 1 - المستوى 2",
        },
        {
          id: 2,
          uuid: "المنطقة-2-2-معرف",
          name: "المنطقة 2 - المستوى 2",
        },
        {
          id: 3,
          uuid: "المنطقة-2-3-معرف",
          name: "المنطقة 3 - المستوى 2",
        },
        {
          id: 4,
          uuid: "المنطقة-2-4-معرف",
          name: "المنطقة 4 - المستوى 2",
        },
      ],
    },
    {
      id: 3,
      uuid: "مستوى-3-معرف",
      name: "المستوى 3",
      facility: {
        id: 103,
        uuid: "منشأة-3-معرف",
        name: "منشأة 3 - المستوى 3",
      },
      areas: [
        {
          id: 1,
          uuid: "المنطقة-3-1-معرف",
          name: "المنطقة 1 - المستوى 3",
        },
        {
          id: 2,
          uuid: "المنطقة-3-2-معرف",
          name: "المنطقة 2 - المستوى 3",
        },
        {
          id: 3,
          uuid: "المنطقة-3-3-معرف",
          name: "المنطقة 3 - المستوى 3",
        },
        {
          id: 4,
          uuid: "المنطقة-3-4-معرف",
          name: "المنطقة 4 - المستوى 3",
        },
      ],
    },
  ],
};

// Sample endpoint to get all repair requests
app.get("/repairRequests", (req, res) => {
  res.json(db.repairRequests);
});

// Sample endpoint to get total repair requests
app.get("/levels", (req, res) => {
  res.json(db.levels);
});
app.get("/areas", (req, res) => {
  res.json(db.areas);
});
app.get("/resourceAssetTypes", (req, res) => {
  res.json(db.resouceAssetTypes);
});
app.get("/facilities", (req, res) => {
  res.json(db.facilities);
});
app.get("/repair-requests", (req, res) => {
  res.json(db.repairRequests);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
