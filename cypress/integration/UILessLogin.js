/// <reference types="cypress" />
xcontext("", () => {
    specify('select slider bar and make it 15 to 95 by using mouse events', function () {
        // cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        // cy.get("#txtUsername").type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get("#btnLogin").click()

        cy.request({
            method: "POST",
            url: "https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials",
            Headers: {
                "Connection": "keep-alive",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
                "accept": "/",
                "accept-encoding": "gzip, deflate",
                "content-type": "application/json",
                "content-length": 65
            },
            body: {
                txtUsername: 'Admin',
                txtPassword: 'admin123',
                Submit: 'LOGIN'
            },
            form: true
        }).then((el) => {
            cy.log(el)
            console.log(el)
        })
    });


})

///< reference  types= "cypress"/>

describe('verify the GET API', function () {

    // token
    //let token = "4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
    let token = "bda7cda7805fdd4ef8ed58a183bdbbd07503b8791d86967e0fb478ce9190db8f"

    it('verify the GET API', function () {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body).to.have.length(20)
        })

    })




    let obj = {
        name: "Tenalia Ramakrishna",
        gender: "male",
        email: `tenali.${Math.random() * 6}ramakridddsddddhna@15ce.com`,
        status: "inactive"
    }


    it('verify the POST API', function () {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: obj
        }).then(function (res) {
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body.email).to.equal(obj.email)
            expect(res.body.gender).to.equal(obj.gender)
            expect(res.body.status).to.equal(obj.status)
            expect(res.body.name).to.equal(obj.name)
        })
    })

    it.skip('verify the PUT API', function () {
        cy.request({
            method: 'PUT',
            url: "https://gorest.co.in/public/v2/users/56",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: obj
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body.email).to.equal(obj.email)
            expect(res.body.gender).to.equal(obj.gender)
            expect(res.body.status).to.equal(obj.status)
            expect(res.body.name).to.equal(obj.name)
        })
    })


    it.skip('verify the DELETE API', function () {
        cy.request({
            method: 'DELETE',
            url: "https://gorest.co.in/public/v2/users/6995",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(204)

        })
    })



    // 200
    // 201
    // 200
    // 404 
    // 403
    // 503



})