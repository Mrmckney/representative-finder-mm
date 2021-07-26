function RepresentativeSearchResults(props) {
    
    const {offices, officials} = props


    return (
        <div>
            {offices.map(office => 
                <div className="representative-info">
                    <div className="office-title" >{office.name}</div>
                    <p>{officials[office.officialIndices[0]]?.name}</p>
                </div>
            )}

        </div>
    )
}

export default RepresentativeSearchResults