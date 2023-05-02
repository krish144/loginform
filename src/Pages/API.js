import React from 'react'

function API(props) {

   const [result, setResult] = React.useState(props.dataObject);

  React.useEffect(() => {
    setResult(result);
  }, [result]);

  return <p>{result}</p>;
}



export default API