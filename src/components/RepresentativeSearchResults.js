import React, {useContext} from 'react'
import { UserContext } from '../App'

function RepresentativeSearchResults(props) {
    
    const {offices, officials} = props
    const {userProfile} = useContext(UserContext)


    return (
        <div>
            <h2>Here are your results {userProfile?.firstName}</h2>
            {offices.map(office => {
                const official = officials[office.officialIndices[0]]
                return ( 
                <div className="representative-info">
                    <div className="office-title" >
                        {office.name}
                    </div>
                    <p className="official-name">
                        {official?.name}
                    </p>
                    <label>Phone:&nbsp;
                        <a href={`tel:${official?.phones[0]}`}>
                            {official?.phones[0]}
                        </a>
                    </label>
                    <br />
                    {official?.address && 
                        <>
                            <label>Address:&nbsp;
                                <span>
                                    {official?.address[0]?.line1},
                                    &nbsp;{official?.address[0]?.city},
                                    &nbsp;{official?.address[0]?.state},
                                    &nbsp;{official?.address[0]?.zip}
                                </span>
                            </label>
                            <br />
                        </>
                    }
                    {official?.emails && 
                        <>
                            <label>Emails:&nbsp;
                                <a href={`mailto:${official?.emails[0]}`}>
                                    {official?.emails[0]}
                                </a>
                            </label>
                            <br/>
                        </>
                    }
                    {official?.urls && 
                        <>
                            <label>Webiste:&nbsp;
                                <a href={official?.urls[0]} target="_blank" rel="noreferrer">
                                    {official.urls[0]}
                                </a>
                            </label>
                            <br/>
                        </>
                    }
                </div>
                )}
            )}

        </div>
    )
}

export default RepresentativeSearchResults