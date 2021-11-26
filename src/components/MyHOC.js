

const MyHOC = (components, props ) => {
    return <div className="wrapper"> {components({...props})}</div>
}

export default MyHOC