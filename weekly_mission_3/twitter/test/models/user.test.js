const UserService = require('../../app/services/UserService')
const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "jorgealexis", "Alexis", "Bio")
        //Aqui validas los resultados de ese codigo.
        //Esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("jorgealexis")
        expect(user.name).toBe("Alexis")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    } )

    test('Add getters', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "jorgealexis", "Alexis", "Bio")
        //Aqui validas los resultados de ese codigo.
        //Esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.getUsername).toBe("jorgealexis")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    } )

    test('Add setters', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "jorgealexis", "Alexis", "Bio")
        user.setUsername = "jorgealexis"
        expect(user.username).toBe("jorgealexis")
        
        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
        
    } )
})