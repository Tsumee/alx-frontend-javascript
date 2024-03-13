interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_a: Student = {
    firstName: 'Thami',
    lastName: 'Mncwabe',
    age: 20,
    location: 'Empangeni, KZN',
}
const student_b: Student = {
    firstName: 'Nkosinathi',
    lastName: 'Mncwabe',
    age: 18,
    location: 'Eskhawini, KZN',
}

const myStudentList: Student[] = [student_a, student_b];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

myStudentList.forEach((student: Student): void => {
	const myNewRow: HTMLTableRowElement = table.insertRow();
	const myNewRowFirstName: HTMLTableCellElement = myNewRow.insertCell();
	const myNewRowLocation: HTMLTableCellElement = myNewRow.insertCell();
	myNewRowFirstName.innerHTML = student.firstName;
	myNewRowLocation.innerHTML = student.location;
})
