import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="Representing the searchword"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
