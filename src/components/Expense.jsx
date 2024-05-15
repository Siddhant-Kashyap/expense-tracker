const Expense = () => {
    const exp=500;
  return (
    <>
    <div style={{backgroundColor:"grey", minHeight:100,minWidth:150,textAlign:"center",padding:"20px",borderRadius:"20px"}}>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} ><h3>Expenses: &#8377;{exp}</h3> </div>
     <div><button>+Add Expenses </button></div>
    </div>
    </>
  )
}

export default Expense