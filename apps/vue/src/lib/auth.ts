import jwt from 'jsonwebtoken'

const SECRET_KEY = 'secret'

type Auth = {
  user: {
    id: string
    name: string
    email: string
  }
  expDate: number
}

export function getAuth(): Auth | null {
  const auth = localStorage.getItem('auth')
  if (!auth) return null

  try {
    const verified = jwt.verify(auth, SECRET_KEY) as Auth

    if (verified.expDate < Date.now()) {
      localStorage.removeItem('auth')
    }

    const decoded = jwt.decode(auth) as Auth

    return decoded
  } catch (error) {
    console.error('AUTH ERROR: ', error)
    localStorage.removeItem('auth')
    return null
  }
}

export function userLogin({ email }: { email: string }) {
  const token = jwt.sign(
    {
      user: {
        id: '1',
        email: email,
      },
    },
    SECRET_KEY,
    {
      expiresIn: '12h',
    },
  )

  localStorage.setItem('auth', token)

  return token
}
