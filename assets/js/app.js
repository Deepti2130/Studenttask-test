const cl = console.log;

const stdcontainer = document.getElementById("stdcontainer");
const stdform =document.getElementById("stdform");


const stdArry = [

{
	fname:"Deepti",
	lname:"Jadhav",
	email:"djadhav@gmail.com",
	contact:9767506354,
	id:123
},
{
	fname:"Jay",
	lname:"Jadhav",
	email:"jjadhav@gmail.com",
	contact:9767504456,
	id:124
}

]

const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const createnewstd = (arr, idcontainer) => {
	
	let result = ` `;
	
	arr.forEach ((std,i) => {
		
		result += `<tr>
                  <td>${i+1}</td>
                  <td>${std.fname}</td>
                  <td>${std.lname}</td>
                  <td>${std.email}</td>
                  <td>${std.contact}</td>
                  </tr>`
	})
	
	idcontainer.innerHTML =result;
}
createnewstd(stdArry, stdcontainer);



const Onstdsubmit = (eve) => {
	
	eve.preventDefault();
	
	let newstd = {
		
		fname:eve.target['0'].value,
		lname:eve.target['1'].value,
		email:eve.target['2'].value,
		contact:eve.target['3'].value,
		id:generateUuid()
	}
	
	stdArry.unshift(newstd);
	cl(stdArry);
	createnewstd(stdArry, stdcontainer);
	stdform.reset();
}


stdform.addEventListener("submit", Onstdsubmit);