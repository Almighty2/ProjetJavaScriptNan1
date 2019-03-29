require('babel-register')

const mysql=require('mysql')

const db=mysql.createConnection({
	host:'localhost',
	database:'bd_garba',
	user:'root',
	password:''
})
document.querySelector('#form').addEventListener('submit',function recuperation(e) {
	c=document.querySelector('#email')
	d=document.querySelector('#password')
 }) 
recuperation()
db.connect((err)=>{

	if(err)
		console.log(err.message)
	else{
		 console.log("Connecter")	
			

			db.query("INSERT INTO login(email,password) VALUES(?,?)",[c.value,d.value],(err,result)=>{

		 	if(err){
		 		console.log(err.message)
		 	}else{
		 		console.log(result)
		 	}

		 })
	}

})