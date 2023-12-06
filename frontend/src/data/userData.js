
let date = new Date();
let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
let dateAndTime = `${day}-${month}-${year}`;


let studentsData = [
    {
        stdName: "Ali",
        serialNumber: "2142",
        stdClassName: "10th",
        changedBy: "admin",
        dateAndTime: dateAndTime,
        amount: 2242,
        stdCNIC:'24252512512512',
        fatherName:'Ahyiuyioue',
        address:"gkjghgkhkaghfekjgehgf",
        contact:"21212512",
        gender:"Male"
    },
    {
        stdName: "Ali Arham",
        serialNumber: "2142",
        stdClassName: "10th",
        changedBy: "admin",
        amount: 5542,
        dateAndTime: dateAndTime,
        stdCNIC:'24252512512512',
        fatherName:'Ahyiuyioue',
        address:"gkjghgkhkaghfekjgehgf",
        contact:"21212512",
        gender:"Male"
    },
    {
        stdName: "Hello User",
        serialNumber: "2142",
        stdClassName: "10th",
        changedBy: "admin",
        amount: 5542,
        dateAndTime: dateAndTime,
        stdCNIC:'24252512512512',
        fatherName:'Ahyiuyioue',
        address:"gkjghgkhkaghfekjgehgf",
        contact:"21212512",
        gender:"Male"
    }
]

export default studentsData