const form = document.getElementById("form")
const content = document.getElementById("message")
const contentAux = content
let report = new Object() 
let emailsCadastrados = new Array ()

    form.addEventListener('submit', (event) => {
       
        event.preventDefault()
        report.nome = document.getElementById("nome").value
        report.email = document.getElementById("email").value
        report.pass = document.getElementById("pass").value
        report.passCheck = document.getElementById("pass-check").value
        
        fetch(document.getElementById("linkHTMLmessage").getAttribute("href"))  //promisse
        .then(resp => resp.text()) 
        .then( function (html) {
       
            if (report.pass == report.passCheck) {
                
                let check = true;
                for (let index = 0; index < emailsCadastrados.length; index++) {
                    if(emailsCadastrados[index] == report.email) check = false
                }
    
                if (check) {
                    emailsCadastrados.push(report.email)
                    content.innerHTML = html
                    let h1 = document.getElementById("titulo")
                    let p = document.getElementById("description")
                    h1.innerHTML =  report.nome
                    p.innerHTML = "Sua conta foi criada com sucesso!"
                }else {
                    content.innerHTML = html
                    let h1 = document.getElementById("titulo")
                    let p = document.getElementById("description")
                    h1.innerHTML =  "Email já cadastrado"
                    p.innerHTML = "Este email já foi cadastrado"
                }
           
            }else {
    
                content.innerHTML = html
                let h1 = document.getElementById("titulo")
                let p = document.getElementById("description")
                h1.innerHTML =  "Senha incorreta"
                p.innerHTML = "Senha inserida incompatível."
    
            }
    
           
    
            let buttonOk = document.getElementById("end")
                buttonOk.addEventListener("click",(event) => {
                    content.innerHTML = null
    
            })
           
        })

    });
    
    








