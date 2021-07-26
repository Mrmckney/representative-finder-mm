import { useState } from 'react'

function RepresentativeSearch() {
    const [address, setAddress] = useState('')

    return (
        <div className="search-container" >
            <input 
                name="representativeSearch" 
                type="text"
                className="search-bar"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
        </div>
    )
}

export default RepresentativeSearch