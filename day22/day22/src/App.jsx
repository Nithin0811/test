import Card from "./card"
import './App.css'
function App() {

  let postOne = "Nithin Sankar";
  let postTwo = "Culturals";
  let postThree = "Farewell";
 
  return (

    <section id="pricing">

    <div class="row">
      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>FREE</h3>
          </div>
          <div class="card-body">
            <h2>$0/month</h2>
            <p>Single User</p>
            <p>50GB Storage</p>
            <p>Unlimited Public Projects</p>
            <p>Community Access</p>
            <button class="btn btn-lg btn-block btn-outline-dark" type="button">BUTTON</button>
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>PLUS</h3>
          </div>
          <div class="card-body">
            <h2>$9/month</h2>
            <p>5 Users</p>
            <p>50GB Storage</p>
            <p>Unlimited Public Projects</p>
            <p>Community Access</p>
            <p>Unlimited Private Projects</p>
            <p>Dedicated Phone Support</p>
            <p>Free Subdomain</p>
            <button class="btn btn-lg btn-block btn-dark" type="button">BUTTON</button>
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4">
        <div class="card">
          <div class="card-header">
            <h3>PRO</h3>
          </div>
          <div class="card-body">
            <h2>$49/month</h2>
            <p>Unlimited Users</p>
            <p>50GB Storage</p>
            <p>Unlimited Public Projects</p>
            <p>Community Access</p>
            <p>Unlimited Private Projects</p>
            <p>Dedicated Phone Support</p>
            <p>Free Subdomain</p>
            <p>Monthly Status Reports</p>
            <button class="btn btn-lg btn-block btn-dark" type="button">BUTTON</button>
          </div>
        </div>
      </div>

    </div>

  </section>
    
  )
}

export default App