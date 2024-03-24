describe('Interview challenge', () => {
    beforeEach(() => {
        cy.session("Login Session", () =>{
            //Visit the website
           cy.visit('https://apex.oracle.com/pls/apex/r/challenge_workspace/qa-application/login?session=1620016833005')
           //Fill in Username field
           cy.get('input[placeholder="Username"]').type(Cypress.env('username'), {log:false})
           //Fill in Password field
           cy.get('input[placeholder="Password"]').type(Cypress.env('password'), {log:false})
           //Click the sign in button
           cy.get('button[id="B96027639347014978755"]').click()
           })
           cy.visit('https://apex.oracle.com/pls/apex/r/challenge_workspace/qa-application/home?session=114524371352483')
           //Assert login
           cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[1]/div/div/div[1]/div[1]/h2').contains('Products')
        })
     
     it('Change quantity order to 20', () => {
        //Navigate to page 2
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[6]/div[3]/span[1]/ul/li[2]').click()
        //Deselect 1st row
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[1]/th/span').click()
        //Select appropriate row
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/th').click()
        //Double click the quantity column
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/td[4]').dblclick()
        //Type 20
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/td[4]').type('20')
        //Save changes
        cy.xpath('/html/body/form/div[1]/div/div[2]/footer/div[1]/div[1]/div/div/div/div/div[2]/div[3]/div[2]/button').click()
        //Navigate back to page 2
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[6]/div[3]/span[1]/ul/li[2]').click()
        //Assert value change
        cy.xpath('2/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/td[4]').contains('20')
    })
     it('Change order origin customer', () => {
        //Navigate to page 2
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[6]/div[3]/span[1]/ul/li[2]').click()
        //Deselect 1st row
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[1]/th/span').click()
        //Select appropriate row
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/th').click()
        //Double click the customer column
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/td[5]').dblclick()
        //Select Deli
        cy.get('[data-id="1"]').click()
        //Save changes
        cy.xpath('/html/body/form/div[1]/div/div[2]/footer/div[1]/div[1]/div/div/div/div/div[2]/div[3]/div[2]/button').click()
        //Navigate back to page 2
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[6]/div[3]/span[1]/ul/li[2]').click()
        //Assert value change
        cy.xpath('/html/body/form/div[1]/div/div[2]/main/div[2]/div/div[2]/div/div/div[2]/div[3]/div[2]/div[1]/div[4]/div[3]/table/tbody/tr[5]/td[5]').contains('Deli')
     })

})