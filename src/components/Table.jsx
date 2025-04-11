const Table = () => {

    const header = [
        {title: 'SN'},
        {title: 'Email'},
        {title: 'Balance'},
        {title: 'Action'}
    ]

    return ( 
        <div className="flex flex-col">
            <div className="grid grid-cols-4">
                {header && header.map((item)=> (
                    <small>{item.title}</small>
                ))}
            </div>
        </div>
     );
}
 
export default Table;