const Wallet = () => {
    const walletBalance =4300
  return (
   <>
   <div style={{backgroundColor:"grey", minHeight:100,minWidth:150,textAlign:"center",padding:"20px",borderRadius:"20px"}}>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} ><h3>Wallet Balance: &#8377;{walletBalance}</h3> </div>
    <div><button>+Add Income </button></div>
   </div>
   </>
  );
};

export default Wallet;
