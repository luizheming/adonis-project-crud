'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')
const Mail = use('Mail')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])
    const user = await User.create(data)

    await Mail.send('mails.welcome', user.toJSON() , (message) => {
      message
        .to(user.email)
        .from('lg.luizh@gmail.com')
        .subject('Boas vindas!')
    })

    return user
  }
}

module.exports = UserController
