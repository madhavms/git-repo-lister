export const Loader = ({children, isLoading}) => {
  if(!isLoading) {
    return children
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
        <div className="spinner-border" id="spinner" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }
}
