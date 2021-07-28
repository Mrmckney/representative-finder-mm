import { useState } from 'react'

function UserProfile() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    return(
        <div className="sign-up-container">
            <h1 className="page-title">User Profile</h1>
            <form>
                <label className="form-label">
                    First Name:&nbsp;
                    <input
                        name="firstName"
                        type="text"
                        className="form-input"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </label>
                <br />
                <label className="form-label">
                    Last Name:&nbsp;
                    <input
                        name="lastName"
                        type="text"
                        className="form-input"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </label>
                <br />
                <label className="form-label">
                    Address:&nbsp;
                    <input
                        name="address"
                        type="text"
                        className="form-input"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <br />
                <button 
                    className="submit-btn"
                    type="submit"
                >
                    {loading ? 'Signing in...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default UserProfile