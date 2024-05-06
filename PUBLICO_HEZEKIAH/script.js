//Variables
let Name = "John Doe";
let Address = "123 Main St, City";
let Age = 25;
let ClassRole = "Student"; // Default ClassRole
const Course = "BSCS";

//Course
if (Course === "BSCS") {
    //Class Roles
    switch (ClassRole) {
        case "Officer":
            console.log("Officer access detected.");
            // Fallback code for Officer
            break;
        case "Student":
            // Check password condition
            let password = "passwordBSCS"; // Password for BSCS Students
            if (password.length >= 12 && password.includes(Course)) {
                console.log(`Welcome ${Name}`);
                // Log Address multiple times based on Age
                for (let i = 0; i < Age; i++) {
                    console.log(Address);
                }
            } else {
                console.log("Invalid password or course mismatch.");
            }
            break;
        case "Teacher":
            console.log("Teacher access detected.");
            // Fallback code for Teacher
            break;
        default:
            console.log("Unknown ClassRole.");
            break;
    }
} else if (Course === "BSM") {
    // Fallback for BSM course
    console.log("Course not supported yet.");
} else if (Course === "BAEL") {
    // Fallback for BAEL course
    console.log("Course not supported yet.");
} else {
    console.log("Unknown Course.");
}