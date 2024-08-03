import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about Img" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are we</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas itaque
          repellendus quo facilis commodi recusandae dolorum libero nobis
          dignissimos dolores nihil natus similique mollitia tempore error sint
          perferendis voluptates, qui cum neque? Animi tempora neque, obcaecati,
          consequatur, quas magni harum modi quis eligendi eveniet facilis?
          Dignissimos explicabo necessitatibus doloremque nisi.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae
          distinctio laudantium maiores ullam ipsum harum voluptas iure unde
          excepturi nam omnis deleniti nobis exercitationem tempore dolorem
          commodi dicta, porro et ab? Magni, debitis et!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          suscipit illum ipsam!
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
