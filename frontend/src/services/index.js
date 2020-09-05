import axios from 'axios'


//back
let Service = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 2000
})

Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Service.interceptors.response.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
        Auth.logout()
    }
})

//
let EmployeeCards = {

    //GETTING ONE CARD
    async getOneCard(id) {
        let res = await Service.get(`/AdminDashboard/${id}`)
        let data = res.data
        return {
            id: data._id,
            signupEmail: data.signupEmail,
            signupPassword: data.signupPassword,
            signupName: data.signupName,
            signupSurname: data.signupSurname,
            signupAddress: data.signupAddress,
            signupEnterprise: data.signupEnterprise,
            signupAge: data.signupAge,
            signupPosition: data.signupPosition,
            signupCity: data.signupCity,
            signupImage: data.signupImage,
            signupSex: data.signupSex,
            signupType: data.signupType,
            signupScore: data.signupScore
        }
    },
    //GETTING CARDS BY ENTERPRISE
    async getCardsEnterprise(enterprise) {
        let user = Auth.getUser()

        let response = await Service.post(`/EmployeeCards/${enterprise}`, {
            signupEmail: user.signupEmail
        })

        let data = await response.data
        return data
    },
    //DELETING
    async deleteEmployee(id) {
        let res = await Service.delete(`/AdminDashboard/delete/${id}`)
        console.log("Deleting post response", res)
    },
    //EDITING ONE
    async updateEmployeeOne(data, id) {
        let change = {
            signupName: data.signupName,
            signupSurname: data.signupSurname,
            signupAddress: data.signupAddress,
            signupEnterprise: data.signupEnterprise,
            signupAge: data.signupAge,
            signupPosition: data.signupPosition,
            signupCity: data.signupCity,
            signupSex: data.signupSex,
            signupScore: data.signupScore,
            signupScoreHistory: data.signupScoreHistory
        }

        await Service.patch(`/AdminDashboard/${id}`, change)
        console.log("Updated", change)
        return
    },
  //EDITING ALL
    async updateEmployee(data, id) {

        let change = {
            signupName: data.signupName,
            signupSurname: data.signupSurname,
            signupAddress: data.signupAddress,
            signupEnterprise: data.signupEnterprise,
            signupAge: data.signupAge,
            signupPosition: data.signupPosition,
            signupCity: data.signupCity,
            signupSex: data.signupSex,
            signupScore: data.signupScore,
            signupScoreHistory: data.signupScoreHistory
        }
        await Service.put(`/AdminDashboard/${id}`, change)
        console.log("Updated", change)
        return
    },

    //ALLEMPLOYEELIST
    async getAllCards(searchTerm) {
        let res = await Service.get(`/EmployeeCards?_any=${searchTerm}`)
        return res.data.map(data => {
            return {
                id: data._id,
                signupEmail: data.signupEmail,
                signupPassword: data.signupPassword,
                signupName: data.signupName,
                signupSurname: data.signupSurname,
                signupAddress: data.signupAddress,
                signupEnterprise: data.signupEnterprise,
                signupAge: data.signupAge,
                signupPosition: data.signupPosition,
                signupCity: data.signupCity,
                signupImage: data.signupImage,
                signupSex: data.signupSex,

            }
        })
    }
}

let Auth = {
    async login(signupEmail, signupPassword, signupEnterprise) {
        let res = await Service.post('/Login', {
            signupEmail: signupEmail,
            signupPassword: signupPassword,
            signupEnterprise: signupEnterprise


        })

        let user = res.data
        localStorage.setItem("user", JSON.stringify(user))
        return true
    },

    async register(signupName, signupSurname, signupPassword,
        signupAddress, signupAge, signupCity, signupEnterprise,
        signupPosition, signupSex, signupType, signupEmail) {
        let res = {
            signupEmail: signupEmail,
            signupPassword: signupPassword,
            signupName: signupName,
            signupSurname: signupSurname,
            signupAddress: signupAddress,
            signupEnterprise: signupEnterprise,
            signupAge: signupAge,
            signupPosition: signupPosition,
            signupCity: signupCity,
            signupSex: signupSex,
            signupType: signupType
        }
        Service.post('/Register', res)
            .then(res => {
                console.log("Response: ", res)
                console.log("Error: ", res.data.status)
                if (res.data.status) {
                    this.error = true
                }
            })
    },


    //LOGGED USER FUNCTIONS
    logout() {
        localStorage.removeItem('user')
    },
    getUser() {
        return JSON.parse(localStorage.getItem("user"))
    },
    authenticated() {
        let user = Auth.getUser()
        if (user && user.token) {
            return true
        }
        return false
    },
    getEnterprise() {
        let user = Auth.getUser()
        if (user && user.signupEnterprise) {
            return user.signupEnterprise
        } else false
    },
    getToken() {
        let user = Auth.getUser()
        if (user && user.token) {
            return user.token
        } else {
            return false
        }
    },

    state: {
        get authenticated() {
            return Auth.authenticated()
        },
        get userEmail() {
            let user = Auth.getUser()
            if (user) {
                return user.signupEmail
            }

        }
    }


}

export {
    Service,
    EmployeeCards,
    Auth
}