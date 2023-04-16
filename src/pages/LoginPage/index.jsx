import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <form>
        <div>
          <label>Username</label>
          <input type={'text'} placeholder="UserName" />
        </div>
        <div>
          <label>Password</label>
          <input type={'password'} placeholder="Password" />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
