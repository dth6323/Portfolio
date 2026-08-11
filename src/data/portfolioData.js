export const DEVELOPER_PROFILE = {
  name: "Đặng Thái Hà",
  title: "Backend Developer (NodeJS & Java)",
  handle: "dth6323",
  location: "Bát Tràng, Gia Lâm, Hà Nội",
  phone: "0976919625",
  email: "dth6323@gmail.com",
  facebook: "https://www.facebook.com/ha.hightlight/",
  education: "Đại học Giao Thông Vận Tải (Khoa CNTT - GPA 3.0)",
  availability: "Sẵn sàng nhận vị trí Backend Developer",
  resumePdfUrl: "/Dang-Thai-Ha-JavaDeveloper.pdf",
  bio: "Backend Developer chuyên sâu phát triển ứng dụng NestJS (TS) & Java Spring Boot. Kinh nghiệm thực chiến tại Cadpro thiết kế nền tảng IoT quan trắc môi trường (không khí, tiếng ồn, ngập lụt), phân quyền RBAC đa đơn vị, tối ưu CSDL lớn PostgreSQL (Partitioning), tích hợp MQTT/Redis realtime, hệ thống xe bus Đà Nẵng và các dự án Thương mại điện tử & Kiosk phần cứng được Vibe Code 100%.",
  metrics: [
    { label: "Công Ty Hiện Tại", value: "Cadpro VN" },
    { label: "CSDL & Tối Ưu", value: "PostgreSQL" },
    { label: "Giao Thức Realtime", value: "MQTT & Redis" },
    { label: "Framework Cốt Lõi", value: "NestJS & Spring Boot" }
  ],
  socials: {
    github: "https://github.com/dth6323",
    linkedin: "https://linkedin.com",
    email: "mailto:dth6323@gmail.com",
    phone: "tel:0976919625",
    facebook: "https://www.facebook.com/ha.hightlight/"
  }
};

export const WORK_EXPERIENCE = [
  {
    id: "cadpro",
    company: "Cadpro VN",
    role: "Backend Developer",
    period: "08/2025 – Hiện tại",
    location: "Hà Nội",
    department: "Bộ Phận Phát Triển Phần Mềm & IoT",
    description: "Thiết kế & phát triển hệ thống quan trắc môi trường (không khí, tiếng ồn, ngập lụt), phân quyền RBAC đa đơn vị và hệ thống quản lý xe bus Đà Nẵng.",
    highlights: [
      "Thiết kế và phát triển nền tảng quản lý thiết bị IoT, hỗ trợ kết nối, cấu hình và giám sát trạng thái thiết bị theo thời gian thực.",
      "Phát triển các chức năng báo cáo, thống kê và phân tích dữ liệu phục vụ công tác quản lý.",
      "Thiết kế và phát triển API, microservice phục vụ trao đổi dữ liệu giữa các hệ thống.",
      "Tối ưu hiệu năng truy vấn và lưu trữ dữ liệu lớn trên PostgreSQL (Index, Partitioning, Query Optimization).",
      "Tích hợp MQTT, Redis để xử lý luồng dữ liệu thiết bị cảm biến theo thời gian thực.",
      "Thiết kế và phát triển hệ thống phân quyền RBAC đa đơn vị đáp ứng nhu cầu của các cơ quan nhà nước và doanh nghiệp."
    ],
    skills: ["NestJS", "TS", "PostgreSQL", "MQTT", "Redis", "RBAC", "Docker"]
  },
  {
    id: "vinare",
    company: "Tổng Công Ty Tái Bảo Hiểm Quốc Gia (VINARE)",
    role: "Intent Fullstack Developer",
    period: "11/2024 – 05/2025",
    location: "Hà Nội",
    department: "Phòng Phần Mềm",
    description: "Phát triển hệ thống quản lý nhân sự HRM, điểm danh chấm công tự động, Elasticsearch search engine và MinIO file storage.",
    highlights: [
      "Phát triển chức năng tính lương, hỗ trợ tính toán tự động theo nhiều quy tắc và chính sách phức tạp của doanh nghiệp.",
      "Phát triển hệ thống quản lý điểm danh, xử lý dữ liệu chấm công và tổng hợp phục vụ tính lương.",
      "Xây dựng chức năng quản lý tài liệu tập trung, tích hợp MinIO để lưu trữ và quản lý tệp tin an toàn.",
      "Tích hợp Elasticsearch để tìm kiếm nhanh tài liệu toàn văn và dữ liệu nghiệp vụ.",
      "Thiết kế và phát triển API phục vụ quản lý nhân sự, chấm công và tính lương."
    ],
    skills: ["Java", "Spring Boot", "Elasticsearch", "MinIO", "Oracle", "Angular"]
  },
  {
    id: "education",
    company: "Đại học Giao Thông Vận Tải",
    role: "Sinh Viên Khoa Công Nghệ Thông Tin",
    period: "2021 – 2025",
    location: "Hà Nội",
    department: "Khoa CNTT (GPA 3.0)",
    description: "Tốt nghiệp Kỹ sư CNTT (GPA 3.0). Nền tảng Toán tốt (9.2 thi THPT), chuyên sâu Cấu trúc dữ liệu, CSDL quan hệ và Lập trình Backend.",
    highlights: [
      "Tốt nghiệp Khoa Công Nghệ Thông Tin với GPA 3.0 / 4.0.",
      "Nền tảng Toán học tốt: Đạt 9.2 điểm Toán trong kỳ thi Tốt nghiệp THPT Quốc Gia (THPT Nguyễn Văn Cừ)."
    ],
    skills: ["Java", "C/C++", "Cấu trúc dữ liệu", "CSDL Quan hệ", "Kỹ thuật phần mềm"]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "vibecode-photobooth",
    category: "Vibe Code 100% & Phần Cứng",
    company: "Dự Án Vibe Code 100%",
    period: "06/2025 – Hiện tại",
    title: "Hệ Thống Quầy Chụp Ảnh Tự Động PhotoBooth Kiosk",
    tagline: "Ứng dụng Kiosk chụp ảnh tự động điều khiển phần cứng camera & máy in nhiệt Linux.",
    description: "DỰ ÁN VIBE CODE 100%: Ứng dụng quầy chụp ảnh tự động Photobooth Kiosk điều khiển phần cứng thực tế được phát triển 100% bằng Vibe Coding. Backend Node.js/Express + MySQL, tích hợp thanh toán VietQR Sandbox tự động, chụp ảnh camera DSLR qua gphoto2, dựng video hậu trường BTS realtime và in nhiệt CUPS silent print trên Linux.",
    metrics: [
      { label: "VAI TRÒ", value: "Lập Trình Fullstack" },
      { label: "FRAMEWORK", value: "Node.js & Express" }
    ],
    techStack: ["Vibe Code 100%", "Node.js", "MySQL", "VietQR", "gphoto2", "CUPS Linux", "WebSockets"],
    architectureDetails: {
      problem: "Thiết lập quầy chụp ảnh Kiosk tự động hoàn toàn: từ nhận thanh toán QR, điều khiển máy ảnh DSLR/Webcam, dựng video BTS đến tự động in nhiệt silent print.",
      solution: "Xây dựng ứng dụng Client-Server Node.js kết nối thư viện gphoto2 Linux chụp ảnh DSLR, ghép khung video BTS đa luồng và lệnh in CUPS background qua MySQL.",
      keyDecisions: [
        "Dự án được phát triển 100% bằng phương pháp Vibe Coding kết hợp AI chỉ dẫn tích hợp phần cứng Linux.",
        "Tích hợp cổng thanh toán VietQR tự động xác nhận giao dịch ngân hàng thời gian thực.",
        "Giao tiếp phần cứng trực tiếp qua gphoto2 điều khiển ống kính máy ảnh DSLR/Mirrorless và dịch vụ in silent CUPS.",
        "Tự động dựng video BTS hậu trường ghép khung phát đồng thời cả 4/8 ô ảnh trong lúc đếm ngược."
      ],
      architectureDiagram: "Màn hình Kiosk Touch → Node.js Backend Server → VietQR API / gphoto2 DSLR / CUPS Printer → MySQL DB"
    }
  },
  {
    id: "vibecode-ceramic-garden",
    category: "Vibe Code 100% & E-Commerce",
    company: "Dự Án Vibe Code 100%",
    period: "06/2025 – Hiện tại",
    title: "Ceramic Garden — Sàn Thương Mại Điện Tử Gốm Sứ",
    tagline: "Hệ thống bán hàng gốm Bát Tràng kiến trúc Microservices & API Gateway.",
    description: "DỰ ÁN VIBE CODE 100%: Nền tảng thương mại điện tử gốm sứ Bát Tràng kiến trúc Microservices được phát triển 100% bằng Vibe Coding. Frontend Next.js App Router (TS), Backend 3 Microservices độc lập (User RBAC, Order/Product, Blog) kết nối qua API Gateway, tích hợp Swagger OpenAPI và đóng gói Docker Compose.",
    metrics: [
      { label: "VAI TRÒ", value: "Lập Trình Fullstack" },
      { label: "FRAMEWORK", value: "Next.js & Node.js" }
    ],
    techStack: ["Vibe Code 100%", "Next.js", "TS", "Node.js", "MongoDB", "Docker", "Swagger"],
    architectureDetails: {
      problem: "Xây dựng nhanh một hệ thống thương mại điện tử gốm sứ chuẩn kiến trúc Microservices đa dịch vụ với thời gian phát triển tối ưu bằng công nghệ AI Vibe Coding.",
      solution: "Ứng dụng phương pháp Vibe Coding 100% kết hợp AI kiến trúc Microservices độc lập (User RBAC, Order/Product, Blog), tập trung qua API Gateway và frontend Next.js App Router.",
      keyDecisions: [
        "Dự án được xây dựng 100% bằng phương pháp Vibe Coding kết hợp AI chỉ dẫn kiến trúc chuẩn hóa.",
        "Tách biệt 3 Microservices chạy độc lập với cơ sở dữ liệu MongoDB riêng biệt và tài liệu Swagger OpenAPI tự động.",
        "Xây dựng API Gateway đóng vai trò làm proxy tập trung route API và trang tài liệu Swagger cho toàn bộ hệ thống.",
        "Frontend Next.js App Router (TypeScript) hỗ trợ quản lý giỏ hàng client, thanh toán và Dashboard Admin phân quyền RBAC."
      ],
      architectureDiagram: "Next.js Web Client (App Router) → API Gateway (Port 4000) → [User Service | Blog Service | Order Service] → MongoDB"
    }
  },
  {
    id: "moi-truong-iot",
    category: "Hệ thống IoT & Quan trắc",
    company: "Cadpro VN",
    period: "01/2026 – Hiện tại",
    title: "Hệ Thống Quan Trắc Môi Trường & Traffic Camera AI",
    tagline: "Phát triển hệ thống đo không khí, tiếng ồn, ngập lụt & Phân quyền RBAC.",
    description: "Vị trí: Backend Developer (NestJS) tại Cadpro. Thiết kế và phát triển nền tảng IoT quản lý thiết bị quan trắc môi trường (không khí, tiếng ồn, ngập lụt), hệ thống phân quyền RBAC đa đơn vị cho sở Đà Nẵng & công ty phụ thuộc, tích hợp quản lý danh sách đen/trắng camera giao thông.",
    metrics: [
      { label: "VAI TRÒ", value: "Backend Developer" },
      { label: "FRAMEWORK", value: "NestJS (TS)" }
    ],
    techStack: ["NestJS", "TS", "PostgreSQL", "MQTT", "Redis", "RBAC", "Docker"],
    architectureDetails: {
      problem: "Nhu cầu quản lý kết nối, cấu hình thiết bị quan trắc thời gian thực và yêu cầu phân quyền RBAC phức tạp giữa nhiều cấp sở ban ngành Đà Nẵng.",
      solution: "Xây dựng Backend NestJS kết nối MQTT Broker nhận dữ liệu cảm biến ngập/không khí/tiếng ồn, tối ưu dữ liệu PostgreSQL bằng Partitioning và thiết kế RBAC Guards đa đơn vị.",
      keyDecisions: [
        "Phát triển các mô-đun NestJS kết nối MQTT và Redis giám sát trạng thái thiết bị IoT theo thời gian thực.",
        "Thiết kế kiến trúc phân quyền RBAC Custom Guards đa đơn vị đáp ứng mô hình quản lý của sở Đà Nẵng và các công ty trực thuộc.",
        "Tối ưu hiệu năng truy vấn và lưu trữ dữ liệu lớn trên CSDL PostgreSQL (Index, Partitioning, Query Optimization).",
        "Tích hợp chức năng quản lý danh sách đen, danh sách trắng vào hệ thống camera giao thông."
      ],
      architectureDiagram: "Cảm biến IoT / Camera AI → MQTT Broker → NestJS Backend Service → PostgreSQL (Partitioned) → Admin Web"
    }
  },
  {
    id: "quan-ly-xe-bus",
    category: "Quản lý Giao thông & Bus",
    company: "Cadpro VN",
    period: "08/2025 – 01/2026",
    title: "Hệ Thống Quản Lý Xe Bus Đà Nẵng",
    tagline: "Phát triển trang admin quản trị xe bus & Tích hợp thanh toán online.",
    description: "Vị trí: Backend Developer (NestJS) tại Cadpro. Phát triển trang admin quản trị hệ thống xe bus, thiết kế RESTful API microservices trao đổi dữ liệu và tích hợp cổng thanh toán online cho hệ thống xe bus Đà Nẵng.",
    metrics: [
      { label: "VAI TRÒ", value: "Backend Developer" },
      { label: "FRAMEWORK", value: "NestJS (TS)" }
    ],
    techStack: ["NestJS", "TS", "PostgreSQL", "Payment Integration", "REST API", "Redis"],
    architectureDetails: {
      problem: "Cần xây dựng hệ thống backend quản trị dữ liệu xe bus tập trung và tích hợp cổng thanh toán trực tuyến an toàn.",
      solution: "Phát triển các REST API NestJS xử lý nghiệp vụ quản trị xe bus, kết nối bảo mật với cổng thanh toán online.",
      keyDecisions: [
        "Thiết kế và phát triển RESTful API NestJS phục vụ quản trị thông tin tuyến bus, lịch trình và danh sách phương tiện.",
        "Tích hợp module thanh toán online cho hệ thống xe bus Đà Nẵng.",
        "Xây dựng chức năng báo cáo, thống kê dữ liệu phục vụ công tác quản lý vận hành."
      ],
      architectureDiagram: "Hành Khách / Admin → Cổng Thanh Toán Online → NestJS API Service → PostgreSQL Database"
    }
  },
  {
    id: "hrm-enterprise",
    category: "Hệ thống HRM Enterprise",
    company: "VINARE",
    period: "11/2024 – 05/2025",
    title: "Hệ Thống Quản Lý Nhân Sự & Tính Lương (VINARE)",
    tagline: "Hệ thống HRM tích hợp tính lương đa quy tắc, Elasticsearch & MinIO.",
    description: "Vị trí: Fullstack Developer (Intent) tại Phòng Phần mềm VINARE. Phát triển chức năng tính lương đa quy tắc, xử lý dữ liệu chấm công điểm danh, tích hợp Elasticsearch tìm kiếm tài liệu và MinIO quản lý file.",
    metrics: [
      { label: "VAI TRÒ", value: "Intent Fullstack" },
      { label: "FRAMEWORK", value: "Java Spring Boot" }
    ],
    techStack: ["Java", "Spring Boot", "Elasticsearch", "MinIO", "Oracle", "Angular"],
    architectureDetails: {
      problem: "Nghiệp vụ tính lương theo nhiều quy tắc chính sách doanh nghiệp và yêu cầu tìm kiếm nhanh tài liệu nhân sự.",
      solution: "Phát triển module tính lương tự động, tích hợp Elasticsearch làm engine tìm kiếm tài liệu toàn văn và MinIO lưu trữ file.",
      keyDecisions: [
        "Phát triển chức năng tính lương hỗ trợ tính toán theo nhiều quy tắc và chính sách của doanh nghiệp.",
        "Xây dựng hệ thống quản lý điểm danh, xử lý dữ liệu chấm công và tổng hợp phục vụ tính lương.",
        "Tích hợp MinIO để lưu trữ tệp tin và Elasticsearch để tìm kiếm nhanh tài liệu và dữ liệu nghiệp vụ."
      ],
      architectureDiagram: "Nhân Viên Portal → REST API → Java Backend Service → Elasticsearch / MinIO → Oracle DB"
    }
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "backend",
    title: "Backend Core (NestJS & Java)",
    skills: [
      { name: "NestJS Framework (TS)", level: 95, exp: "Thành thạo", note: "Controllers, Providers, Modules, Custom Guards, Microservices, Interceptors" },
      { name: "Java & Spring Boot", level: 90, exp: "Tốt", note: "Spring Core, RESTful API, Microservices, Enterprise Applications" },
      { name: "Thiết Kế Phân Quyền RBAC", level: 94, exp: "Thành thạo", note: "Hệ thống RBAC đa đơn vị bằng NestJS Guards cho cơ quan nhà nước & doanh nghiệp" },
      { name: "MQTT Protocol & Realtime Data", level: 92, exp: "Thành thạo", note: "Tích hợp MQTT & Redis xử lý luồng dữ liệu cảm biến thời gian thực" }
    ]
  },
  {
    id: "database",
    title: "Cơ Sở Dữ Liệu & Tối Ưu CSDL",
    skills: [
      { name: "PostgreSQL (Index & Partitioning)", level: 95, exp: "Thành thạo", note: "Tối ưu truy vấn dữ liệu lớn, Partitioning theo thời gian, Indexing" },
      { name: "Redis Caching & Realtime Store", level: 92, exp: "Thành thạo", note: "L2 Caching, Pub/Sub, Lưu trữ dữ liệu thời gian thực" },
      { name: "MySQL & Oracle Database", level: 88, exp: "Tốt", note: "Truy vấn CSDL, Stored Procedures, Quản trị dữ liệu" },
      { name: "Elasticsearch Engine", level: 85, exp: "Khá", note: "Tìm kiếm toàn văn (Full-text search) tài liệu & dữ liệu nghiệp vụ" }
    ]
  },
  {
    id: "storage",
    title: "Lưu Trữ & Hạ Tầng Triển Khai",
    skills: [
      { name: "MinIO Object Storage", level: 90, exp: "Tốt", note: "Tích hợp MinIO lưu trữ và quản lý tệp tin tài liệu" },
      { name: "Git & Linux Command", level: 90, exp: "Tốt", note: "GitFlow, Quản trị server Linux, Deployment" },
      { name: "Docker & Containerization", level: 85, exp: "Khá", note: "Đóng gói ứng dụng NestJS / Java, Docker Compose" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "Angular Framework", level: 85, exp: "Khá", note: "Xây dựng trang Web Admin, quản trị hệ thống" },
      { name: "React & Vite", level: 88, exp: "Tốt", note: "Giao diện React hiện đại, Vanilla CSS Design System" },
      { name: "TS / JavaScript", level: 92, exp: "Thành thạo", note: "ES6+, Async/Await, Strict Typing" }
    ]
  }
];
