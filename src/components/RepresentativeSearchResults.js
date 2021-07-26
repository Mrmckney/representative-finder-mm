function RepresentativeSearchResults(props) {
    
    const {offices, officials} = props

    

    return (
        <div>
            {offices.map(office => {
                const official = officials[office.officialIndices[0]]
                return ( 
                <div className="representative-info">
                    <div className="office-title" >
                        {office.name}
                    </div>
                    <p>
                        {official?.name}
                    </p>
                    <label>Phone:&nbsp;
                        <span>
                            {official?.phones[0]}
                        </span>
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
                                <span>
                                    {official?.emails[0]}
                                </span>
                            </label>
                            <br/>
                        </>
                    }
                    {official?.urls && 
                        <>
                            <label>Webiste:&nbsp;
                                <a href={official?.urls[0]} target="_blank">
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