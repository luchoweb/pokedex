import Layout from "../views/layout"

const LegalPage = () => {
  return (
    <Layout>
      <div className="container pt-5 pb-5">
        <h1 className="mt-0 mb-4">Legal</h1>
        <p>Thank you for visiting and using Another Pokédex.</p>
        <p>This web app has been created for educational purposes only, it does not have and will not have a purpose other than educational.</p>
        <p>The information of names, images, skills, etc., we obtain from Pokeapi, a free service that allows us to obtain data through HTTP requests, we do not store any information without authorization.</p>
        <p>All images (photos, graphics, vectors) and names of the Pokemons are the property of their author, that is, The Pokemon Company, whose parent company is Nintendo.</p>
        <p className="mb-0">Thanks again for visiting the web app, if you have any comments, you can send an email to luchowebcom+pokedex@gmail.com</p>
      </div>
    </Layout>
  )
}

export default LegalPage;