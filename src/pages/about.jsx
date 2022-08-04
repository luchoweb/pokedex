import Layout from "../views/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="container pt-5 pb-5">
        <h1 className="mb-3">About</h1>
        <p>Another Pokédex is a web app made with a lot of JavaScript.</p>
        <p>We build this web app using:</p>

        <ul>
          <li>React as the main tool.</li>
          <li>Node for local development.</li>
          <li>Bootstrap and SASS for styles.</li>
          <li>Git and GitHub for version management and remote repository.</li>
          <li>Chart JS 2 for the statistics graph of each pokemon.</li>
          <li>Netlify as a server service with automatic deployment to production.</li>
          <li>And all the data is obtained from the free PokéApi API.</li>
        </ul>

        <p>We accept comments, since the idea is always to improve.</p>
        <p>Thank you for visiting the web app, sincerely:</p>
        <p className="mb-0 fw-bold">Lucho Web</p>

      </div>
    </Layout>
  )
}

export default AboutPage;