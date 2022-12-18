export const Loader = ({children, isLoading}) => {
    if(!isLoading) return children
    else return (<div className="spinner-border" id="spinner" role="status">
    <span className="sr-only"></span>
  </div>)
}