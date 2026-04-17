const Boolean =()=>{
 const isVaild=true
 const isVailds=false
 const Active =true
 const Actives =false
 const Success=true
 const Succes=false
 const Not=true
 const Nots=false
 const Fail =true
 const Fails=false

 return(<>
 <h1>{isVaild?"This is correct" :"This is wrong"}</h1>
 <h1>{Active?"This is Active" :"This is Unactive"}</h1>
 <h1>{Success?"This is Successfully" :"This is Fails"}</h1>
 <h1>{Not?"This is True" :"This is False"}</h1>
 <h1>{Fails?"This is Completed" :"This is Uncompleted"}</h1>
 <h1>{Actives?"This is Active" :"This is Unactive"}</h1>
 <h1>{Succes?"This is Successfully" :"This is Fails"}</h1>
 <h1>{Nots?"This is True" :"This is False"}</h1>
 </>)
}
export default Boolean