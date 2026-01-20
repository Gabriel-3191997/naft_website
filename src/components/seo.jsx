import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

class SEO extends React.Component{

  render(){

    return(

      <>
      <Helmet>
        <title>Nasseman Art of Transparency</title>
        <meta
          name="description"
          content="Nasseman Art of Transparency promotes artistic excellence, openness, and creative integrity."
        />
      </Helmet>
      </>
    )
  }
}

export default SEO;
