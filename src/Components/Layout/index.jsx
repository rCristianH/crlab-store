const Layout = ({children}) => {
  return(
    <div className="flex flex-col items-center mt-20 cards-container">
      {children}
    </div>
  )

}
export {Layout}