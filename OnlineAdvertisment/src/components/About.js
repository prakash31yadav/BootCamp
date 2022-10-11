import React from "react";
import "./style.css";
function About() {
  return (
    <div>
      <section>
        {/* <div className="py-4 bg-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-auto">
                <h4>About Us</h4>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline">
            <p>*******Tag Line******</p>
          </div>
        </div>
      </section>
      <div class="grid">
        <div class="item">
          <br></br>
          <u>Our Vision</u>
          <br></br>
          <br></br>
          <p class="para">
            Founded in 2022 , Tienda believe the best way to deliver a great
            user experience is by deeply understanding what people want and
            love. Then deliver the features , messages and content that are most
            helpful, relevant and timely. That's what makes users happy and
            loyal. We want customers to be happy because that's what makes our
            mission successful .
          </p>
        </div>
        <div class="item">
          <br></br>
          <u>Our Mision</u>
          <br></br>
          <br></br>
          <p class="para">
            We have served over <b>100+</b> customers till now. We are super happy with
            the customer feedbacks . We are even looking forward to adding more
            features that will make our customers' life more easy.
          </p>
        </div>
        <div class="item">
          <br></br>
          <u> Our Core Values</u>
          <br></br>
          <br></br>
          <p class="para">
            We build and strengthen our reputation through our customer's trust,
            in alignment with our promises and actions. We are responsible,
            respect each other, dedicated to safety, care for our environment
            and manage our business ethically. We aim to work together as we can
            achieve better results through unity. We are passionate about our
            people, our products and our service excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
