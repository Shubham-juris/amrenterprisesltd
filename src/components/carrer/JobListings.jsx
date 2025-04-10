import React from "react";

const jobPosts = [
  {
    title: "OPERATIONS SUPERVISOR",
    date: "2025-01-02",
    location: "Barrhead, Alberta T7N 1L1, Canada",
    salary: "$28.00/hour",
    schedule: "Day, Evening, Morning, Night, Weekend",
    startDate: "As soon as possible",
    education: "Secondary (high) school graduation certificate",
    language: "English",
    experience: "1 year to less than 2 years",
    tasks: [
      "Resolve work-related issues",
      "Train staff and supervise activities",
      "Assign, coordinate, and review work",
      "Organize and maintain inventory",
      "Coordinate work activities with other departments",
    ],
    skills: [
      "Time management",
      "Team player",
      "Accurate",
      "Reliability",
      "Initiative",
      "Flexibility",
      "Interpersonal skills",
      "Oral communication",
    ],
    benefits: ["Health benefits", "Vision care benefits"],
    employmentGroup: "Youth, Indigenous people, newcomers to Canada",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "WAREHOUSE COORDINATOR",
    date: "2025-01-04",
    location: "Calgary, Alberta T3K 1X4, Canada",
    salary: "$22.50/hour",
    schedule: "Morning, Weekend",
    startDate: "Immediately",
    education: "High school diploma",
    language: "English, French",
    experience: "Less than 1 year",
    tasks: [
      "Manage incoming shipments",
      "Track inventory levels",
      "Coordinate warehouse staff",
      "Ensure safety protocols",
      "Oversee warehouse documentation",
    ],
    skills: [
      "Attention to detail",
      "Multitasking",
      "Communication",
      "Time management",
      "Problem-solving",
    ],
    benefits: ["Dental plan", "Flexible schedule"],
    employmentGroup: "Persons with disabilities, Veterans",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "CUSTOMER SERVICE REPRESENTATIVE",
    date: "2025-01-06",
    location: "Toronto, Ontario M3H 5T1, Canada",
    salary: "$20.00/hour",
    schedule: "Day, Evening, Weekend",
    startDate: "2025-01-15",
    education: "College diploma",
    language: "English",
    experience: "2 years",
    tasks: [
      "Handle customer inquiries",
      "Resolve complaints",
      "Maintain call logs",
      "Provide service information",
      "Escalate issues as needed",
    ],
    skills: [
      "Empathy",
      "Listening skills",
      "Clear communication",
      "Patience",
      "Problem-solving",
    ],
    benefits: ["Paid vacation", "Employee discounts"],
    employmentGroup: "Newcomers to Canada",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "MARKETING ASSISTANT",
    date: "2025-01-05",
    location: "Edmonton, Alberta T5J 3N4, Canada",
    salary: "$25.00/hour",
    schedule: "Full time",
    startDate: "Flexible",
    education: "Diploma in Marketing",
    language: "English",
    experience: "1 year",
    tasks: [
      "Assist with campaign planning",
      "Maintain social media",
      "Coordinate events",
      "Manage CRM data",
      "Create marketing reports",
    ],
    skills: ["Creativity", "Writing", "Team collaboration", "Time management"],
    benefits: ["Flexible work environment", "Remote work option"],
    employmentGroup: "Youth, Visible minorities",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "FINANCE CLERK",
    date: "2025-01-03",
    location: "Vancouver, BC V6B 1B1, Canada",
    salary: "$30.00/hour",
    schedule: "Monday to Friday",
    startDate: "2025-01-20",
    education: "Bachelor’s degree in Accounting",
    language: "English",
    experience: "3 years",
    tasks: [
      "Prepare invoices",
      "Manage accounts payable/receivable",
      "Assist in audits",
      "Bank reconciliation",
      "Update financial records",
    ],
    skills: [
      "Excel proficiency",
      "Analytical thinking",
      "Confidentiality",
      "Detail orientation",
    ],
    benefits: ["Health insurance", "RRSP matching"],
    employmentGroup: "Seniors, Newcomers",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "SOFTWARE DEVELOPER",
    date: "2025-01-10",
    location: "Remote",
    salary: "$45.00/hour",
    schedule: "Flexible, Remote",
    startDate: "Negotiable",
    education: "Bachelor’s in Computer Science",
    language: "English",
    experience: "2-4 years",
    tasks: [
      "Develop and test applications",
      "Collaborate with design teams",
      "Fix bugs",
      "Implement APIs",
      "Write technical documentation",
    ],
    skills: ["React", "Node.js", "Teamwork", "Problem-solving", "Git"],
    benefits: ["Remote work", "Stock options"],
    employmentGroup: "LGBTQ2+, Youth",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "HUMAN RESOURCES GENERALIST",
    date: "2025-01-08",
    location: "Regina, Saskatchewan S4P 3X1, Canada",
    salary: "$32.00/hour",
    schedule: "Full Time",
    startDate: "2025-02-01",
    education: "Diploma or degree in HR",
    language: "English",
    experience: "2 years",
    tasks: [
      "Recruitment support",
      "Onboarding and offboarding",
      "Policy updates",
      "Benefits coordination",
      "Staff engagement programs",
    ],
    skills: ["Empathy", "Policy knowledge", "Communication", "Discretion"],
    benefits: ["Health, Dental", "Training programs"],
    employmentGroup: "New immigrants, Women",
    contactEmail: "hr@info.amayraenterprises@gmail.com",
  },
  {
    title: "SALES CONSULTANT",
    date: "2025-01-07",
    location: "Mississauga, ON L5R 3T4, Canada",
    salary: "$26.00/hour + commission",
    schedule: "Full time, Some weekends",
    startDate: "Within 2 weeks",
    education: "Diploma in Sales or related field",
    language: "English, Punjabi",
    experience: "1-3 years",
    tasks: [
      "Meet with clients",
      "Close sales",
      "Follow up with prospects",
      "Report sales metrics",
      "Understand customer needs",
    ],
    skills: [
      "Negotiation",
      "People skills",
      "CRM tools",
      "Presentation skills",
    ],
    benefits: ["Commission", "Travel reimbursements"],
    employmentGroup: "Visible minorities, Youth",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "LOGISTICS COORDINATOR",
    date: "2025-01-09",
    location: "Winnipeg, Manitoba R3C 4G1, Canada",
    salary: "$24.50/hour",
    schedule: "Shift-based",
    startDate: "ASAP",
    education: "Post-secondary diploma",
    language: "English",
    experience: "1 year",
    tasks: [
      "Plan delivery routes",
      "Schedule drivers",
      "Track shipments",
      "Communicate delays",
      "Inventory oversight",
    ],
    skills: ["Planning", "Multitasking", "Tech-savvy", "Clear communication"],
    benefits: ["Transportation support", "Insurance"],
    employmentGroup: "Newcomers, Indigenous peoples",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
  {
    title: "RECEPTIONIST",
    date: "2025-01-11",
    location: "Ottawa, Ontario K1A 0B1, Canada",
    salary: "$19.00/hour",
    schedule: "Day shift, Mon–Fri",
    startDate: "2025-01-25",
    education: "High school diploma",
    language: "English, French",
    experience: "6 months",
    tasks: [
      "Answer phone calls",
      "Greet visitors",
      "Schedule appointments",
      "Sort mail",
      "Maintain front desk",
    ],
    skills: [
      "Friendly demeanor",
      "Computer literacy",
      "Time management",
      "Organization",
    ],
    benefits: ["Wellness programs", "Paid holidays"],
    employmentGroup: "Women, Youth",
    contactEmail: "info.amayraenterprises@gmail.com",
  },
];

const JobCard = ({ job }) => (
  <div className="bg-black text-white border-t border-gray-700 py-12 px-8 md:px-12 mb-14">
    <div className="md:flex md:justify-between">
      {/* Job Info */}
      <div className="md:w-1/2 space-y-8">
        <h3 className="text-blue-400 text-2xl font-semibold">We're Hiring</h3>
        {/* <p className="text-base text-gray-400">Date posted: {job.date}</p> */}
        <p className="text-white font-bold text-2xl">{job.title}</p>

        <ul className="text-lg text-gray-300 space-y-2">
          <li>- Location: {job.location}</li>
          <li>- Salary: {job.salary}</li>
          <li>- Time of employment: Permanent / Full Time</li>
          <li>- Schedule: {job.schedule}</li>
          <li>- Start date: {job.startDate}</li>
        </ul>

        <div>
          <h4 className="font-semibold mt-6 text-xl">Overview</h4>
          <p className="text-lg text-gray-300">Language: {job.language}</p>
          <p className="text-lg text-gray-300">Education: {job.education}</p>
          <p className="text-lg text-gray-300">Experience: {job.experience}</p>
        </div>

        <div>
          <h4 className="font-semibold mt-6 text-xl">Tasks</h4>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
            {job.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mt-6 text-xl">Skills</h4>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
            {job.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mt-6 text-xl">Benefits</h4>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
            {job.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mt-6 text-xl">Who can apply?</h4>
          <p className="text-lg text-gray-300">{job.employmentGroup}</p>
        </div>

        <p className="mt-6 text-lg text-blue-400">
          How to apply:{" "}
          <a href={`mailto:${job.contactEmail}`} className="underline">
            {job.contactEmail}
          </a>
        </p>
      </div>

      {/* Apply Form */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <h4 className="text-white font-semibold mb-6 text-xl">Apply Now</h4>
        <form className="space-y-6 text-lg">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-600 bg-transparent text-white "
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-3 border border-gray-600 bg-transparent text-white "
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 border border-gray-600 bg-transparent text-white "
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-600 bg-transparent text-white "
          ></textarea>

          <div className="flex justify-between text-blue-400 text-base">
            <a href="#">📎 Attach Resume</a>
            <span className="text-gray-400">Attachments (0)</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 "
          >
            Submit Application
          </button>

          <p className="text-base text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </div>
  </div>
);

const JobListings = () => {
  return (
    <div className="bg-black text-white">
      {jobPosts.map((job, index) => (
        <JobCard key={index} job={job} index={index} />
      ))}
    </div>
  );
};

export default JobListings;
