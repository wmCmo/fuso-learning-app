const courses = [
    {
        name: "♟️Business Strategy Fundamentals",
        source: "Noah Sterling",
        target: "beginner",
        tag: "♟️Business Strategy",
        duration: "01:25:12",
        desc: "Learn the core principles of strategic business planning."
    },
    {
        name: "♟️Strategic Thinking for Managers",
        source: "Sofia Martinez",
        target: "intermediate",
        tag: "♟️Business Strategy",
        duration: "02:10:05",
        desc: "Sharpen decision-making with advanced strategic framworks."
    },
    {
        name: "📘TypeScript for Professionals",
        source: "Liam Chen",
        target: "intermediate",
        tag: "🌐WEB Development",
        duration: "02:20:10",
        desc: "Master TypeScript to build scalable, maintainable apps."
    },
    {
        name: "🟨JavaScript Fundamentals",
        source: "Liam Chen",
        target: "beginner",
        tag: "🌐WEB Development",
        duration: "02:40:12",
        desc: "Build a solid foundation in modern JavaScript."
    },
    {
        name: "❤️‍🩹Emotional Intelligence at Work",
        source: "Sofia Martinez",
        target: "general",
        tag: "🌱Personal Development",
        duration: "01:12:18",
        desc: "Boost workplace relationships with emotional awareness."
    },
    {
        name: "🌱Personal Development Roadmap",
        source: "Noah Sterling",
        target: "general",
        tag: "🌱Personal Development",
        duration: "00:52:40",
        desc: "Design a clear path for personal growth and success."
    },
    {
        name: "⚛️Modern React Development",
        source: "Liam Chen",
        target: "intermediate",
        tag: "🎨Frontend Development",
        duration: "03:12:48",
        desc: "Build dynamic UIs with modern React practices."
    },
    {
        name: "🌐Web Development Fundamentals",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🎨Frontend Development",
        duration: "01:48:55",
        desc: "Understand the basics of web design and coding."
    },
    {
        name: "🎨Frontend UI Essentials",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🎨Frontend Development",
        duration: "01:48:55",
        desc: "Learn to craft clean, user-friendly interfaces."
    },
    {
        name: "🏗️Software Architecture Principles",
        source: "Noah Sterling",
        target: "intermediate",
        tag: "🏗️Software Architecture",
        duration: "02:00:40",
        desc: "Explore the foundations of scalable software design."
    },
    {
        name: "🕸️Microservices Architecture",
        source: "Liam Chen",
        target: "advanced",
        tag: "🏗️Software Architecture",
        duration: "02:58:41",
        desc: "Design distributed systems with microservices patterns."
    },
    {
        name: "🔍Debugging & Code Quality Best Practices",
        source: "Liam Chen",
        target: "general",
        tag: "🏗️Software Engineering",
        duration: "01:10:30",
        desc: "Write cleaner code and debug effectively."
    },
    {
        name: "🧠Software Engineering Essentials",
        source: "Noah Sterling",
        target: "general",
        tag: "🏗️Software Engineering",
        duration: "01:22:19",
        desc: "Grasp the key principles of software engineering."
    },
    {
        name: "✉️Writing Professional Emails",
        source: "Sofia Martinez",
        target: "beginner",
        tag: "💬Communication",
        duration: "00:55:12",
        desc: "Communicate clearly with polished email writing."
    },
    {
        name: "🌏Cross-Cultural Communication Skills",
        source: "Sofia Martinez",
        target: "general",
        tag: "💬Communication",
        duration: "01:22:11",
        desc: "Navigate global workplaces with cultural fluency."
    },
    {
        name: "💬Clear & Confident Communication",
        source: "Noah Sterling",
        target: "general",
        tag: "💬Communication",
        duration: "00:58:10",
        desc: "Speak with clarity and confidence in any setting."
    },
    {
        name: "💬Essential of Business Communication",
        source: "Sofia Martinez",
        target: "general",
        tag: "💬Communication",
        duration: "01:20:44",
        desc: "Master the essentials of professional communication."
    },
    {
        name: "🗣️Data Storytelling for Executives",
        source: "Ava Nakamura",
        target: "general",
        tag: "💬Communication",
        duration: "00:58:44",
        desc: "Turn data into compelling executive narratives."
    },
    {
        name: "🐍Python for Business Analytics",
        source: "Ava Nakamura",
        target: "beginner",
        tag: "💻Programming",
        duration: "01:47:33",
        desc: "Use Python to unlock business insights."
    },
    {
        name: "💻Programming Logic & Problem Solving",
        source: "Noah Sterling",
        target: "general",
        tag: "💻Programming",
        duration: "01:32:18",
        desc: "Develop logical thinking for coding challenges."
    },
    {
        name: "👨‍💼HR & People Management Basics",
        source: "Noah Sterling",
        target: "general",
        tag: "💼HR Management",
        duration: "01:05:50",
        desc: "Learn the fundamentals of managing people effectively."
    },
    {
        name: "🤝Conflict Resolution in the Workplace",
        source: "Sofia Martinez",
        target: "general",
        tag: "💼HR Management",
        duration: "01:05:20",
        desc: "Resolve workplace conflicts with confidence."
    },
    {
        name: "🌀Agile Leadership Essentials",
        source: "Sofia Martinez",
        target: "intermediate",
        tag: "📅Project Management",
        duration: "01:58:42",
        desc: "lead teams with agile leadership principles."
    },
    {
        name: "📅Project Management Fundamentals",
        source: "Sofia Martinez",
        target: "beginner",
        tag: "📅Project Management",
        duration: "02:25:10",
        desc: "Understand the basics of project management."
    },
    {
        name: "📅Project Management Starter Kit",
        source: "Noah Sterling",
        target: "beginner",
        tag: "📅Project Management",
        duration: "01:30:22",
        desc: "Kickstart your project management."
    },
    {
        name: "📈Data Visualization with Tableau",
        source: "Ava Nakamura",
        target: "intermediate",
        tag: "📈Data Visualization",
        duration: "02:22:18",
        desc: "Create impactful visuals with Tableau."
    },
    {
        name: "📊Data Analysis Foundation",
        source: "Noah Sterling",
        target: "beginner",
        tag: "📊Data Analysis",
        duration: "01:10:22",
        desc: "Build a strong base in a data analysis."
    },
    {
        name: "📊Foundation of Data Literacy",
        source: "Ava Nakamura",
        target: "general",
        tag: "📊Data Analysis",
        duration: "01:12:45",
        desc: "Understand and interpret data with confidence."
    },
    {
        name: "📐Applied Statistics for Analysts",
        source: "Ava Nakamura",
        target: "intermediate",
        tag: "📐Statistics",
        duration: "01:59:20",
        desc: "Apply statistical methods to real-world analysis."
    },
    {
        name: "📐Practical Statistics for Work",
        source: "Noah Sterling",
        target: "general",
        tag: "📐Statistics",
        duration: "01:12:33",
        desc: "Use statistics to solve workplace problems."
    },
    {
        name: "🔌Building Backend Services",
        source: "Noah Sterling",
        target: "intermediate",
        tag: "🔌Backend Development",
        duration: "02:12:40",
        desc: "Design and implement robust backend systems."
    },
    {
        name: "🔌Building REST APIs with Node.js",
        source: "Liam Chen",
        target: "intermediate",
        tag: "🔌Backend Development",
        duration: "02:55:33",
        desc: "Create scalable APIs using Node.js."
    },
    {
        name: "🔄️Building ETL Pipelines",
        source: "Ava Nakamura",
        target: "intermediate",
        tag: "🔧Data Engineering",
        duration: "02:15:42",
        desc: "Automate data workflows with ETL pipelines."
    },
    {
        name: "🔧Data Engineering Basics",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🔧Data Engineering",
        duration: "01:28:44",
        desc: "Learn the fundamentals of data engineering."
    },
    {
        name: "📈Visualizing Insights with Charts",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🔧Data Visualization",
        duration: "01:15:55",
        desc: "Present insights clearly with charts."
    },
    {
        name: "🗄️Introduction to Databases",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🗄️Databases",
        duration: "01:25:40",
        desc: "Present insights clearly with charts."
    },
    {
        name: "🧱SQL for Absolute Beginners",
        source: "Ava Nakamura",
        target: "beginner",
        tag: "🗄️Databases",
        duration: "02:05:10",
        desc: "Understanding the basics of database systems."
    },
    {
        name: "🤖AI & Machine Learning Overview",
        source: "Noah Sterling",
        target: "general",
        tag: "🤖AI ML",
        duration: "01:40:12",
        desc: "Discover the essentails of AI and ML."
    },
    {
        name: "🤖Machine Learning Essentials",
        source: "Ava Nakamura",
        target: "intermediate",
        tag: "🤖AI ML",
        duration: "03:10:54",
        desc: "Build ML models with practical techniques."
    },
    {
        name: "🧠Deep Learning with TensorFlow",
        source: "Ava Nakamura",
        target: "advanced",
        tag: "🤖AI ML",
        duration: "03:35:12",
        desc: "Train deep neural networks using TensorFlow."
    },
    {
        name: "🧬Feature Engineering Techniques",
        source: "Ava Nakamura",
        target: "advanced",
        tag: "🤖AI ML",
        duration: "02:48:29",
        desc: "Enhance ML models with feature engineering."
    },
    {
        name: "🎙️Executive Presence & Influence",
        source: "Sofia Martinez",
        target: "advanced",
        tag: "🧭Leadership",
        duration: "01:35:55",
        desc: "Develop presence and influence as a leader."
    },
    {
        name: "🧭Leadership Skills for New Managers",
        source: "Noah Sterling",
        target: "general",
        tag: "🧭Leadership",
        duration: "01:10:33",
        desc: "Learn core leadership skills for new managers."
    },
    {
        name: "🧭Leading High-Performance Teams",
        source: "Sofia Martinez",
        target: "intermediate",
        tag: "🧭Leadership",
        duration: "01:48:33",
        desc: "Guide teams to achieve peak performance."
    },
    {
        name: "🐋Docker & Containerization",
        source: "Liam Chen",
        target: "general",
        tag: "🚀DEV OPS",
        duration: "02:05:22",
        desc: "Package and deploy apps with Docker."
    },
    {
        name: "📦Kubernetes for Engineers",
        source: "Liam Chen",
        target: "advanced",
        tag: "🚀DEV OPS",
        duration: "03:25:19",
        desc: "Orchestrate containers with Kubernetes."
    },
    {
        name: "🚀CI&CD with GitHub Actions",
        source: "Liam Chen",
        target: "intermediate",
        tag: "🚀DEV OPS",
        duration: "01:48:55",
        desc: "Automate workflows with GitHub Actions."
    },
    {
        name: "🚀DevOps for Beginners",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🚀DEV OPS",
        duration: "01:35:18",
        desc: "Get started with DevOps practices."
    },
    {
        name: "🌿Git & GitHub Crash Course",
        source: "Liam Chen",
        target: "beginner",
        tag: "🛠️Development Tools",
        duration: "01:15:00",
        desc: "Learn version control with Git and GitHub."
    },
    {
        name: "🛠️Essential Developer Tools",
        source: "Noah Sterling",
        target: "beginner",
        tag: "🛠️Development Tools",
        duration: "01:20:05",
        desc: "Master the must-have tools for developers."
    },
];

export default courses;