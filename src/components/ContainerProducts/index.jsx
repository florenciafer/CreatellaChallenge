import useDetail from "../../utils/hooks/useDetail";

import CardContainer from "../CardContainer/index";

const ContainerProducts = () => {
  const {useget, setSort} = useDetail();

  const [data, loading] = useget;

  const handleOnchange = (event) => {
    setSort(event.target.value);
  };

  if (loading) {
    return <div className="preloader"></div>;
  }
  if (data) {
    return (
      <div>
        <div>
          <h1>Products Grid</h1>

          <p>
            Here you're sure to find a bargain on some of the finest ascii
            available to purchase. Be sure to peruse our selection of ascii
            faces in an exciting range of sizes and prices.
          </p>

          <p>But first, a word from our sponsors:</p>
          {/*    <script>document.write('<img class="ad" src="/ads/?r=' + Math.floor(Math.random()*1000) + '"/>');</script> */}
        </div>
        <div className="season-container">
          <div className="season-select">
            <select
              name="order"
              className="form-control"
              onChange={handleOnchange}
            >
              <option value="none">No order</option>
              <option value="size">By size</option>
              <option value="price">By price</option>
              <option value="id">By ID</option>
            </select>
          </div>
        </div>
        <CardContainer cards={data}></CardContainer>
      </div>
    );
  }
  return null;
};

export default ContainerProducts;
