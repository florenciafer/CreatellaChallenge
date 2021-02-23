import useDetail from "../../utils/hooks/useDetail";
import useget from '../../utils/hooks/useget';

import CardContainer from "../CardContainer/index";

const ContainerProducts = ({sort}) => {
  const [data, loading] = useget(useDetail())
  const[ setsort]=useDetail();
   const handleOnchange =(e)=>{
   setsort( e.target.value);
       console.log(setsort)
   }
     console.log(setsort)
    if (loading) {
        return (<div className="preloader"></div>)
    }
    if (data) {
          
        return (
            <div>
            <div>
            <h1>Products Grid</h1>

            <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

            <p>But first, a word from our sponsors:</p>
             <script>document.write('<img class="ad" src="/ads/?r=' + Math.floor(Math.random()*1000) + '"/>');</script>
        </div>
             <div className="season-container">
            <div className="selectContainer">
                <div className="season-select" >
                    <select name="" id="" >
                    {data.map((dat) => (
                       <div>
                       <option  className="select-dropwdown"onChange={handleOnchange} value={dat.size}>By size</option>
                    {/*    <option className="select-dropwdown" onChange={handleOnchange} value={dat.price}>By price</option>
                       <option className="select-dropwdown" onChange={handleOnchange} value={dat.id}>By ID</option> */}
                            </div>   
                    ))}
                     </select>
                </div>
            </div>
         <CardContainer cards={data}></CardContainer>
        </div>
            </div>
        

          

        )
    }
    return null;
}




export default ContainerProducts
