import React from "react";

export default function Preview (props) {
  return (<div className="col-md-7">
    <div className="container-fluid p-3 border border-1 preview" id={props.id}>
      <div className="row">
        {props.state.headshot && <div className="col-3">
          <img src={props.state.headshot} alt="" className="img-fluid" />
        </div>}
        <div className="col text-center">
          <h5 className="display-5 fw-bold">{props.state.name}</h5>
          <h6 className="display-6">{props.state.specialty}</h6>
          <p>{props.state.contacts.map((c, i) => {
            const filtered = props.state.contacts.filter(c => c.length > 0);
            if (typeof c === "string") {
            if (c && filtered.indexOf(c) < filtered.length - 1) 
            return (<span key={i}> {c} |</span>); else 
            return (<span key={i}> {c} </span>);} else {
              if (c.textContent && filtered.indexOf(c) < filtered.length - 1) 
                return (<span key={i}> {c.html} |</span>); else 
                return (<span key={i}> {c.html} </span>);}
           })}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4 pe-3" id="left-bottom-section">
          {props.state.courses.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Education</figcaption>
          <ul className="list-group list-group-flush">
          {props.state.courses.map((c, i) => {
             return (<li className="list-group-item mb-2" key={i}>
                 <div>
                    <p className="mb-1">{c.org}</p>
                    <p className="mb-1 fw-bold">{c.name}</p>
                    <small className="fst-italic">{c.dates}</small>
                 </div>
               </li>
             );
          })}
          </ul>
          </figure>}
          {props.state.languages.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Languages</figcaption>
            <ul className="">{props.state.languages.map((lang, i) => {
              return (<li className="mb-2" key={i}><strong>{lang.lang}</strong>  {lang.level}</li>);
            })}</ul>
          </figure>}
        </div>
        <div className="col-8 ps-3">
          {props.state.bio && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Summary</figcaption>
              <div className="multiline">{props.state.bio}</div>
            </figure>}
          {props.state.skills.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Skills</figcaption>
            <ul className="list-group list-group-flush text-center">{props.state.skills.map((skill, i) => {
              return (<li className="list-group-item ms-2" key={i}>{skill}</li>);
            })}</ul>
          </figure>}
          {props.state.workplaces.length > 0 && <figure className="my-3">
            <figcaption className="display-6 mb-2 text-center">Work Experience</figcaption>
          <ul className="list-group list-group-flush">
          {props.state.workplaces.map((j, i) => {
             return (<li className="list-group-item mb-2" key={i}>
                 <div>
                    <p className="mb-1 fw-bold">{j.workplace}</p>
                    <p className="mb-2 lead">{j.position}</p>
                    <div className="multiline mb-2">{j.description}</div>
                    <small className="fst-italic">{j.dates}</small>
                 </div>
               </li>
             );
          })}
          </ul>
          </figure>}
        </div>
      </div>
    </div>
    <div className="text-center my-5">
      <button className="btn btn-primary btn-lg" onClick={props.state.downloadHtml2Pdf}>Save</button>
    </div>  
  </div>)
}