// mockDb.js

const mockDb = {
  courses: {
    onlineCourses: [
    {
      id: 'online-1',
      title: 'Introduction to the Professional Chef Online Course',
      price: '£1495',
      duration: '6 months to complete',
      studyType: 'Online but Fully supported',
      certificate: 'Culinary reference document provided',
      courseOverview:
        'This foundational online program introduces students to essential culinary principles and techniques.',
      courseSchedule:
        'Self-paced with recommended weekly modules and live virtual check-ins every two weeks.',
      entryRequirements: [
        'Minimum age: 18',
        'Basic English proficiency',
        'Interest in culinary arts',
      ],
      description:
        'Learn the building blocks of a professional kitchen from the comfort of your home. This course covers essential knife skills, ingredient prep, flavor profiles, hygiene protocols, food theory, and recipe execution—all guided by expert chef mentors online. Ideal for beginners seeking a strong start in culinary arts.',
    },
    {
      id: 'online-2',
      title: 'Michelin Star Advanced Techniques Online Course',
      price: '£1495',
      duration: '6 months to complete',
      studyType: 'Online but Fully supported',
      certificate: 'Culinary reference document provided',
      courseOverview:
        'A deep dive into the refined world of Michelin Star culinary artistry from your home.',
      courseSchedule:
        'Self-paced with guided advanced tutorials, assessments, and monthly check-ins with master chefs.',
      entryRequirements: [
        'Minimum age: 18',
        'Completion of a foundational course or equivalent experience',
        'Fluency in English',
      ],
      description:
        'Explore high-level techniques in plating, sous vide, emulsification, molecular gastronomy, and contemporary cuisine. Learn the secrets used by top Michelin chefs and elevate your cooking to fine-dining standards. Designed for chefs aiming to polish and modernize their skills remotely.',
    },
  ],
  cookingCourses: [
    {
      id: 'cook-1',
      title: 'Hospitality Management and Advanced Food Science',
      price: '£19200',
      duration: '600 hours / 6 months',
      location: 'London',
      courseOverview:
        'Train to become a hospitality leader equipped with food science expertise.',
      courseSchedule:
        'Full-time program, Monday to Friday, including theory, kitchen lab work, and management simulations.',
      entryRequirements: [
        'Minimum age: 18',
        'Intermediate English',
        'Motivation for leadership in hospitality',
      ],
      description:
        'Combining food science and hospitality management, this course prepares students for leadership roles in culinary businesses. Learn food safety systems, team management, cost control, microbiology, and the chemistry behind modern cooking. Includes real-kitchen exposure and leadership training.',
    },
    {
      id: 'cook-2',
      title: 'Advanced Professional Chef Course',
      price: '£15200',
      duration: '550 hours / 6 months',
      location: 'London',
      courseOverview:
        'A complete immersion into advanced culinary skills and real-time restaurant kitchen operations.',
      courseSchedule:
        'Monday to Friday, hands-on training in top restaurants and chef-led workshops.',
      entryRequirements: [
        'Minimum age: 18',
        'Previous culinary experience or completion of a beginner program',
        'Intermediate English',
      ],
      description:
        'Master the art of modern cuisine in a professional environment. This course includes ingredient theory, precision knife work, advanced plating, butchery, modern sauces, fermentation, and molecular techniques. Train under Michelin-level chefs with practical rotations.',
    },
    {
      id: 'cook-3',
      title: 'Michelin Star Chef Course',
      price: '£12500',
      duration: '300 hours / 3 months',
      location: 'London',
      courseOverview:
        'Specialised training in Michelin-level cuisine, led by top-tier chefs.',
      courseSchedule:
        'Hands-on mentorship in live Michelin partner kitchens, 5 days per week.',
      entryRequirements: [
        'Minimum age: 18',
        'Prior professional kitchen experience required',
        'English proficiency',
      ],
      description:
        'This elite course offers advanced training in Michelin-starred techniques. Learn artistry, discipline, and innovation through real kitchen immersion. Refine your skills with molecular tools, haute plating, and seasonal tasting menus.',
    },
    {
      id: 'cook-4',
      title: 'Professional Chef Course',
      price: '£9600',
      duration: '325 hours / 3 months',
      location: 'London',
      courseOverview:
        'A comprehensive program that builds core culinary skills and kitchen discipline.',
      courseSchedule: 'Practical sessions from Monday to Friday in professional kitchens.',
      entryRequirements: ['Minimum age: 18', 'English proficiency'],
      description:
        'Get trained in the fundamentals of professional cooking—from ingredient prep to sauce making, butchery, and service workflow. Perfect for those entering the industry or transitioning careers.',
    },
    {
      id: 'cook-5',
      title: 'Kosher Professional Chef Course',
      price: '£15700',
      duration: '400 hours / 4 months',
      location: 'London',
      courseOverview:
        'Professional training rooted in kosher dietary principles and modern cooking methods.',
      courseSchedule: 'In-kitchen sessions, combined with theory and religious compliance modules.',
      entryRequirements: ['Minimum age: 18', 'Knowledge of kosher principles preferred', 'English fluency'],
      description:
        'This course covers culinary techniques while aligning with kosher certification and religious observance. Learn from chefs who understand both gastronomy and cultural requirements.',
    },
    {
      id: 'cook-6',
      title: 'Halal Advanced Professional Chef Course',
      price: '£15200',
      duration: '550 hours / 6 months',
      location: 'London',
      courseOverview:
        'Advanced culinary program structured around halal dietary law and top-tier cooking standards.',
      courseSchedule: 'Monday to Friday, hands-on sessions in certified halal kitchens.',
      entryRequirements: ['Minimum age: 18', 'Respect for halal practices', 'Culinary interest or prior experience'],
      description:
        'Train in professional culinary settings that respect halal dietary laws. Focused on modern techniques, ingredient sourcing, and kitchen management—all within halal-compliant environments.',
    },
    {
      id: 'cook-7',
      title: 'Professional Chef Course - Italian cuisine',
      price: '£9600',
      duration: '325 hours / 3 months',
      location: 'London',
      courseOverview:
        'Dedicated to authentic Italian techniques, recipes, and regional diversity.',
      courseSchedule: 'Includes practical cooking, wine pairing, and ingredient sourcing from Italian suppliers.',
      entryRequirements: ['Minimum age: 18', 'English proficiency', 'Passion for Italian cuisine'],
      description:
        'From handmade pasta to regional sauces and classic desserts, this course dives into the heart of Italian cuisine. Led by native chefs, you’ll explore culinary heritage and technique in equal measure.',
    },
    {
      id: 'cook-8',
      title: 'Professional Patisserie and Confectionary Course',
      price: '£20500',
      duration: '840 hours / 6 months',
      location: 'London',
      courseOverview:
        'The most comprehensive pastry program available, covering classical and modern patisserie.',
      courseSchedule: 'Full-day sessions Monday to Friday with pastry labs and sugar art workshops.',
      entryRequirements: ['Minimum age: 18', 'Basic baking knowledge recommended', 'English proficiency'],
      description:
        'Explore everything from viennoiserie to plated desserts and chocolate sculpting. With access to professional pastry kitchens and tools, this course prepares you for elite patisserie careers.',
    },
    {
      id: 'cook-9',
      title: 'Introduction to the Professional Chef Course',
      price: '£5300',
      duration: '80 hours / 2 weeks',
      location: 'London',
      courseOverview:
        'A short but intensive introduction to professional kitchen basics.',
      courseSchedule: 'Two-week intensive block; 5 days/week in a live kitchen.',
      entryRequirements: ['Minimum age: 18', 'English proficiency'],
      description:
        'Designed for beginners, this course offers an immersive taste of life in a working kitchen. Gain hands-on experience with prep, plating, and workflow essentials.',
    },
    {
      id: 'cook-10',
      title: 'Advanced Cooking Techniques',
      price: '£5300',
      duration: '80 hours / 2 weeks',
      location: 'London',
      courseOverview:
        'Fast-track your skills with two weeks of high-intensity, advanced kitchen instruction.',
      courseSchedule: '10 consecutive weekdays with chef mentorship.',
      entryRequirements: ['Minimum age: 18', 'Prior experience or completion of a basic course'],
      description:
        'This compact course sharpens your knife work, sauce skills, and timing in a live kitchen. Designed for intermediate chefs ready to step up.',
    },
    {
      id: 'cook-11',
      title: 'Intensive Professional Pastry Programme',
      price: '£7200',
      duration: '80 hours / 2 weeks',
      location: 'London',
      courseOverview:
        'An immersive experience in artisan pastry and modern dessert design.',
      courseSchedule: 'Full-day hands-on pastry training over 2 weeks.',
      entryRequirements: ['Minimum age: 18', 'English proficiency', 'Passion for pastry'],
      description:
        'Designed for pastry enthusiasts and professionals alike. Master layered desserts, tarts, mousses, and finishing techniques in a fast-paced environment.',
    },
  ],

  },

  promotions: [
    {
      id: "bundle-discount",
      title: "10% Off When You Enroll in Both Online Courses",
      description: "Enroll in both the Introduction and Michelin Star Online Courses and get 10% off",
      applicableCourses: ["online-intro", "online-michelin"],
      type: "discount"
    },
    {
      id: "new-course-launch",
      title: "New Pastry Intensive Programme Now Available!",
      description: "Master pastry arts in just 2 weeks with our newest course offering.",
      applicableCourses: ["pastry-intensive"],
      type: "new-course"
    }
  ],

  team: {
    leadership: [
      {
        id: "ceo",
        name: "Giuseppe Rossi",
        role: "Founder & CEO",
        bio: "Visionary founder with over 20 years of experience in Michelin-starred kitchens."
      },
      {
        id: "dean",
        name: "Maria Conti",
        role: "Dean of Culinary Programmes",
        bio: "Leads curriculum development with a focus on hands-on practical learning."
      }
    ],
    instructors: [
      {
        id: "chef-luca",
        name: "Chef Luca Romano",
        specialty: "Italian Cuisine",
        bio: "Award-winning Italian chef and mentor."
      },
      {
        id: "chef-amelia",
        name: "Chef Amelia Harper",
        specialty: "Pastry and Confectionery",
        bio: "Former head pastry chef at a 2-Michelin-star restaurant."
      }
    ]
  }
};

export default mockDb;


 
